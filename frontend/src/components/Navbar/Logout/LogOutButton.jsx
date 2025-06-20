import React from 'react'
import logoutHook from '../../../hooks/logoutHook';

function LogOutButton() {
    const { logout } = logoutHook();
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default LogOutButton