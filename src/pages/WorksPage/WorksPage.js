import React from 'react'
import WorkList from '../../components/worklist/index'
import datas from '../../data.json'
import styles from './WorksPage.module.scss'

export default ({dataSource})=>{
  return <div className={styles.wrap}>
    <div className={styles.title}>
      <h3>My Works</h3>
      <p>a variety of portfolio I have been working on</p>
    </div>
    <WorkList dataSource={datas.data} />
  </div>
}
