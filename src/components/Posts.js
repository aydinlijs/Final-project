import React from "react";
import { connect } from "react-redux";
import { searchChange, fetchPosts } from "./../redux/actions";

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.searchValue);
  }
  handleSearchPosts = e => {
    e.preventDefault();
    this.props.fetchPosts(this.props.searchValue);
  };
  handleSearchChange = e => {
    this.props.searchChange(e.target.value);
  };

  renderPosts = () => {
    switch (this.props.status) {
      case 'LOADING':
        return <h2>Loading...</h2>
      case 'SUCCESS':
        if (this.props.posts.length !== 0) {
          return this.props.posts.map(post => (
            <div className="single-post" key={post.id}>
              <h4>{post.title.charAt(0).toUpperCase()}{post.title.substring(1)}</h4>
              <p>{post.body}</p>
            </div>
          ))
        }
        else {
          return <h2>Sorry, no posts matching your search word</h2>
        }
      case 'ERROR':
        return <h2>Something wrong happened</h2>
      default:
        return <h2>Loading...</h2>
    }

  }

  render() {
    const isLoading = this.props.status === 'LOADING' ? true : false;
    return (
      <div>
        <form onSubmit={e => this.handleSearchPosts(e)}>
          <input
            placeholder="Your search keyword here..."
            className="searchInput"
            onChange={e => this.handleSearchChange(e)}
            value={this.props.searchValue}
            type="text"
            disabled={isLoading} />
          <input disabled={isLoading} className="submitButton" type="submit" />
        </form>
        <div>{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.data,
    status: state.posts.status,
    searchValue: state.search
  };
};
export default connect(
  mapStateToProps,
  { searchChange, fetchPosts }
)(Posts);
