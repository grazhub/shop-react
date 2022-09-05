// import {applyMiddleware, createStore} from "redux"
// import thunk from "redux-thunk"
// import {rootReducer} from "./reducers"
import { configureStore } from "@reduxjs/toolkit"
// import {companyReducer} from "./reducers/companyReducer"
import { phonesReducer } from "./reducers/phonesReducer"

// export const store = createStore(rootReducer, applyMiddleware(thunk))

export const store = configureStore({
	reducer: {
		// companies: companyReducer,
		phones: phonesReducer,
	}
})

export type AppDispatch = typeof store.dispatch