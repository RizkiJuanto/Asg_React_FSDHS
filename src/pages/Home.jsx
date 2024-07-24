import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get('/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async (post) => {
    try {
      const response = await axiosInstance.post('/posts', post);
      setPosts([response.data, ...posts]);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const updatePost = async (post) => {
    try {
      await axiosInstance.put(`/posts/${post.id}`, post);
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
      setCurrentPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axiosInstance.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const editPost = (post) => {
    setCurrentPost(post);
  };

  return (
    <div className='mx-96'>
      <PostForm addPost={addPost} updatePost={updatePost} currentPost={currentPost} setCurrentPost={setCurrentPost} />
      <PostList posts={posts} deletePost={deletePost} editPost={editPost} />
    </div>
  );
};

export default Home;
