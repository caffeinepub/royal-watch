import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type CartItem = {
    watchId : Text;
    quantity : Nat;
  };

  module CartItem {
    public func fromMapEntry(entry : (Text, Nat)) : CartItem {
      let (watchId, quantity) = entry;
      {
        watchId;
        quantity;
      };
    };
  };

  let cart = Map.empty<Text, Nat>();

  public shared ({ caller }) func addToCart(watchId : Text) : async () {
    let currentQuantity = switch (cart.get(watchId)) {
      case (null) { 0 };
      case (?qty) { qty };
    };
    cart.add(watchId, currentQuantity + 1);
  };

  public shared ({ caller }) func removeFromCart(watchId : Text) : async () {
    if (not cart.containsKey(watchId)) {
      Runtime.trap("Watch is not in the cart.");
    };
    cart.remove(watchId);
  };

  public query ({ caller }) func getCartItems() : async [CartItem] {
    cart.entries().toArray().map(CartItem.fromMapEntry);
  };

  public shared ({ caller }) func clearCart() : async () {
    cart.clear();
  };

  public query ({ caller }) func getCartItemCount() : async Nat {
    var total = 0;
    for ((_, quantity) in cart.entries()) {
      total += quantity;
    };
    total;
  };
};
