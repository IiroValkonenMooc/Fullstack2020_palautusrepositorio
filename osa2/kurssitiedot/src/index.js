import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  console.log('header tulostuu');
  return (
    <div>
      <h1> {course.name} </h1>
    </div>
  )
}

const Part = ({part}) => {
  console.log('osa tulostuu')
  console.log('part :', part);
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Content = ({course}) => {
  console.log('content tulostuu')
  console.log('course :', course);

  return (
    <div>
      {/* <Part part={course.parts[0]} /> */}
      {course.parts.map(
        (part, i) => <Part key={i} part={part} />
      )
      }

    </div>
  )
}

const Total = ({course}) => {
  // let exerciseNumber = course.parts.reduce(function (accumulator, currentValue) {
  //   return accumulator + currentValue.exercises
  // }, 0)
  
  const exerciseNumber = course.parts.reduce( (accumulator, currentValue) => 
    accumulator + currentValue.exercises
  , 0)

  return (
    <div>
      <p>Total number of exercises {exerciseNumber}</p>
    </div>
  )
}

const Course = ({course}) => {
  console.log('course :', course);

  return (
    <div>
      <Header course={course} />
      <Content course = {course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <Course course={course} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))