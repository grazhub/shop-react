import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "./Page_Bag.css"
import {IProducts} from "./Page_Main"

function PageBag(props: IProducts) {
	return (
		<div className="pageMarkup">
			<Header/>
			<div className="pageMarkup__content">
				<Sidebar products={props.products}/>
			</div>
		</div>
	)
}

export default PageBag
