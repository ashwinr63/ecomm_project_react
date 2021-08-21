import React, {useState, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Product from 'pages/Product';
import SingleProductPage from 'pages/SingleProductPage';
import ProdContext from 'contexts/ProdContext';
import cartContext from 'contexts/cartContext';
import CartPage from 'pages/cartPage'
import FavPage from 'pages/FavPage'
import Page404 from 'pages/Page404';


const App = () => {
	
	const products = [
		{
			"prod_name": "Prod1",
			"prod_img": "Honda_Civic.jpg",
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
			"prod_img": "Mazda_CX.jpg",
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
			"prod_img": "Toyota_Camry.jpg",
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
			"prod_img": "Toyota_Camry.jpg",
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
			"prod_img": "Toyota_Rav.jpg",
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
			"prod_img": "Toyota_Acura.jpg",
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
			"prod_img": "Honda_Civic.jpg",
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
			"prod_img": "Mazda_CX.jpg",
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
			"prod_img": "Toyota_Camry.jpg",
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
			"prod_img": "Toyota_Camry.jpg",
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
			"prod_img": "Toyota_Rav.jpg",
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
			"prod_img": "Toyota_Acura.jpg",
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
			"prod_img": "Honda_Civic.jpg",
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
			"prod_img": "Mazda_CX.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart","old_price": 50,
			"prod_price": 21,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "Blue"]
		},
		{
			"prod_name": "Prod15",
			"prod_img": "Toyota_Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 22,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod16",
			"prod_img": "Toyota_Camry.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 1025,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod17",
			"prod_img": "Toyota_Rav.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["White", "Black", "Blue"]
		},
		{
			"prod_name": "Prod18",
			"prod_img": "Toyota_Acura.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 29,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		},
		{
			"prod_name": "Prod19",
			"prod_img": "Toyota_Rav.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 20,
			"prod_rate": 4,
			"prod_type": ["Diesel", "Gas", "Electric"],
			"prod_color":["White", "Black", "Blue"]
		},
		{
			"prod_name": "Prod20",
			"prod_img": "Toyota_Acura.jpg",
			"prod_link": "product.html",
			"prod_desc": "Here is a shot of this product that might entice a user to click and add it to their cart",
			"old_price": 50,
			"prod_price": 29,
			"prod_rate": 4,
			"prod_type": ["Diesel","Gas", "Electric"],
			"prod_color":["Red", "Black", "White"]
		}
	]

	const [cart, setCart] = useState([])

	const addCart = (ProdSearch) => {
	const cartPage = products.find((product) => product.prod_name === ProdSearch)
	return(
		setCart([...cart, cartPage])
		)
	}

	// to delete the cart page 
	const deleteCart = () => {
	const delCart = cart.filter((product)=> product.prod_name !== product.prod_name)
	return (
		setCart(delCart)
		)
	}
	// Product Page
	const viewProduct =() => {
		const SingleProductPage = products.filter((product) => product.prod_name === product.prod_name)
		return (
			SingleProductPage
		)
	}

	return (
		<Router>
			<ProdContext.Provider value= {{data:products, viewProduct:viewProduct, cart:cart, addCart:addCart, deleteCart:deleteCart}}>
			<Switch>
				<Route exact path="/"><Product data = {products}/></Route>
				<Route exact path="/SingleProductPage/:slug"><SingleProductPage /></Route>
				<Route exact path="/CartPage"><CartPage /></Route>
				<Route exact path="/FavPage"><FavPage /></Route>
				<Route exact path="*"><Page404 /></Route>
			</Switch>
			</ProdContext.Provider>
		</Router>
	
	)
}

export default App