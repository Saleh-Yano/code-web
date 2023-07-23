import React from 'react'
import "./App.css"
import Header from './combonents/commen/heading/Header'
import { BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Home from './combonents/home/Home'
import About from './combonents/about/About'
import CoursesHome from './combonents/allcourses/CoursesHome'
import Team from './combonents/team/Team'
import Price from './combonents/pricing/Price'
import Blog from './combonents/blog/Blog'
import Contact from './combonents/contact/Contact'
import Footer from './combonents/commen/footer/Footer'
import ScrollToTop from './combonents/scroll/ScrollToTop'
import Privacy from './combonents/privecy/Privacy'
const App = () => {
  return (
    <>
      
      <Router>
      <Header />
      <ScrollToTop/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route  path='/courses' exact component={CoursesHome} />
          <Route  path='/team' exact component={Team} />
          <Route  path='/pricing' exact component={Price} />
          <Route  path='/journal' exact component={Blog} />
          <Route  path='/contact' exact component={Contact} />
          <Route  path='/privacy' exact component={Privacy} />
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App