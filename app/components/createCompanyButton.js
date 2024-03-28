'use client'

import styles from './createCompanyButton.module.css'

export const CreateCompanyButton = (props) => {
  const { createCompany, updateCompanyId, authHeader } = props

  const handeClick = async () => {
    console.log('clicked')
    const companyId = await createCompany(authHeader)
    updateCompanyId(companyId)
  }

  return (
    <button className={styles.button} onClick={handeClick}>Apply now!</button>
  )
}