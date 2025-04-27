
import React from 'react'

const FinishScreen = ({maxPossiblePoints , points, dispatch}) => {

    const percentage = (points / maxPossiblePoints) * 100

    let emoji
    if(percentage === 100) emoji = '🏆'
    if(percentage >= 80 && percentage < 100) emoji = "🥳"
    if(percentage >= 60 && percentage < 80) emoji = "🤔"
    if(percentage >= 40 && percentage < 60) emoji = "😢"
    if(percentage >= 0 && percentage < 40) emoji = "😭"


  return (
    <div>
        <p className='result'><span>{emoji}</span> You Scored <strong>{points}</strong> Out of {maxPossiblePoints} ({Math.ceil(percentage)})%</p>

        <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>

    </div>
  )
}

export default FinishScreen