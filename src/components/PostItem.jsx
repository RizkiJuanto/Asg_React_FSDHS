import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const PostItem = ({ post, deletePost, editPost }) => {
  return (
    <ListItem>
      <ListItemText primary={post.title} secondary={post.body} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={() => editPost(post)}>
          <FaEdit/>
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => deletePost(post.id)}>
          <MdDeleteForever/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default PostItem;
