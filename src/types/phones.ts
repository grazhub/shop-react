interface IProduct {
	data: {
		company?: string
		name?: string
		photo?: string
		price?: number | string
	}
	id: string
}

export interface IPhonesState {
	phones: IProduct[],
	loading: boolean,
	error: string | null,
}

export enum phonesActions {
	fetchPhones = "fetchPhones",
	fetchPhonesSuccess = "fetchPhonesSuccess",
	fetchPhonesError = "fetchPhonesError",
}

interface IFetchPhonesAction {
	type: phonesActions.fetchPhones,
}
interface IFetchPhonesSuccessAction {
	type: phonesActions.fetchPhonesSuccess,
	payload: IProduct[],
}
interface IFetchPhonesErrorAction {
	type: phonesActions.fetchPhonesError,
	payload: string,
}
export type TPhonesAction = IFetchPhonesAction | IFetchPhonesSuccessAction | IFetchPhonesErrorAction