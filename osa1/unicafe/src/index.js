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

const StatisticLine = ({ text, value, optEndingChar }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value} {optEndingChar}
      </td>
    </tr>
  )
}

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

        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={allRatings} />
            <StatisticLine text="average" value={averageRating} />
            <StatisticLine text="positive" value={positiveRatingPercentrage} optEndingChar="%" />
          </tbody>
        </table>
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

