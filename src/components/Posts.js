import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const postItems = posts && posts.map(p => (
      <div key={p.id}>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);