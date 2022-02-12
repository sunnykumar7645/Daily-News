import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import Footer from './component/Footer';
import {
BrowserRouter as Router,
Route,
Routes,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App =()=> {

  let [progress, setProgress] = useState(0);

  // const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSizes = 11
     return (
      <div>
        <Router>
         <LoadingBar
            color='#fpageSizes946'
            progress={progress}
          />
          <Navbar/>
          <Routes>    
          <Route path="Daily-News/" element={<News setProgress={setProgress}  key='general' PageSize={pageSizes} country={"in"} category="general" />} />
          <Route path="Daily-News/business" element={ <News setProgress={setProgress} key="business" PageSize={pageSizes} country={"in"} category="business" /> } />
          <Route path="Daily-News/entertainment" element={<News setProgress={setProgress} key='entertainment' PageSize={pageSizes} country={"in"} category="entertainment" />} />
          <Route path="Daily-News/general" element={<News setProgress={setProgress} key='general'  PageSize={pageSizes} country={"in"} category="general" />} />
          <Route path="Daily-News/health" element={<News setProgress={setProgress} key='health' PageSize={pageSizes} country={"in"} category="health" />} />
          <Route path="Daily-News/science" element={<News setProgress={setProgress} key='science'  PageSize={pageSizes} country={"in"} category="science" />} />
          <Route path="Daily-News/sports" element={<News setProgress={setProgress} key='sport'  PageSize={pageSizes} country={"in"} category="sports" />} />
          <Route path="Daily-News/technology" element={<News setProgress={setProgress}   key='technology'  PageSize={pageSizes} country={"us"} category="technology" />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    )
}
  export default App

