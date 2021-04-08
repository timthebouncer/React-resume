import React, {useState} from 'react'
import styles from './color.module.scss'

export default ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.colorWrapper}>
                <div className={styles.first}>
                    <button className={styles.keys}></button>
                </div>
                <div className={styles.second}><button className={styles.keys}></button></div>
                <div className={styles.third}><button className={styles.keys}></button></div>
                <div className={styles.forth}><button className={styles.keys}></button></div>
                <div className={styles.fifth}><button className={styles.keys}></button></div>
            </div>
            <div className={styles.btn}>
                <button>更新</button>
            </div>
        </div>
    )
}