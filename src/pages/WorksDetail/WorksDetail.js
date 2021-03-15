import React, {useState, useEffect} from 'react'
import styles from './detail.module.scss'


// export default class Fetch extends React.Component
export default () =>{

  let [state, setState] = useState([])
  let [locationState, setLocation] = useState([])


  useEffect( function() {

   (async() =>{
     const url = "https://api.randomuser.me/";
     const response = await fetch(url);
     const data = await response.json();
     setState({person: data.results[0]})
     setLocation({location:data.results})
    })()
  },[])
  console.log(state)
  console.log(locationState,666)

  // async componentDidMount(){
  //   const url = "https://api.randomuser.me/";
  //      const response = await fetch(url);
  //      const data = await response.json();
  //      this.setState({person: data.results[0]})
  //   console.log(this.state.person.name)
  // }


  return <div className={styles.wrap}>
    <div className={styles.box}>
      <div className={styles.title}>
        <h3>StarKiller</h3>
        <p>2021/03/15</p>
        {
          !state.person ? <div>Loading</div>:
            <div className={styles.basicInfo}>
              <div className={styles.userDetail}>
                <div><img src={state.person.picture.large} /></div>
                <div className={styles.name}>
                  <p>{state.person.name.title}</p>
                  <p>{state.person.name.first}</p>
                  <p>{state.person.name.last}</p>
                  <p>{state.person.email}</p>
                </div>
              </div>
              <div className={styles.userHome}>
                {
                  locationState.length !== 0 ?
                  locationState.location.map(item =>
                    <ul key={item.id}>
                      <li>City: {item.location.city}</li>
                      <li>Country: {item.location.country}</li>
                      <li>PostCode: {item.location.postcode}</li>
                      <li>State: {item.location.state}</li>
                    </ul>):<div>Loading</div>
                }
              </div>
            </div>
        }
      </div>
      <section className={styles.content}>
        <p>Starkiller, born Galen Marek and also known as The Apprentice, is the fictional protagonist of the Star Wars: The Force Unleashed video games and literature, part of the Star Wars expanded (Legends) universe.
        </p>
        <p>
          The son of a fugitive Jedi, Marek is kidnapped, raised, and apprenticed by Darth Vader after the death of his father at Vader's hands. Given the Sith name "Starkiller" for his unmatched potency with the Force, Marek is used for destructive purposes. His annihilative nature gains him the description of a "Force wrecking ball".
        </p>
        <p>
          George Lucas motivated the team working on Star Wars: The Force Unleashed to make a brand-new character. Before deciding on Starkiller's character, other ideas for the main character included a Han Solo-like smuggler, a superheroic Rebel Wookiee, "the last Skywalker" and a gadget-wielding mercenary.
        </p>
      </section>
    </div>
  </div>


}


// {
//   !this.state.person ? <div>Nothing</div>: <div>{this.state.person.name.first}</div>
// }


