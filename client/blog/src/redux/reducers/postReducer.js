import * as api from '../api';

const FETCH_POSTS_REQUEST = 'FETCH_POSTS_LOADING';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

const FETCH_SINGLE_POST_REQUEST = 'FETCH_SINGLE_POST_REQUEST';
const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';
const FETCH_SINGLE_POST_FAIL = 'FETCH_SINGLE_POST_FAIL';

const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
const CREATE_POST_FAIL = 'CREATE_POST_FAIL';

const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_FAIL = 'UPDATE_POST_FAIL';

const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAIL = 'DELETE_POST_FAIL';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS_REQUEST });
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAIL, payload: error.message });
  }
};

export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_SINGLE_POST_REQUEST });
    const { data } = await api.fetchSinglePost(id);
    dispatch({ type: FETCH_SINGLE_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SINGLE_POST_FAIL, payload: error.message });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_POST_REQUEST, payload: post });
    const { data } = await api.createPost(post);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CREATE_POST_FAIL, payload: error.message });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_POST_REQUEST });
    const { data } = await api.updatePost(id, post);
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: UPDATE_POST_FAIL, payload: error.message });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });
    const { data } = await api.deletePost(id);
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: data._id,
    });
  } catch (error) {
    dispatch({ type: DELETE_POST_FAIL, payload: error.message });
  }
};

export const postReducer = { deletePost, fetchPosts, fetchSinglePost, createPost, updatePost };
