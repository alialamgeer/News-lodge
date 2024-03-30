import React, { useState, useEffect } from 'react'
import "./news.css"
function News(props) {
  
  const[likes, setlikes] = useState(0);

  useEffect(() => {
    console.log("Command_1:The code is running.");
  }, [])

  useEffect(() => {
    console.log("Command_2:The efforts are getting into work.");
  }, [likes > 2])
  
  
  function increaseLikes(){
    setlikes(likes+1)
  }
  return (
    <div className='news_sets'>

      <img className='img' src= {props.cover} />
      <h1 className='heading'>{props.title}</h1>
      <p> {props.description} </p>
      {/* <button On onClick={increaseLikes}>Like{likes}</button> */}
      <a target="_blank" href='props.url' className='btn'>Read More</a>

</div>
  )
}

export default News