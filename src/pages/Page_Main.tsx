import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "./Page_Main.css"
import Catalog from "../components/Catalog"

export interface IProduct {
	data: {
		company?: string
		name?: string
		photo?: string
		price?: number | string
	}
	id: string
}

export interface IProducts {
	products: Array<IProduct>
}

function PageMain(props: IProducts) {
	return (
		<div className="pageMarkup">
			<Header/>
			<div className="pageMarkup__content">
				<Sidebar products={props.products}/>
				<Catalog products={props.products}/>
			</div>
		</div>
	)
}

export default PageMain
