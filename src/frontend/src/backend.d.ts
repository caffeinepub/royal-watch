import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CartItem {
    watchId: string;
    quantity: bigint;
}
export interface backendInterface {
    addToCart(watchId: string): Promise<void>;
    clearCart(): Promise<void>;
    getCartItemCount(): Promise<bigint>;
    getCartItems(): Promise<Array<CartItem>>;
    removeFromCart(watchId: string): Promise<void>;
}
