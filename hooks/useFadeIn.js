import { useEffect, useState } from "react";

export default function useFadeIn() {
  const isHome = window.location.pathname === "/";
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 150);
  }, []);
  return { isMounted, isHome };
}
