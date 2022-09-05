export interface ICompanyState {
	companies: string[],
	activeCompany: string | undefined,
}
export enum companyActions {
	setActive = "setActiveCompany",
	getCompanies = "getCompanies",
}
interface ISetActive {
	type: companyActions.setActive,
	payload: string,
}
interface IGetCompanies {
	type: companyActions.getCompanies,
	payload: string[],
}
export type TCompanyAction = ISetActive | IGetCompanies