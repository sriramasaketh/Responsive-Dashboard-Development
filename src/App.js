import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './styles/App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <Sidebar />
            <Switch>
              <Route exact path='/' component={MainContent} />
              {}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
