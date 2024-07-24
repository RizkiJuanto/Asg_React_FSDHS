import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const PostForm = ({ addPost, updatePost, currentPost, setCurrentPost }) => {
  const [formData, setFormData] = useState({ title: '', body: '' });

  useEffect(() => {
    if (currentPost) {
      setFormData(currentPost);
    }
  }, [currentPost]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      updatePost(formData);
    } else {
      addPost(formData);
    }
    setFormData({ title: '', body: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        name="title"
        label="Title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="body"
        label="Body"
        value={formData.body}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">
        {currentPost ? 'Update Post' : 'Add Post'}
      </Button>
    </Box>
  );
};

export default PostForm;
