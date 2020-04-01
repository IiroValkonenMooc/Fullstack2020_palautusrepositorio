import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = (props) => {
  console.log('osa tulostuu')
  console.log(props)
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log('content tulostuu')
  console.log(props)
  console.log(props.contentArray)
  console.log(props.contentArray[0])
  console.log(props.contentArray[0].name)

  return (
    <div>
      <Part part={props.contentArray[0]}/>
      <Part part={props.contentArray[1]}/>
      <Part part={props.contentArray[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)

  let exerciseNumber = 0

  props.contentArray.forEach(element => {
    exerciseNumber += element.exercises
  });

  return (
    <div>
      <p>Number of exercises {exerciseNumber }</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course ={course} />
      <Content contentArray = {parts}  />
      <Total contentArray = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))