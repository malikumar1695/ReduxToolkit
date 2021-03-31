import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './redux/component/counter/Counter';
import Pagination from './redux/component/pagination/Pagination';
import axios from 'axios';
import Posts from './redux/component/posts/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <h4>redux toolkit app</h4>
      <Counter />
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
