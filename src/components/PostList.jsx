import React from 'react';
import { List } from '@mui/material';
import PostItem from './PostItem';

const PostList = ({ posts, deletePost, editPost }) => {
  return (
    <List>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} deletePost={deletePost} editPost={editPost} />
      ))}
    </List>
  );
};

export default PostList;
