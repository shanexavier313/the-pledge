// Action creator
export const authUser = (token) => { 
    return {
        type: 'LOGIN_SUCCESS',
        payload: token
    };
};

export const logoutUser = () => { 
    return {
        type: 'LOGOUT'
    };
};