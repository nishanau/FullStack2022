import { useState } from 'react'



const Anecdotes = ({ update, name, anecdote, selected }) => {

  return (

    <div>
      <p>{anecdote[selected]}</p>
      <button onClick={update} >
        {name}
      </button>
    </div>

  )
}
const Button = ({ name, voteCount, handleVotes, selected }) => {



  return (
    <div>
      <button onClick={handleVotes}> {name} </button>
      <p>has {voteCount[selected]} votes</p>
    </div>
  )
}

const LargestAnecdote = ({anecdotes, vote }) => {
  var largestIndex = 0
  var largestValue = vote[0]

  for(let i = 1; i< vote.length; i++)
  {
      if(largestValue < vote[i]){
        largestValue = vote[i]
        largestIndex = i
      }
  }
  let a  = vote.every(x =>x === 0)
  if(a === true){
    return(
      <div>
        No Votes given so far
      </div>
    )
  }

  return(
    
    <div>
      Anecdote with largest vote: {largestValue}
      <p>{anecdotes[largestIndex]}</p>
    </div>
  )
}



const App = () => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(7).fill(0))


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const update = () => {
    setSelected(Math.floor(Math.random() * (6 - 0 + 1)) + 0)
  }

  const voteCount = [...vote]

  //console.log(selected)

  const handleVotes = () => {


    voteCount[selected] += 1
    setVote(voteCount)

   // console.log('vote array ', voteCount)
  }


  return (

<>
    <div>
      <Anecdotes update={update} name="Next Anecdote" anecdote={anecdotes} selected={selected} vote />
      </div>
      <div>
      <Button name="Vote for this Anecdote" voteCount={voteCount} handleVotes={handleVotes} selected={selected} />
      <LargestAnecdote anecdotes={anecdotes} vote = {vote} />
    </div>
  </>
  )

}



export default App
