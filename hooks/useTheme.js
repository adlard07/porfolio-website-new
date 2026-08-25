"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = "portfolio-theme";

// Theme lives on the DOM (the data-theme attribute set by the blocking
// script in app/layout.js) rather than in React state, so we read it via
// useSyncExternalStore instead of copying it into state with an effect.
// This is the pattern React recommends for external mutable values and it
// sidesteps any hydration mismatch: React automatically renders the
// server snapshot on the first pass and reconciles to the real client
// value right after, with no manual effect required.
let listeners = [];

function subscribe(callback) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((listener) => listener !== callback);
  };
}

function getSnapshot() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

function getServerSnapshot() {
  return "light";
}

function notify() {
  listeners.forEach((listener) => listener());
}

/** Wraps the app and exposes the current theme plus a setter/toggler. */
export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      // Storage can fail in private browsing modes — theme still applies
      // for the current session via the DOM attribute.
    }
    notify();
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getSnapshot() === "dark" ? "light" : "dark");
  }, [setTheme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
