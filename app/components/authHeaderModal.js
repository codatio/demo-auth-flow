'use client'

import { useState, useEffect } from "react";

import { Modal } from './modal'
import { useAuthHeader } from './hooks/useAuthHeader'

const AuthHeaderReset = ({clearAuthHeader}) => {
  return (
    <button onClick={clearAuthHeader}>Clear auth header</button>
  )
}

const TestCreator = (props) => {
  const { foo, authHeader } = props
  
  const handeClick = () => {
    console.log('clicked')
    foo(authHeader)
  }

  return (
    <button onClick={handeClick}>Create company</button>
  )
}

const AuthHeaderModal = (props) => {
  const {
    authHeader,
    updateAuthHeader,
  } = props

  const [
    tempHeader,
    setTempHeader
  ] = useState(authHeader)

  console.log('rerendered', tempHeader, authHeader)

  if(authHeader) {
    return null
  }

  const setAuth = () => {
    updateAuthHeader(tempHeader)
  }

  return (
    <Modal>
      <div>Enter your auth header</div>

      <form onSubmit={setAuth}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={tempHeader}
            onChange={(e) => setTempHeader(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Modal>
  )
}

export const AuthHeaderManager = (props) => {
  const { foo } = props
  
  const {   
    authHeader,
    updateAuthHeader,
    clearAuthHeader
  } = useAuthHeader()

  console.log('AuthHeaderManager', authHeader)

  return (
    <>
      <AuthHeaderModal authHeader={authHeader} updateAuthHeader={updateAuthHeader}/>
      
      <AuthHeaderReset clearAuthHeader={clearAuthHeader}/>

      <TestCreator foo={foo} authHeader={authHeader}/>
    </>
  )
}