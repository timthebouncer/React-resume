import React, {useState} from 'react'
import styles from './checkIn.module.scss'

export default ()=>{

    const [state, setState] = useState([{id:1,name:'123',temp:'0',editable:false,check:false}])
    // const [check, setCheck] = useState(false)
    const checkIn = (item) =>{
        item.check = true
        item.editable = true
        setState([...state])
        // setState((e) => e[0].check = true)
    }
    const typed = (e,item) =>{
        item.temp = e.target.value
        if(e.key === 'Enter'){
            item.editable = false
            setState([...state])
        }
    }

    return(
        <div className={styles.container}>
            {
                state.map((item,idx)=>{
              return <table className={styles.table} key={item.id}>
                        <thead>
                        <tr>
                            <th>員工編號</th>
                            <th>員工姓名</th>
                            <th>體溫</th>
                            <th>是否簽到</th>
                        </tr>
                        </thead>
                        <tbody className={styles.content}>
                        <tr key={item.id}></tr>
                            <td>{idx+1}</td>
                            <td>{item.name}</td>
                            <td>
                                {item.editable === false ? item.temp : <input autoFocus onKeyPress={(e)=>typed(e,item)} type="text"/>
                                }
                            </td>
                            <td>
                                {
                                    item.check === false ? <button onClick={()=>checkIn(item)}>簽到</button>:<span>V</span>
                                }
                            </td>
                        </tbody>
                    </table>
                })
            }
        </div>
    )
}