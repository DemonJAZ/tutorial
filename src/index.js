import React from 'react'
import ReactDom from 'react-dom'

/*
JSX Rules
Returns single element
div/section/article or fragment
use camelCase for html attribute
className instead of class
close every element
formatting 
*/

function BookList(){
  return (
    <section>
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
  <article>
    <Image/>
    <Title/>
    <Aurthor/>
  </article>
  );
}

const Image = () => {
  return <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" alt=""/>;
}

const Title = () => <h2>Harry Potter and the Philospher's stone</h2>;

const Aurthor = () => <h3>J.K Rowling</h3>

ReactDom.render(
  <BookList />, document.getElementById('root')
);