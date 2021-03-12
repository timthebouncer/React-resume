import './App.scss';
import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import WorksPage from './WorksPage/WorksPage'
import WorksDetail from './WorksDetail/WorksDetail'

function App(props) {

  const {location} = props;

  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <Link to="/"><div className="box-left">Knowledge</div></Link>
          <div className="box-right">
            <Link to="/"><p className={location.pathname === '/' ? 'bottomLine' : null}>Home</p></Link>
            <Link to="/works"><p className={location.pathname === '/works' ? 'bottomLine' : null}>Works</p></Link>
          </div>
        </div>
      </header>
      <section className="content">
        <Route path='/' exact component={ HomePage } />
        <Route path='/works' exact component={ WorksPage } />
        <Route path='/works/:id' exact component={ WorksDetail } />
      </section>
      <footer className="footer">
        <p>Welcome</p>
      </footer>
    </div>
  );
}

export default withRouter(App);
