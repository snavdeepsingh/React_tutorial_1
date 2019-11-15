import jsonPlaceHolder from '../apis/jsonPlaceholder';

// es2016 syntax 
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
        
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}


// normal syntax

// export const fetchPosts = () => {
//     return async function(dispatch, getState){
//         const response = await jsonPlaceHolder.get('/posts');
        
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         })
//     }
// };

