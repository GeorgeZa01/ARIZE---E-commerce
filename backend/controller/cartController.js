import {
    getCartByUserId,
    addCartItem,
    deleteCartItem,
    updateCartItemQuantity
} from '../model/cartModel.js';

// 🛒 Fetch all cart items for the logged-in user
export const getCartItemsCon = async (req, res) => {
    try {
        const userId = req.user.id; // Extract user ID from JWT token middleware
        console.log('📌 User ID:', userId);

        const cartItems = await getCartByUserId(userId);
        if (!cartItems || cartItems.length === 0) {
            return res.json({ success: false, message: "Cart is empty" });
        }

        res.json({ success: true, cart: cartItems });
    } catch (error) {
        console.error("❌ Error fetching cart:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};

// ➕ Add item to cart
export const handleAddToCart = async (req, res) => {
    try {
        const userId = req.user.id; // Extract user ID from JWT
        const { productId, quantity } = req.body;

        if (!productId || !quantity) {
            return res.status(400).json({ success: false, error: "Missing required fields" });
        }

        await addCartItem(userId, productId, quantity);
        res.json({ success: true, message: "Item added to cart" });
    } catch (error) {
        console.error("❌ Error adding to cart:", error);
        res.status(500).json({ success: false, error: "Failed to add item to cart" });
    }
};

// ❌ Remove item from cart
export const handleRemoveFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { cartId } = req.params;

        if (!cartId) {
            return res.status(400).json({ success: false, error: "Cart ID is required" });
        }

        await deleteCartItem(userId, cartId);
        res.json({ success: true, message: "Item removed from cart" });
    } catch (error) {
        console.error("❌ Error removing cart item:", error);
        res.status(500).json({ success: false, error: "Failed to remove item from cart" });
    }
};

// 🔼 Increase quantity
export const handleIncreaseQuantity = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, error: "Product ID is required" });
        }

        await updateCartItemQuantity(userId, productId, 1);
        res.json({ success: true, message: "Quantity increased" });
    } catch (error) {
        console.error("❌ Error increasing quantity:", error);
        res.status(500).json({ success: false, error: "Failed to increase quantity" });
    }
};

// 🔽 Decrease quantity
export const handleDecreaseQuantity = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, error: "Product ID is required" });
        }

        await updateCartItemQuantity(userId, productId, -1);
        res.json({ success: true, message: "Quantity decreased" });
    } catch (error) {
        console.error("❌ Error decreasing quantity:", error);
        res.status(500).json({ success: false, error: "Failed to decrease quantity" });
    }
};
