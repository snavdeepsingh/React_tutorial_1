import jsonPlaceHolder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());


    // const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // userIds.forEach(id => dispatch(fetchUser(id)))

    // Lodash Chain syntax for above 
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
    
}


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


// =======================================
// Below is the lodash _.memoize method.
// export const fetchUser = id => dispatch => { 
//         _fetchUser(id, dispatch);  
// }

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
// })



// normal syntax

// export const fetchPosts = () => {

//  dispatch and getState is from redux-thunk
//     return async function(dispatch, getState){
//         const response = await jsonPlaceHolder.get('/posts');
        
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         })
//     }
// };

// ===============================
// normal Syntax
// export const fetchUser = function(id){
//     return function (dispatch){
//         _fetchUser(id, dispatch);
//     }
// };
