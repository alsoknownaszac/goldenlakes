import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

//   import { useIsomorphicLayoutEffect } from '../helpers/isomorphicEffect';

// useIsomorphicLayoutEffect(() => {
//   const ctx = gsap.context(() => {
//   }, ref);
//   return () => ctx.revert();
// }, []);
