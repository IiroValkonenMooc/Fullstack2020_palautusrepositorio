//import React from 'react';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [ratingGood, setRatingGood] = useState(0)
  const [ratingNeutral, setRatingNeutral] = useState(0)
  const [ratingBad, setRatingBad] = useState(0)
  const [allRatings, setRatingAllRatings] = useState(0)
  const [averageRating, setAverageRating] = useState(0)
  const [positiveRatingPercentrage, setPositiveRatingPercentrage] = useState(0)

  let [tempGood, tempNeutral, tempBad] = [ratingGood, ratingNeutral, ratingBad]


  //setAverageRating(((ratingGood)+(ratingNeutral*0.5))/allRatings )
  const increaseRating = (ratin, setter) => {
    console.log("add rating");
    setter(ratin +1);
    calculateStatistics()
  }

  const calculateStatistics = () => {
    console.log("calc stats");
    let tempAllRatings = tempGood + tempNeutral + tempBad
    setRatingAllRatings( tempAllRatings);
    
    if (tempGood == 0 && tempBad == 0) {
      console.log("can't calculate average");
      setAverageRating(0)
    } else {
      console.log("calculating average");
      setAverageRating((tempGood + (tempBad*(-1)))/tempAllRatings )
    }

    if (tempGood == 0) {
      console.log("can't postive percentage");
      setPositiveRatingPercentrage(0)
    } else {
      console.log("calculating positive percentage");
      setPositiveRatingPercentrage(tempGood / tempAllRatings );
    }
  }
  


  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => {tempGood++; increaseRating(ratingGood, setRatingGood);} }>
        good
      </button>
      <button onClick={() => {tempNeutral++; increaseRating(ratingNeutral, setRatingNeutral); } } >
        neutral
      </button>
      <button onClick={() => {tempBad++; increaseRating(ratingBad, setRatingBad)} } >
        bad
      </button>

      <h1>statistics</h1>

      <p>good {ratingGood}</p>
      <p>neutral {ratingNeutral}</p>
      <p>bad {ratingBad}</p>
      <p>all {allRatings}</p>
      <p>average {averageRating} </p>
      <p>positive {positiveRatingPercentrage} %</p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

