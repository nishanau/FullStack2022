import { useState } from "react"

const Button = ({ feedback, feedbackName }) => {

  return (
    <button onClick={feedback}> {feedbackName}</button>
  )
}


const Statisticsline = ({ value, text }) => {


  return (

    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setGoodFeedback = () => setGood(good + 1)
  const setNeutralFeedback = () => setNeutral(neutral + 1)
  const setBadFeedback = () => setBad(bad + 1)
  //console.log(selected)
  var average = 0
  const all = good + neutral + bad
  average = (good - bad) / all

  const positive = good / all

  return (
    <div>

      <h1> Give Feedback</h1>
      <Button feedback={setGoodFeedback} feedbackName="Good" />
      <Button feedback={setNeutralFeedback} feedbackName="Neutral" />
      <Button feedback={setBadFeedback} feedbackName="Bad" />
      <h2>Statistics</h2>

      <table>
        <tbody>

          <Statisticsline value={good} text="Good:" />
          <Statisticsline value={neutral} text="Neutral:" />
          <Statisticsline value={bad} text="Bad:" />
          <Statisticsline value={all} text="Total:" />
          <Statisticsline value={average} text="Average:" />
          <Statisticsline value={positive} text="Positive:" />

        </tbody>
      </table>

    </div>
  )
}
export default App
