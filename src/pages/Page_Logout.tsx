import React from "react"
import Header from "../components/Header"
import "./Page_Logout.css"
import {IProducts} from "./Page_Main"

function PageLogout(props: IProducts) {
	return (
		<div className="pageMarkup">
			<Header disabled={true}/>
			<div className="pageMarkup__content"></div>
		</div>
	)
}

export default PageLogout
