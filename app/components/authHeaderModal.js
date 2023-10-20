'use client'

import { useState, useEffect } from "react";

import { Modal } from './modal'
import { useAuthHeader } from './hooks/useAuthHeader'

import styles from './authHeaderModal.module.css'

const AuthHeaderReset = ({clearAuthHeader}) => {
  return (
    <button onClick={clearAuthHeader}>Reset</button>
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

  //console.log('rerendered', tempHeader, authHeader)

  if(authHeader) {
    return null
  }

  const setAuth = () => {
    updateAuthHeader(tempHeader)
  }

  return (
    <Modal>
      <h2>Enter your auth header</h2>

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
  const { createCompany, updateCompanyId, authHeader, updateAuthHeader, clearAuthHeader } = props

  return (
    <div className={styles.authHeaderManager}>
      <AuthHeaderModal authHeader={authHeader} updateAuthHeader={updateAuthHeader}/>
      
      <AuthHeaderReset clearAuthHeader={clearAuthHeader}/>
    </div>
  )
}