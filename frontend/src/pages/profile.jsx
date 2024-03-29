import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import AccountDetails from '../components/profile-details/AccountDetails';
import { useEffect, useState } from 'react';


export default function Profile() {

  return (
    <div className="container">
      <NavigationBar />
      <AccountDetails id={1}/>
    </div>
  );
}