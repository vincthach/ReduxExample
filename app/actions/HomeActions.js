export const homeLoading = () => {
    return {
        type: 'HOME_LOADING'
    }
}

export const homeLoaded = (list) => {
    return {
        type: 'HOME_LOADED',
        homeList: list
    }
}

export const homeLoadError = (errorVal) => {
    return {
        type: 'HOME_LOAD_ERROR',
        errorResponse: errorVal
    }
}

export const homeFetchList = () => {
    return (dispatch)  => {
         return fetch(`http://diachibenhvien.com/API/thongbaopage.php`)
                .then( response => response.json() )
                .then( resJson => dispatch( homeLoaded(resJson.list)) )
                .catch( error =>  dispatch( homeLoadError(error) ) )
    }
}