let homeState = {
    homeList: [],
    isLoading: false,
    errorMessage: ""
}
const homeReducers = (state = homeState, action) => {
    console.log(action)
    switch (action.type) {
        case 'HOME_LOADING':
        return {
            ...state,
            isLoading: true
        }
        case 'HOME_LOADED':
        return {
            ...state,
            isLoading: false,
            homeList: [...action.homeList]
        }
        case 'HOME_LOAD_ERROR':
        return {
            ...state,
            isLoading: false,
            errorMessage: action.errorResponse
        }
    }
    return state;
}

export default homeReducers;