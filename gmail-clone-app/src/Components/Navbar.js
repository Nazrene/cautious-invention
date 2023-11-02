import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';



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
    <div className='bg-transparent sidebar p-2 text-center mt-4'>
      <div className='m-2 d-flex'>
        <i class="bi bi-envelope-fill text-warning fs-3"></i>
        <span className='brand-name fs-3 fw-bold text-warning'>Gmail</span>
      </div>
      <hr className='text-dark'></hr>
      <div className='list-group list-group-flush'>
        <NavLink to='/compose' 
          style={({isActive}) => isActive ? activeStyle:style }
          ><i class="bi bi-pen"></i>Compose
        </NavLink>
        <NavLink to='/' 
          style={({isActive}) => isActive ? activeStyle:style }
          ><i class="bi bi-inbox"></i>Inbox
        </NavLink>
        <NavLink to='/outbox'
          style={({isActive}) => isActive ? activeStyle:style }
          ><i class="bi bi-send-check"></i>Outbox
        </NavLink>
        <NavLink to='/archive'
          style={({isActive}) => isActive ? activeStyle:style }
          ><i class="bi bi-archive"></i>Archives
        </NavLink>
        <NavLink to='/starred' 
          style={({isActive}) => isActive ? activeStyle:style }
          ><i class="bi bi-star"></i>Starred
        </NavLink>
      </div>
    </div>    
  )
}
