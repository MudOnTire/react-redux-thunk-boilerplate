import { FETCH_POST, NEW_POST } from './types';

function fetchPosts() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POST,
        payload: posts
      }));
  }
}

function createPost(post) {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => dispatch({
        type: NEW_POST,
        payload: data
      }));
  }
}

export { fetchPosts, createPost };