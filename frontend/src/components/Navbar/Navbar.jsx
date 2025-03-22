import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../../pages/Logout/LogOutButton';
import { useAuthContext } from '../../context/authContext';

function Navbar() {
    const { authUser } = useAuthContext();

    return (
        <nav>
            <Link to="/">Home</Link>
            {!authUser ? (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            ) : (
                <LogOutButton />
            )}
        </nav>
    );
}

export default Navbar;
