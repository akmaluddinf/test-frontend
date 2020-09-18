import React, { useState } from 'react'
import { item } from '../services/api'
import { useHistory } from 'react-router-dom'

function ChecklistItemCreate() {
  const history = useHistory()
  const [itemName, setItemName] = useState('')
  const [checklistId, setChecklistId] = useState(0)

  const handleSave = () => {
    item.post({ itemName, checklistId })
  }

  const handleChecklistIdChange = (event) => {
    setChecklistId(event.target.value)
  }

  const handleChecklistItemNameChange = (event) => {
    setItemName(event.target.value)
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Checklist Id: </label>
            <input className="form-control" name="checklistId" type="text" onChange={handleChecklistIdChange} />
            <label>Item Name: </label>
            <input className="form-control" name="itemName" type="text" onChange={handleChecklistItemNameChange} />
          </div>
          <button className="btn btn-primary" type="button" onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default ChecklistItemCreate
