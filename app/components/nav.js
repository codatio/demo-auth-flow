'use client'

import { useState, useEffect } from "react";
import { useOrganization } from './hooks/useOrganization'

import styles from './nav.module.css'

export const Nav = () => {
  const {   
    logo,
    icon,
    clientName
  } = useOrganization()

  console.log('rendering', logo, icon, clientName)

  return (
    <div className={styles.navWrapper}>
      {
        !logo 
          ? <p>{clientName || 'Demo company'}</p>
          : <img src={logo}/>
      }

      <div className={styles.navItems}>
        About us
      </div>
    </div>
  )
}