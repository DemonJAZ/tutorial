import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//Setup Vars
const firstbook = {
  title : "Harry Potter and the Philospher's stone",
  aurthor : "J.K Rowling",
  img : "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
}
const secondbook = {
  title : "Harry Potter 2",
  aurthor : "J.K Rowling",
  img : "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
}

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
    <section className='booklist'>
      <Book img={firstbook.img} title = {firstbook.title} aurthor = {firstbook.aurthor} />
      <Book img={secondbook.img} title = {secondbook.title} aurthor = {secondbook.aurthor} />
    </section>
  );
}

const Book = (props) => {
  return (
  <article className='book'>
    <img src={props.img} alt=""/>
    <h2>{props.title}</h2>
    <h3>{props.aurthor}</h3>
  </article>
  );
}


ReactDom.render(
  <BookList />, document.getElementById('root')
);