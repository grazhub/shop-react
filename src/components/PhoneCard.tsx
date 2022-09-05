import React, {ChangeEvent, useState} from "react"
import {addDoc, collection} from "firebase/firestore"

import "./Header.css"
import {myAppDB} from "../pages/firebase"

interface IPhoneCardProps {
	item?: any
}

function PhoneCard(props: IPhoneCardProps) {
	const [name, setName] = useState(props.item[0].data.name)
	const [photo, setPhoto] = useState(props.item[0].data.photo)
	const [price, setPrice] = useState(props.item[0].data.price)

	function addNewPhone() {
		const phonesCollectionRef = collection(myAppDB, "products")
		addDoc(phonesCollectionRef, {
			name,
			photo,
			price,
		})
	}

	return (
		<div>
			<div>
				<input value={name} onChange={setName}/>
			</div>
			<div>
				<input value={price} onChange={setPrice}/>
			</div>
			<div>
				<input value={photo} onChange={setPhoto}/>
			</div>
			<button type="button" onClick={addNewPhone}>Add item</button>
		</div>
	)
}

export default PhoneCard
