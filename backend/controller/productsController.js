import { getProducts, getLaptops, getMonitors, getPCtower, getAccessories  } from '../model/productModel.js';

const getProductsCon = async (req, res) => {
    try {
        const products = await getProducts(); // Call model function
        res.json(products);
    } catch (error) {
        console.error('Error in getProductsCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};
const getLaptopsCon = async (req, res) => {
    try {
        const laptops = await getLaptops(); // Call model function
        res.json(laptops);
    } catch (error) {
        console.error('Error in getLaptopsCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};
const getMonitorsCon =async (req,res) => {
    try{
        const monitors =await getMonitors();
        res.json(monitors)
    }catch(error){
    console.log("Error in getMonitorsCon:",error)
    res.status(500).json({error:'Internal Server Error in controller'});
    }
};
const getPCtowerCon = async (req,res) => {
    try{
        const PCtower =await getPCtower();
        res.json(PCtower)
    }catch(error){
        console.log("Error in getMonitorsCon:",error)
        res.status(500).json({error:'Internal Server Error in controller'});
        } 
    };
const getAccessoriesCon = async (req,res) => {
    try{
        const accessories =await getAccessories();
        res.json(accessories)
    }catch(error){
        console.log("Error in getMonitorsCon:",error)
        res.status(500).json({error:'Internal Server Error in controller'});
        } 
    };

export { getProductsCon, getLaptopsCon, getMonitorsCon, getPCtowerCon, getAccessoriesCon };
 