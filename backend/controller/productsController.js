import { 
    getProducts, getLaptops, getMonitors, getPCtower, getAccessories, 
    deleteProduct, addProduct, updateProduct, getSingleProduct, searchProducts 
} from '../model/productModel.js';

const getProductsCon = async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (error) {
        console.error('Error in getProductsCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

const getLaptopsCon = async (req, res) => {
    try {
        const laptops = await getLaptops();
        res.json(laptops);
    } catch (error) {
        console.error('Error in getLaptopsCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

const getMonitorsCon = async (req, res) => {
    try {
        const monitors = await getMonitors();
        res.json(monitors);
    } catch (error) {
        console.error("Error in getMonitorsCon:", error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

const getPCtowerCon = async (req, res) => {
    try {
        const PCtower = await getPCtower();
        res.json(PCtower);
    } catch (error) {
        console.error("Error in getPCtowerCon:", error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

const getAccessoriesCon = async (req, res) => {
    try {
        const accessories = await getAccessories();
        res.json(accessories);
    } catch (error) {
        console.error("Error in getAccessoriesCon:", error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

const deleteProductCon = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId || isNaN(productId)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const result = await deleteProduct(productId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: `No product found with ID: ${productId}` });
        }

        res.json({ message: `Product with ID ${productId} deleted successfully` });
    } catch (error) {
        console.error('Error in deleteProductCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

const addProductCon = async (req, res) => {
    try {
        const product = req.body;
        const result = await addProduct(product);
        res.json(result);
    } catch (error) {
        console.error('Error in addProductCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

const updateProductCon = async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;

        if (!productId || Object.keys(productData).length === 0) {
            return res.status(400).json({ error: "Invalid product ID or empty update data" });
        }

        const result = await updateProduct(productId, productData);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found or no changes made" });
        }

        res.json({ message: "Product updated successfully", affectedRows: result.affectedRows });
    } catch (error) {
        console.error("Error in updateProductCon:", error);
        res.status(500).json({ error: "Internal Server Error in controller" });
    }
};

const getSingleProductCon = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId || isNaN(productId)) {
            return res.status(400).json({ error: 'Invalid Product ID' });
        }

        const product = await getSingleProduct(productId);
        if (!product) {
            return res.status(404).json({ error: `Product with ID ${productId} not found` });
        }

        res.json(product);
    } catch (error) {
        console.error(`Error fetching product with ID ${req.params.productId}:`, error);
        res.status(500).json({ error: 'Internal Server Error while fetching product' });
    }
};

const searchCon = async (req, res) => {
    try {
        const { query } = req.query; // Get the search query from the URL
        if (!query || query.trim().length === 0) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        const products = await searchProducts(query);
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found matching your search' });
        }

        res.json(products); // Send the products as the response
    } catch (error) {
        console.error('Error in searchCon:', error);
        res.status(500).json({ error: 'Internal Server Error in search controller' });
    }
};


export { 
    getProductsCon, getLaptopsCon, getMonitorsCon, getPCtowerCon, getAccessoriesCon, 
    deleteProductCon, addProductCon, updateProductCon, getSingleProductCon, searchCon 
};
