import { User } from './../../../models/user.interface';
export interface State {
    users: User[];
    error: string;
}

export const initialState: State = {
    users: [],
    error: ''
};
