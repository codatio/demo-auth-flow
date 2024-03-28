'use client'

import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './page.module.css'


import { AuthHeaderManager } from './components/authHeaderModal'
import { AuthFlow } from './components/authFlow'
import { CreateCompanyButton } from './components/createCompanyButton'
import { CardAnimation } from './components/card'

import tick from './components/images/icons/bullet-point.svg'

import { useCompany } from './components/hooks/useCompany'
import { useAuthHeader } from './components/hooks/useAuthHeader'

const Home = () => {
  const {   
    companyId,
    updateCompanyId,
    clearCompanyId,
    createCompany,
  } = useCompany()

  const {   
    authHeader,
    updateAuthHeader,
    clearAuthHeader
  } = useAuthHeader()

  console.log(companyId)

  return (
    <main className={styles.main} 
      style={{ '--color-primary': "pink" }}
    >
      <AuthHeaderManager 
        updateCompanyId={updateCompanyId}
        createCompany={createCompany}
        authHeader={authHeader}
        updateAuthHeader={updateAuthHeader}
        clearAuthHeader={clearAuthHeader}
      />

      <div className={styles.row}>
        <div className={styles.column}>
          <CardAnimation/>
        </div>

        <div className={styles.column}>
          <h2 className={styles.header}>Access credit in minutes</h2>

          <div>
            Find the loan for you from £10,000 to £100,000. Connect your
            accounting software to check your eligibility fast.
          </div>

          <div className={styles.advantagesList}>
            <div className={styles.advantage}>
              <Image className={styles.tick} src={tick} alt="tick icon"/> Applying doesn't affect your credit score
            </div>
            <div className={styles.advantage}>
              <Image className={styles.tick} src={tick} alt="tick icon"/> Expert help throughout the process
            </div>
            <div className={styles.advantage}>
              <Image className={styles.tick} src={tick} alt="tick icon"/> Simple application process
            </div>
          </div>

          <CreateCompanyButton createCompany={createCompany} updateCompanyId={updateCompanyId} authHeader={authHeader}/>

          {companyId}

          { 
            !!companyId
            && <AuthFlow companyId={companyId}/>
          }

        </div>
      </div>
    </main>
  )
}

export default Home;