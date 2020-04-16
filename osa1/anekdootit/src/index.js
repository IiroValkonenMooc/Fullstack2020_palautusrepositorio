import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick} >
      {text}
    </button>
  )
}

function Anecdote (text) {
  this.text = text;
  this.score = 0;
}

const TopAnecdoteText = (prop) =>{
  console.log('top anecdote list prop :', prop);

  let arr = prop.prop.concat();
  console.log('arr :', arr);

  arr.sort((a,b)=> b.score - a.score )
  console.log('arr :', arr);
  const maxScore = arr[0].score;
  
  let bestPicks = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].score==maxScore){
      bestPicks.push(arr[i]);
    }
  }

  console.log('bestPicks :', bestPicks);
  const randomSelector = Math.round(Math.random() * (bestPicks.length - 1))
  console.log('randomSelector :', randomSelector);

  return (
    <>
    <p>
      {bestPicks[randomSelector].text}
    </p>
    <p>
      has {bestPicks[randomSelector].score} votes
    </p>
    </>
  )
}

const AnecdoteText = (anecdote) =>{
  console.log('anecdote text prop :', anecdote);
  return (
    <p>
      {anecdote.anecdote}
    </p>
  )
}

const AnecdoteScore = (anecdote) => {
  console.log('anecdote score prop :', anecdote);

  return (
    <p>
      has {anecdote.anecdote} votes
    </p>
  )
}

const App = (props) => {
  const [topPickSelector, setTopPickSelector] = useState(0);
  const [selected, setSelected] = useState(0);
  const [anecdotesList, setAnecdotesList] = useState(anecdotes);
  console.log('Props:',props.anecdotes);
  console.log('Anecdote hook',anecdotesList);
  console.log(anecdotesList[1].text);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      
      <h1>Random anecdotes</h1>
      {/* {props.anecdotes[selected]} */}
      <AnecdoteText anecdote={anecdotesList[selected].text } />
      <AnecdoteScore anecdote={anecdotesList[selected].score } />
      <Button text="vote" handleClick={() => {
        let arr = anecdotesList.concat();
        arr[selected].score++;
        setAnecdotesList(arr);
      }}
      />
      <Button text="next anecdote" handleClick={() => {
        setSelected(Math.round(Math.random() * (props.anecdotes.length - 1)));
        console.log('selected :', selected);
      }}
      />

      <h2>Top picks</h2>

      <TopAnecdoteText prop = {anecdotesList} />
    </div>
  )
}

// const anecdotes = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

let anecdotes = [
  new Anecdote('If it hurts, do it more often'),
  new Anecdote('Adding manpower to a late software project makes it later!'),
  new Anecdote('The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'),
  new Anecdote('Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'),
  new Anecdote('Premature optimization is the root of all evil.'),
  new Anecdote('Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.')
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
