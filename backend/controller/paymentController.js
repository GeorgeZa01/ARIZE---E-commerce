import {processMastercardPayment, processPayPalPayment} from '../model/paymentModel.js'
import { updateOrderStatus } from '../model/checkoutModel.js'

const processPaymentCon = async (req, res) => {
    try {
        const { orderId, paymentMethod, paymentDetails } = req.body;

        if (!orderId || !paymentMethod) {
            return res.status(400).json({ success: false, message: 'Order ID and payment method are required' });
        }

        let paymentSuccess = false;

        if (paymentMethod === 'Mastercard') {
            paymentSuccess = await processMastercardPayment(paymentDetails);
        } else if (paymentMethod === 'PayPal') {
            paymentSuccess = await processPayPalPayment(paymentDetails);
        } else {
            return res.status(400).json({ success: false, message: 'Invalid payment method' });
        }

        if (paymentSuccess) {
            await updateOrderStatus(orderId, 'Completed');
            return res.json({ success: true, message: 'Payment successful' });
        } else {
            await updateOrderStatus(orderId, 'Failed');
            return res.status(400).json({ success: false, message: 'Payment failed' });
        }
    } catch (error) {
        console.error('Payment error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export { processPaymentCon };