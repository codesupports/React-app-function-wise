
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './features/UserSlice';

const ReduxAPIData = () => {
  const dispatch = useDispatch()
  const { users, status, error } = useSelector((state) => state.users);
  console.log('users', users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  return (
    <div>
      <h3>Redux Toolkit API Data</h3>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' &&
        users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
    </div>
  )
}

export default ReduxAPIData
