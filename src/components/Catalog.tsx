import React from "react"
import {IProducts} from "../pages/Page_Main"

import "./Catalog.css"
import Product from "./Product"
import {useSelector} from "react-redux"
import {stat} from "fs"
import {useTypedSelector} from "../hooks/useTypedSelector"

function Catalog(props: IProducts) {
	const state = useTypedSelector(state => state.companies)
	console.log(state)
	const productsCode = props.products.map((product) => <Product key={product.id} item={{...product}}/>)
	return (
		<div className="catalogComponent">
			<div className="productsHeader">
				<div className="productsHeader__image">Image</div>
				<div className="productsHeader__name">
					<div>Name</div>
					<div>
						<input/>
					</div>
				</div>
				<div className="productsHeader__price">Price</div>
				<div className="productsHeader__amount">Amount</div>
				<div className="productsHeader__cart">Buy</div>
			</div>
			<div className="products">{productsCode}</div>
		</div>
	)
}

export default Catalog
