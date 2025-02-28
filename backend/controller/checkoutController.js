import {getCartItems, createOrder, saveOrderItems, clearCart , updateOrderStatus} from '../model/checkoutModel.js'

const checkoutCon = async (req, res) => {
    try {
        const { userId, paymentMethod } = req.body;

        if (!userId || !paymentMethod) {
            return res.status(400).json({ success: false, message: 'User ID and payment method are required' });
        }

        const cartItems = await getCartItems(userId);

        if (cartItems.length === 0) {
            return res.status(400).json({ success: false, message: 'Cart is empty' });
        }

        const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
        const orderId = await createOrder(userId, totalAmount, paymentMethod, 'Pending');

        await saveOrderItems(orderId, cartItems);
        await clearCart(userId);

        return res.json({ success: true, message: 'Order placed successfully', orderId });
    } catch (error) {
        console.error('Checkout error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
const updateOrderStatusCon = async (req, res) => {
    try {
        const { orderId, status } = req.body;
    
        if (!orderId || !status) {
            return res.status(400).json({ success: false, message: 'Order ID and status are required' });
        }
    
        const result = await updateOrderStatus(orderId, status);
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
    
        return res.json({ success: true, message: 'Order status updated successfully' });
    }
    catch (error) {
        console.error('Update order status error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
export {checkoutCon, updateOrderStatusCon}