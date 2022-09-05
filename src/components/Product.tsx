import React from "react"
import {IProduct} from "../pages/Page_Main"

import "./Product.css"

interface IProductProps {
	item: IProduct
}

class Catalog extends React.PureComponent<IProductProps> {
	render() {
		return (
			<div className="productLine">
				<div className="productLine__image">
					<img src={this.props.item.data.photo}/>
				</div>
				<div className="productLine__name">{this.props.item.data.name}</div>
				<div className="productLine__price">{this.props.item.data.price}</div>
				<div className="productLine__amount">0</div>
				<div className="productLine__cart">
					{/* <button className='product_cart'> */}
					<span className="material-icons-outlined">shopping_cart</span>
					{/* </button> */}
				</div>
			</div>
		)
	}
}

export default Catalog
