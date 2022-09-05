import { IProduct } from "../../pages/Page_Main"
import { collection, getDocs } from "firebase/firestore"
import { myAppDB } from "../../pages/firebase"
import { phonesActions, TPhonesAction } from "../../types/phones"
import { Dispatch } from "react"
import axios from "axios"

export const fetchPhones = () => {
	return async (dispatch: Dispatch<TPhonesAction>): Promise<void> => {
		dispatch({ type: phonesActions.fetchPhones })
		let phones: IProduct[]
		const phonesCollectionRef = collection(myAppDB, "products")
		await getDocs(phonesCollectionRef)
			.then((response) => {
				phones = response.docs.map((doc) => ({
					data: doc.data(),
					id: doc.id,
				}))
				console.log(phones)
				dispatch({ type: phonesActions.fetchPhonesSuccess, payload: phones })
			})
			.catch((error) => {
				console.log(error.message)
				dispatch({ type: phonesActions.fetchPhonesError, payload: error.message })
			})
	}
}