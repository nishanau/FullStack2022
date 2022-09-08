const Parts = ({ parts }) => {
    console.log('parts', parts.name, parts.exercises)
    return (
      <div>
        <p> {parts.name} {parts.exercises}</p>
      </div>
    )
  }
  
  
  const Header = ({ header }) => {
    console.log(header.courseName)
    return (
  
      < div >
        <h1> {header.courseName}</h1>
      </div >
    )
  }
  
  const Content = ({ content }) => {
    return (
      <div>
        <Parts parts={content} />
      </div>
    )
  }
  
  const Total = ({ total }) => {
  
    console.log('parts', total.parts[0].exercises)
    var startIndex = 0
  
    const totalExercisesArray = total.parts.map(partsArrayAsParameter => partsArrayAsParameter.exercises) //creates an array of exercises value and stores the array by assignment
    console.log(totalExercisesArray)
  
    const totalExercises = totalExercisesArray.reduce((previous, current) => previous + current, startIndex)//sum of all array elements
    return (
      <>
        <p>Total Number of Exercises: {totalExercises}
        </p>
      </>
    )
  }
  
  const Courses = ({ course }) => {
  
    return (
      <div>
        <Header header={course} />
        {course.parts.map(courseParts => <Content key={courseParts.id} content={courseParts} />)}
        <Total total={course} />
  
      </div>
  
    )
  
  }
export default Courses
