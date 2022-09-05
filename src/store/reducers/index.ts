import {combineReducers} from "redux"
import {companyReducer} from "./companyReducer"
import {phonesReducer} from "./phonesReducer"

export const rootReducer = combineReducers({
	companies: companyReducer,
	phones: phonesReducer,
})

export type RootState = ReturnType<typeof rootReducer>