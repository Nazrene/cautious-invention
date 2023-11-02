import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Navbars() {
  const style = {
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px"
  }
  const activeStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "25px",
    fontWeight: "bold",
    marginBottom: "15px",
    background: "blue",
    padding: "10px",
    textAlign: "Center",
    borderRadius: "10px"
  }
  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2'>
        <i className='bi bi-bootsrap-fill me-3 fs-4'></i>
        <span className='brand-name fs-3 fw-bold'>GmailClone</span>
      </div>
      <hr className='text-dark'></hr>
      <div className='list-group list-group-flush'>
        <NavLink to='/compose' 
          style={({isActive}) => isActive ? activeStyle:style }
          >Compose
        </NavLink>
        <NavLink to='/' 
          style={({isActive}) => isActive ? activeStyle:style }
          >Inbox
        </NavLink>
        <NavLink to='/outbox'
          style={({isActive}) => isActive ? activeStyle:style }
          >Outbox
        </NavLink>
        <NavLink to='/archive'
          style={({isActive}) => isActive ? activeStyle:style }
          >Archives
        </NavLink>
        <NavLink to='/starred' 
          style={({isActive}) => isActive ? activeStyle:style }
          >Starred
        </NavLink>
      </div>
    </div>    
  )
}
