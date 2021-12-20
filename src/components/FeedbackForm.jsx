import { useState } from 'react'
import Card from './Card'

function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (content) => {
    setText(content.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your experience with us?</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
