import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from "./components/News"
// import contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)
  const [news, setNews] = useState([]) 

  const getNews = async() => { 
  const res = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7b7ec50d089042cc91210e03d798c78b");
  const data = await res.json();
  console.log(data)
  console.log(data.articles)
  setNews(data.articles)
  }

  useEffect(() => {
  getNews(); 
  }, [])
  

  return (
    <div className=''>
      
      <h7>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h7>
      <h2>Hello ! Welcome to our News Website.</h2>
      <p>Read latest news.</p>

      <div id = 'newsDiv'>
         {
        news.map((article)=> { 
          console.log(article)
          return <News title={article.title} description = {article.description} url={article.url} cover = {article.urlToImage}/>

        })
      }
      
      </div>

      {/* <News title={"Rain updates"} description = {"description of rain"} cover = {"rain.jpg"}/> */}
      {/* <contact/> */}
    </div>
    
  )
}

export default App 
