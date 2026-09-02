import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext(null);
const STORAGE_KEY = "oberoitech-currency";

export const CURRENCIES = {
  USD: { symbol: "$", rate: 1, decimals: 2 },
  EUR: { symbol: "€", rate: 0.92, decimals: 2 },
  INR: { symbol: "₹", rate: 83, decimals: 0 },
};

function readInitialCurrency() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw && CURRENCIES[raw] ? raw : "USD";
  } catch {
    return "USD";
  }
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(readInitialCurrency);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currency);
  }, [currency]);

  function convert(usdAmount) {
    return usdAmount * CURRENCIES[currency].rate;
  }

  function format(usdAmount) {
    if (usdAmount === 0) return "Free";
    const { symbol, decimals } = CURRENCIES[currency];
    const converted = convert(usdAmount);
    return `${symbol}${converted.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}`;
  }

  const value = { currency, setCurrency, convert, format, currencies: Object.keys(CURRENCIES) };

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}
