// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './Logout/LogOutButton';
import Conversations from '../Converssations/Converssations';
import { useAuthContext } from '../../context/authContext'; 

const Navbar = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <Conversations />
      {authUser && <LogOutButton />}
    </>
  );
};

export default Navbar;
