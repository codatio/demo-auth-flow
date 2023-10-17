"use client"

import { useState } from 'react';

import CodatLink from './CodatLink';

import styles from './authFlow.module.css'

export const AuthFlow = ({ companyId }) => {
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false)
  const [connectionIds, setConnectionIds] = useState([])

  const reset = () => {
    setOpen(false);
    setConnectionIds([]);
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Connect</button>

      {
        connectionIds?.length >= 1
          && <div>
            <h4>Connections just created</h4>

            { connectionIds.map((id, i)=><div key={i}>{id}</div>) }
            </div>
      }

      {
        open && <div className={styles.modal}>
            <CodatLink
              companyId={companyId}
              onConnection={(newConnection: { connectionId: Connection["id"] }) => setConnectionIds([...connectionIds, newConnection.connectionId])}
              onFinish={() => {
                setComplete(false);
                setOpen(false);
              }}
              onClose={() => reset()}
              onError={(error: ErrorCallbackArgs) => {
                setOpen(false);
                alert(error.message);
              }}
            />
          </div>
      }
    </>
  );
};
