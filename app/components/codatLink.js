import React, { useEffect, useState } from "react";

import styles from './CodatLink.module.css'

export const CodatLink = (props) => {
  const { companyId, onConnection, onError, onClose, onFinish } = props

  const [componentMount, setComponentMount] = useState(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
      import(/* webpackIgnore: true */ "https://link-sdk.codat.io").then(
        ({ CodatLink }) => {
          new CodatLink({
            target,
            props: {
              companyId,
              onConnection,
              onClose,
              onFinish,
              onError,
            },
          });
        }
      )
    }
    // CodatLink does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div
      className={`App ${styles.link}`}
      data-testId="test"
      ref={setComponentMount}
    ></div>
  );
};