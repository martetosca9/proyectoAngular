import { User } from "src/app/dashboard/modules/users/models";
import { AuthActions } from "./auth.actions";
import { createReducer, on } from "@ngrx/store";

export const authFeaturekey = "auth"

export interface State { 
    authUser: User | null;
}

const initialState: State = {
    authUser: null,
}
export const reducer = createReducer(initialState,
        on(AuthActions.setAuthUser, (state, {data}) => ({...state, authUser: data})),
        on(AuthActions.resetState, () => initialState)
    )