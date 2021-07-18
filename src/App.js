import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from './components/Form';
import Listnews from './components/ListNews';

function App() {

  const API_KEY = '005ec71c3e234a7fa26b2d6f503787b2';
  //Define category and news
  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);
  
  useEffect(() => {
    
    const searchForNews = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

      const answer = await fetch(url);
      const resultNews = await answer.json();
      saveNews(resultNews.articles);
    }

    searchForNews();

  }, [category]);

  return (
    <Fragment>
        <Header 
            title='News search engine'
          />
          <div className ='container white'>
            <Form saveCategory={saveCategory} />
            <Listnews listNews={news}/>
          </div>

    </Fragment>
      
  );
}

export default App;
