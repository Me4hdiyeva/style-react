import styles from "./index.module.scss"

function Inputs() {
  return (
    <>
        <div className={styles.box}>
          <label htmlFor="username" className={styles.text}>Username</label>
          <input type="text" id='username' className={styles.input} placeholder='your-email@gmail.com'/>

          <label htmlFor="pwd" className={styles.text}>Password</label>
          <input type="text" id='pwd' placeholder='Your Password' className={styles.input}/>
        </div>
    </>
  )
}

export default Inputs