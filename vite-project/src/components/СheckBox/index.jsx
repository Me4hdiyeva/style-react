import styles from "./index.module.scss"

function CheckBox() {
  return (
    <>
        <div className={styles.box}>
            <div className={styles.boxInner}>
                <input type="checkbox" id="check" className={styles.checkbox}/>
                <label htmlFor="check" className={styles.text}>Remember me</label>
            </div>
            <p className={styles.paragraph}><a className={styles.paragraphLink} href="#">Forgot Password</a></p>
        </div>
    </>
  )
}

export default CheckBox