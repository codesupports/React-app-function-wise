import React from 'react';
import { useEffect, useState, useCallback } from 'react';

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default function DebounceWithLoadContent() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
    );
    const data = await res.json();
    setComments((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
  };

  const handleScroll = useCallback(
    debounce(() => {
      if ( window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        fetchComments();
      } 
    }, 300),
    [page]
  );

  useEffect(() => {
    fetchComments(); // initial load
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Debounced Scroll Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: '15px' }}>
          <strong>{comment.email}</strong>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
