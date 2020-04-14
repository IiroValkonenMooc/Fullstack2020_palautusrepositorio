//import React from 'react';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
  //Miksi ei täällä?
  // const addRating = () => {
  //   console.log("add rating");
  //   setter(rating + 1);
  // }

  return(
    <button onClick={handleClick} >
      {text}
    </button>
  )
}

const StatisticLine = ({text, value, optEndingChar}) => <p>{text} {value} {optEndingChar}</p>

const Statistics = ({ good,  neutral, bad }) => {
  let allRatings = good + neutral + bad;
  let averageRating, positiveRatingPercentrage;
  
  if (good === 0 && bad === 0) {
    console.log("can't calculate average");
    averageRating = 0
  } else {
    console.log("calculating average");
    averageRating = (good + (bad*(-1)))/allRatings;
  }

  if (good === 0) {
    console.log("can't postive percentage");
    positiveRatingPercentrage = 0;
  } else {
    console.log("calculating positive percentage");
    positiveRatingPercentrage = (good / allRatings)*100 ;
  }

  if (allRatings > 0) {
    return (
      <div>
        <h1>statistics</h1>

        <p>good {good}</p>
        <StatisticLine text="good" value={good} />
        <p>neutral {neutral}</p>
        <StatisticLine text="neutral" value={neutral} />
        <p>bad {bad}</p>
        <StatisticLine text="bad" value={bad} />
        <p>all {allRatings}</p>
        <StatisticLine text="all" value={allRatings} />
        <p>average {averageRating} </p>
        <StatisticLine text="average" value={averageRating} />
        <p>positive {positiveRatingPercentrage} %</p>
        <StatisticLine text="positive" value={positiveRatingPercentrage} optEndingChar="%" />
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>

        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  const [ratingGood, setRatingGood] = useState(0)
  const [ratingNeutral, setRatingNeutral] = useState(0)
  const [ratingBad, setRatingBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={() => setRatingGood(ratingGood + 1) } />
      <Button text={"neutral"} handleClick={() => setRatingNeutral(ratingNeutral + 1) } />
      <Button text={"bad"} handleClick={() => setRatingBad(ratingBad + 1) } />

      <Statistics good={ratingGood} neutral={ratingNeutral} bad={ratingBad} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

