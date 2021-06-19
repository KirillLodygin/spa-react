import { Store } from 'redux';
import { actions as PageActions } from "../actions/PageActions";
import { actions as UserActions } from "../actions/UserActions";

export interface IUserState {
    name: string,
    error: string,
    isFetching: boolean
}

export interface IPageState {
    year: number,
    photos: Array<any>,
    isFetching: boolean,
    error: string
}

export interface IAppState {
    user: IUserState,
    page: IPageState
}

export interface IStoreState {
    store: Store<IAppState>
}

export interface IDispatchUserProps {
    handleLogin: () => (dispatch: any) => void
}

export interface IDispatchPageProps {
    getPhotos: (year: number) => any
}

type PropertiesTypes<T> = T extends {[key: string]: (...args: any) => infer U} ? U :never;
export type PageActionsTypes = PropertiesTypes<typeof PageActions>;
export type UserActionsTypes = PropertiesTypes<typeof UserActions>;
