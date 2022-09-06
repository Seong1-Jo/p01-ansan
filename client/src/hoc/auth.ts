import axios from 'axios';
import React, { useEffect } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(_SComponent:JSX.Element, _option:boolean, _adminRoute = null) {

  function AuthenticationCheck() {
    useEffect(() => {
      axios.get('/api/users/auth')
      .then(_res => console.log('여기뭐지'))
    },[])
  }
  return AuthenticationCheck

}