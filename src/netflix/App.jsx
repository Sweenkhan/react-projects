import React  from 'react'
import Row from "./Row"
import urls from "./urls"
import "./App.css"
 
// import urls from "./urls"
// import instance from "./Baseurl"


function App() {

 
   
    
  return (
     <>
         <div className='wrapper'>
          <Row moviee= {urls.actionMovies} name = {"Action Movies"}/>
          <Row moviee= {urls.comedyMovies} name={"Comedy Movies"}/>
          <Row moviee= {urls.documentaries} name={"Documentaries"}/>
          <Row moviee= {urls.horrorMovies} name={"Horror Movies"}/>
          <Row moviee= {urls.netflixOriginals} name={"NetflixOrigInals"}/>
          <Row moviee= {urls.romanticMovies} name={"Romantic Movies"}/>
          <Row moviee= {urls.trendingNow} name={"Trending Now"}/>
         </div> 
     </>
  )
}

export default App