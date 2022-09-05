import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import PageMain, { IProduct } from './Page_Main'
import PageHistory from './Page_History'
import PageBag from './Page_Bag'
import PageLogout from './Page_Logout'
// import {collection, getDocs} from "firebase/firestore"
// import {myAppDB} from "./firebase"
// import {useDispatch} from "react-redux"
import { fetchPhones } from '../store/action-creators/phones'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useTypedDispatch } from '../hooks/useTypedDispatch'

function PagesRouter() {
    // const [products, setProducts] = useState([] as IProduct[])
    const { phones, error, loading } = useTypedSelector((state) => state.phones)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchPhones())
        // getProducts()
    }, [])

    // function getProducts(): void {
    // 	let phones: IProduct[]
    // 	const phonesCollectionRef = collection(myAppDB, "products")
    // 	getDocs(phonesCollectionRef)
    // 		.then((response) => {
    // 			phones = response.docs.map((doc) => ({
    // 				data: doc.data(),
    // 				id: doc.id,
    // 			}))
    // 			console.log(phones)
    // 			setProducts(phones)
    // 		})
    // 		.catch((error) => {
    // 			console.log(error.message)
    // 		})
    // }

    return (
        <Routes>
            <Route path='/' element={<PageMain products={[...phones]} />} />
            <Route path='/history' element={<PageHistory products={phones} />} />
            <Route path='/bag' element={<PageBag products={phones} />} />
            <Route path='/logout' element={<PageLogout products={phones} />} />
            {/* <Route path="/client/:clid" element={<Page_Client/>} /> */}
        </Routes>
    )
}

export default PagesRouter
