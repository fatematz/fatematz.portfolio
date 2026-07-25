"use client";

import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
