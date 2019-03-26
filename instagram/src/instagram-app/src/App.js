import React, { Component } from 'react';
import './App.css';
import dummyData from '../src/dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
// import CommentSection from './components/CommentSection/CommentSection';
// import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }



  render() {
    return (

      <div className="App">

        <SearchBar />
        {dummyData.map(post => (
          <PostContainer 
            key={post.id} 
            imageUrl={post.imageUrl} 
            likes={post.likes} 
            comments={post.comments} 
            thumbnailUrl={post.thumbnailUrl} 
            username={post.username} 
          />
        ))}
      </div>
    );
  }
}

export default App;
