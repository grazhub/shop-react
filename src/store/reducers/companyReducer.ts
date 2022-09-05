import {companyActions, ICompanyState, TCompanyAction} from "../../types/companies"

const initialState: ICompanyState = {
	companies: [],
	activeCompany: undefined,
}

export const companyReducer = (state = initialState, action: TCompanyAction): ICompanyState => {
	switch (action.type) {
		case companyActions.setActive:
			return {companies: [], activeCompany: action.payload}
		case companyActions.getCompanies:
			return {companies: action.payload, activeCompany: undefined}
		default:
			return state

	}
}