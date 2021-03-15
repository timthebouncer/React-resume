import React from 'react'
import './workList.scss'
import {Link} from 'react-router-dom'


export default ({ dataSource }) =>{
    return <div className="workList">
        <ul>
            {
                dataSource && dataSource.map(item=>
                  <li key={item.id}>
                      <Link to={ `/works/${item.id}` }>
                          <div className="cover">
                              <img src={ item.cover } />
                          </div>
                          <div className="workbrief">
                              <h3>{item.title}</h3>
                              <p>{item.brief}</p>
                              <div className="tag">
                                  { item.tags && item.tags.map(i=><span key={i}>{i}</span>) }
                              </div>
                          </div>
                      </Link>
                  </li>
                )
            }
        </ul>
    </div>
}
// export default ({dataSource})=>{
//     return <div className="workList">
//         <h2>作品列表</h2>
//         <ul>
//             {
//                 dataSource.map(item =>
//                         <li key={item.id}>
//                             <Link to={`/works/${item.id}`}>
//                                 <div className="cover"><img src={item.cover} /></div>
//                                 <div className="workbrief">
//                                     <h3>{item.title}</h3>
//                                     <p>{item.brief}</p>
//                                 </div>
//                             </Link>
//                         </li>
//
//
//                 )
//             }
//         </ul>
//
//     </div>
// }

