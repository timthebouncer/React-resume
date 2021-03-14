import React from 'react'
import './home.scss'
import WorkList from '../../components/worklist'
import dataSource from '../WorksPage/data.json'


export default ()=>{
  return <div className="wrap">
    <section className="brief">
        <img src={require('../../assets/images/123.jpg').default} />
        <h2>Tim Wang</h2>
        <ul>
            <li>Front-End Developer</li>
            <li>The University of Sheffield</li>
            <li>more and more...</li>
        </ul>
        <p>Understanding: Project Management / Data Modeling</p>
        <p>Coding on a daily basis, good at Vue.js / React.js</p>
        <p>Other Skills: Basic knowledge of MySQL / Java</p>
    </section>
      <section className="works">
          <div className="title">
              <h3>作品</h3>
              <p>There will be more works</p>
          </div>
          <WorkList dataSource={dataSource.data} />
      </section>

  </div>
}

