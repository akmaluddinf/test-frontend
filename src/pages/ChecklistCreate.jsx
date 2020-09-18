import React, { useState } from 'react'
import { checklist } from '../services/api'
import { useHistory } from 'react-router-dom'

function ChecklistCreate() {
  const history = useHistory()
  const [name, setName] = useState('')

  const handleSave = async () => {
    const response = await checklist.post({ name })
    console.log(response)
    if (response.status === 201) {
      console.log('success')
      history.push(`/checklist/${response.data.id}`)
    }
  }

  const handleChecklistNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Name: </label>
            <input className="form-control" name="name" type="text" onChange={handleChecklistNameChange} />
          </div>
          <button className="btn btn-primary" type="button" onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default ChecklistCreate
