import { getProducts  } from '../model/productModel.js';

const getProductsCon = async (req, res) => {
    try {
        const products = await getProducts(); // Call model function
        res.json(products);
    } catch (error) {
        console.error('Error in getProductsCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

export { getProductsCon  };
 