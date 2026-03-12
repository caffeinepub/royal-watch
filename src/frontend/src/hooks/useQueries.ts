import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useCartItems() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCartItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCartCount() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["cartCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getCartItemCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddToCart() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (watchId: string) => {
      if (!actor) throw new Error("No actor");
      return actor.addToCart(watchId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cartItems"] });
      qc.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
}

export function useRemoveFromCart() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (watchId: string) => {
      if (!actor) throw new Error("No actor");
      return actor.removeFromCart(watchId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cartItems"] });
      qc.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
}

export function useClearCart() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("No actor");
      return actor.clearCart();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cartItems"] });
      qc.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
}
