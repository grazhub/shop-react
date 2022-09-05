import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"
import {IProducts} from "../pages/Page_Main"

import "./Sidebar.css"
import {useSelector} from "react-redux"

// interface ISidebarProps {
//     disabled?: boolean
// }

function Sidebar(props: IProducts) {
	const [companies, setCompanies] = useState([] as Array<string>)
	const [isOpen, setIsOpenState] = useState(false)
	const [activeCompany, setActiveCompany] = useState()
	const state = useSelector(state => state)
	console.log(state)

	useEffect(() => {
		!companies.length && setCompaniesOnce()
	})

	function setCompaniesOnce() {
		const companies: Array<string> = []
		props.products.forEach((phone) => {
			const compName = phone.data.company ?? (phone.data.name?.split(" ")[0] || "")
			if (!companies.includes(compName)) companies.push(compName)
		})
		console.log(companies)
		setCompanies(companies)
	}

	function toggleCompanies() {
		setIsOpenState(!isOpen)
	}

	function selectCompany(comp: any) {
		console.log(comp)
		setActiveCompany(activeCompany !== comp ? comp : undefined)
	}

	function getCompaniesCode() {
		return companies.map((comp, index) => {
			return <div className={comp === activeCompany ? "sidebar__list_item active" : "sidebar__list_item"} key={comp.toLowerCase()} onClick={() => selectCompany(comp)}>
				<span className="material-icons-outlined">description</span>
				{comp}
			</div>
		})
	}

	return (
		<aside className="sidebar">
			<div className="sidebar__folder" onClick={toggleCompanies}>
				<span className="material-symbols-outlined">{isOpen ? "folder_open" : "folder"}</span>
				Phones
			</div>
			{isOpen ? <div className="sidebar__list">{getCompaniesCode()}</div> : null}
		</aside>
	)
}

export default Sidebar
