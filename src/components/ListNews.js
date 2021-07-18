import React from 'react';
import Article from './Article';

const Listnews = ({listNews}) => {

    return ( 
        <div className='row'>
            {listNews.map(article => (
                <Article 
                    key={article.url} 
                    article={article} 
                />
            ))}
        </div>
     );
}
 
export default Listnews;