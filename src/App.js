import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import Footer from './component/Footer';
import {
BrowserRouter as Router,
Route,
Routes,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* <News  PageSize={11} country={"in"} category="sports" /> */}
          <Routes>
    
          <Route path="Daily-News/" element={<News key='general' PageSize={11} country={"in"} category="general" />} />
          <Route path="Daily-News/business" element={ <News key="business" PageSize={11} country={"in"} category="business" /> } />
          <Route path="Daily-News/entertainment" element={<News key='entertainment' PageSize={11} country={"in"} category="entertainment" />} />
          <Route path="Daily-News/general" element={<News key='general'  PageSize={11} country={"in"} category="general" />} />
          <Route path="Daily-News/health" element={<News key='health' PageSize={11} country={"in"} category="health" />} />
          <Route path="Daily-News/science" element={<News key='science'  PageSize={11} country={"in"} category="science" />} />
          <Route path="Daily-News/sports" element={<News key='sport'  PageSize={11} country={"in"} category="sports" />} />
          <Route path="Daily-News/technology" element={<News key='technology'  PageSize={11} country={"us"} category="technology" />} />

          
          </Routes>


          <Footer/>
        </Router>
      </div>
    )
  }
}

