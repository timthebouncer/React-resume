import React from 'react'
import './workList.scss'


export default ({dataSource})=>{
    return <div className="workList">
        <h2>作品列表</h2>
        <ul>
            {
                dataSource.map(item =>
                        <li key={item.id}>
                            <div className="cover"><img src={item.cover} /></div>
                            <div className="workbrief">
                                <h3>{item.title}</h3>
                                <p>{item.brief}</p>
                            </div>
                        </li>


                )
            }
        </ul>

    </div>
}

