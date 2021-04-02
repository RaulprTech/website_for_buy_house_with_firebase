import Nav from './nav'
import { useState, useEffect } from 'react';

import useUser from '../../hooks/useUser'



export default function Container(props) {
  const user = useUser();


  return (
    <div className="rounded-xl shadow-lg overflow-hidden relative min-w-full h-screen content-center">
      <Nav user={user}>
        <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto" >
          {props.children}
        </div>
      </Nav>
    </div>
  )
}
