import { User } from './../../../models/user.interface';
export interface State {
    users: User[];
    error: string;
    selectedUserId: string;
    isLoading: boolean;
}

export const initialState: State = {
    users: [],
    error: '',
    selectedUserId: '',
    isLoading: false
};
