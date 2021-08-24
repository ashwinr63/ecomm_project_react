import React, {useState, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Product from 'pages/Product';
import SingleProductPage from 'pages/SingleProductPage';
import ProdContext from 'contexts/ProdContext';
import cartContext from 'contexts/cartContext';
import CartPage from 'pages/cartPage'
import FavPage from 'pages/FavPage'
import Page404 from 'pages/Page404';
import Favourite from './components/Favourite';


const App = () => {
	
	const products = [
		{
			"prod_id" : 1,
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
			"prod_id" : 2,
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
			"prod_id" : 3,
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
		{	"prod_id" : 4,
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
			"prod_id" : 4,
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
			"prod_id" : 5,
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
			"prod_id" : 7,
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
			"prod_id" : 8,
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
			"prod_id" : 9,
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
			"prod_id" : 10,
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
			"prod_id" : 11,
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
			"prod_id" : 12,
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
			"prod_id" : 13,
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
			"prod_id" : 14,
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
			"prod_id" : 15,
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
			"prod_id" : 16,
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
			"prod_id" : 16,
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
			"prod_id" : 18,
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
			"prod_id" : 19,
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
			"prod_id" : 20,
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

	const addCart = (id) => {
	const cartPage = products.find((product) => product[0].id === id)
	if(cartPage) {
		setCart(cart.filter((product)=>product[0].id === id ? {...cart, qty: cartPage.qty++} : product))
	} else {
		const newProduct = products.filter((product) => product.prod_id === id);
		setCart([...cart, {...newProduct, qty: 1}])
	}
	}

	// to delete the cart page 
	const deleteCart = () => {
	const delCart = cart.filter((product)=> product.prod_id !== product.prod_id)
	return (
		setCart(delCart)
		)
	}

	//Favorites
	const [favorite, setFavorite] = useState([]);
	const addFav =(id)=>{
		const newFav = products.filter((product) => product.prod_id === id)[0]
		if(favorite.includes(newFav)){
            setFavorite(favorite.filter((favProd)=> favProd.id !== newFav.id));
			document.getElementById(`fav_btn${id}`)
	} else {
		setFavorite([...favorite, newFav])
		document.getElementById(`fav_btn${id}`)
	}
}
	// Product Page
	const viewProduct =() => {
		const SingleProductPage = products.filter((product) => product.prod_id === product.prod_id)
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