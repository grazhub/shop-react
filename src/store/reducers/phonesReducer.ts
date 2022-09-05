import {IPhonesState, phonesActions, TPhonesAction} from "../../types/phones"

const initialState: IPhonesState = {
	phones: [],
	loading: false,
	error: null,
}

export const phonesReducer = (state = initialState, action: TPhonesAction): IPhonesState => {
	switch (action.type) {
		case phonesActions.fetchPhones:
			return {loading: true, error: null, phones: []}
		case phonesActions.fetchPhonesSuccess:
			return {loading: false, error: null, phones: action.payload}
		case phonesActions.fetchPhonesError:
			return {loading: false, error: action.payload, phones: []}
		default:
			return state
	}
}