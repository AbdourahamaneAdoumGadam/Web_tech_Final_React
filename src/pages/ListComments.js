import React, { useEffect, useState } from 'react';
import commentService from '../services/commentService';

function ListComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const response = await commentService.getComments();
    setComments(response);
  };

  return (
    <div>
      <h1>Comment List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Comment Text</th>
            <th>Timestamp</th>
            <th>Task</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.commentText}</td>
              <td>{comment.timestamp}</td>
              <td>{comment.task.title}</td>
              <td>{comment.user.name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListComments;
