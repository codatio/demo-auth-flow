import { useState } from "react";

import styles from './modal.module.css'

export const Modal = ({children, close, className}) => {
  const [open, setOpen] = useState(false);

  return <div onClick={() => setOpen(false)} className={styles.modalWrapper}>
    <div className={styles.modal}>
      {children}
    </div>
  </div>
}