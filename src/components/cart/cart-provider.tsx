'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react';
import {
  DELIVERY_FEE,
  FREE_DELIVERY_THRESHOLD,
  type Product,
} from '@/data/mock-data';

const STORAGE_KEY = 'groziq.cart';

export interface CartLine {
  product: Product;
  qty: number;
}

/**
 * The cart lives in localStorage, which is an external store rather than React
 * state, so it is read through useSyncExternalStore. `EMPTY` is a stable
 * reference used for the server render and for hydration, so the first client
 * paint always matches the server HTML.
 */
const EMPTY: CartLine[] = [];

let lines: CartLine[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function readStorage(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed : EMPTY;
  } catch {
    // Private mode, blocked storage, or corrupt JSON — start empty.
    return EMPTY;
  }
}

function writeStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // Storage can be full or blocked; the cart still works for this session.
  }
}

function subscribe(listener: () => void) {
  // The first subscription happens after hydration, so this is the safe point
  // to pull the persisted cart in.
  if (!loaded) {
    loaded = true;
    const stored = readStorage();
    if (stored.length > 0) {
      lines = stored;
    }
  }
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => lines;
const getServerSnapshot = () => EMPTY;

function update(next: CartLine[]) {
  lines = next;
  writeStorage();
  emit();
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  subtotal: number;
  delivery: number;
  total: number;
  amountToFreeDelivery: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const add = useCallback((product: Product, qty = 1) => {
    const existing = lines.find((l) => l.product.id === product.id);
    update(
      existing
        ? lines.map((l) =>
            l.product.id === product.id ? { ...l, qty: l.qty + qty } : l
          )
        : [...lines, { product, qty }]
    );
    setIsOpen(true);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    update(
      qty <= 0
        ? lines.filter((l) => l.product.id !== id)
        : lines.map((l) => (l.product.id === id ? { ...l, qty } : l))
    );
  }, []);

  const remove = useCallback((id: string) => {
    update(lines.filter((l) => l.product.id !== id));
  }, []);

  const clear = useCallback(() => update(EMPTY), []);

  const value = useMemo<CartContextValue>(() => {
    const count = current.reduce((n, l) => n + l.qty, 0);
    const subtotal = current.reduce((n, l) => n + l.product.price * l.qty, 0);
    const delivery =
      subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    return {
      lines: current,
      count,
      subtotal,
      delivery,
      total: subtotal + delivery,
      amountToFreeDelivery: Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add,
      setQty,
      remove,
      clear,
    };
  }, [current, isOpen, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
