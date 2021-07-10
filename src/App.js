import React from 'react'
import Product from './pages/Product';

const App = () => {
	const products = [
		{
			"prod_name": "Prod1",
			"prod_img": "Honda_Civic_1.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod2",
			"prod_img": "Mazda_CX-30.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 21,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "Blue"]
		},
		{
			"prod_name": "Prod3",
			"prod_img": "Toyota Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 22,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod4",
			"prod_img": "Toyota Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 1025,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod5",
			"prod_img": "Toyota_Rav4.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["White", "Black", "Blue"]
		},
		{
			"prod_name": "Prod6",
			"prod_img": "Toyota_Acura_1.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 29,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod7",
			"prod_img": "Honda_Civic_1.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod8",
			"prod_img": "Mazda_CX-30.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 21,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "Blue"]
		},
		{
			"prod_name": "Prod9",
			"prod_img": "Toyota Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 22,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod10",
			"prod_img": "Toyota Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 1025,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod11",
			"prod_img": "Toyota_Rav4.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["White", "Black", "Blue"]
		},
		{
			"prod_name": "Prod12",
			"prod_img": "Toyota_Acura_1.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 29,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod13",
			"prod_img": "Honda_Civic_1.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod14",
			"prod_img": "Mazda_CX-30.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 21,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "Blue"]
		},
		{
			"prod_name": "Prod15",
			"prod_img": "Toyota Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 22,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod16",
			"prod_img": "Toyota Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 1025,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod17",
			"prod_img": "Toyota_Rav4.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["White", "Black", "Blue"]
		},
		{
			"prod_name": "Prod18",
			"prod_img": "Toyota_Acura_1.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 29,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod19",
			"prod_img": "Toyota_Rav4.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["White", "Black", "Blue"]
		},
		{
			"prod_name": "Prod20",
			"prod_img": "Toyota_Acura_1.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 29,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		}
	]

	return (
	<Product data = {products}/>
	)
}

export default App