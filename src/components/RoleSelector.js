import React from 'react';
import {useDispatch}  from 'react-redux';
import './RoleSelector.css';
import { setRole } from './userSlice';


const RoleSelector = () => {

    const dispatch = useDispatch();

    const handleSelectRole =(role) =>{
        dispatch(setRole(role))
    }


  return (
    <div>
        <button className="btn-ele event-planer-btn" onClick={() => handleSelectRole('event_planner')}>Event Planner</button>
        <button className="btn-ele farmer-btn" onClick={() => handleSelectRole('Farmer')}>Farmer</button>
        <button className="btn-ele taveler-btn" onClick={() => handleSelectRole('traveler')}>Traveler</button>
    </div>
  )
}

export default RoleSelector