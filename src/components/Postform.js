import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {

  state = {
    title: '',
    body: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const post = {
      title,
      body
    };
    this.props.createPost(post);
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label><br />
            <input
              name="title"
              value={title}
              onChange={e => {
                this.setState({ title: e.target.value })
              }}
            />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
            <textarea
              name="body"
              value={body}
              onChange={e => {
                this.setState({ body: e.target.value })
              }}
            />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.posts.item
});

const mapDispatchToProps = {
  createPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Postform);