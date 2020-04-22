import React from 'react'

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
  
  const Course = ({courses}) => {
    console.log('courses :', courses);
  
  
    return (
      courses.map(
        (course, i) => (
            <div key = {i} >
              <Header course={course} />
              <Content course={course} />
              <Total  course={course} />
              <br></br>
            </div>
          )
      )
    )
  }

  export default Course