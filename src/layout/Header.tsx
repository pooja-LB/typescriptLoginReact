import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";
import { ButtonGroup } from 'devextreme-react';
import { Route, Switch, BrowserRouter , NavLink} from 'react-router-dom';





    function Header () {
    const [redirect, setRedirect] = useState(false);

    const logout = () => {
        localStorage.removeItem('currentuser');
    }
 

  return (
    <>
           
    <div className="d-flex justify-content-between bg-dark p-4 mt-4 mb-4">
        <NavLink to="/home/add-article" >Add Article</NavLink>
        <NavLink to="/home/list-article" >List Article</NavLink>
        <NavLink to="/" onClick={logout}>Logout</NavLink>
    </div>
    </>
  );
}

export default Header;
