import React, { useState, useEffect } from 'react'
import { checklist } from '../services/api'
import { Link } from 'react-router-dom'
import CheckListDetail from '../pages/ChecklistDetail'

function Checklist() {

  const [list, setList] = useState([])

  const populateList = async () => {
    const response = await checklist.getAll()
    setList(response.data.data)
  }

  useEffect(() => {
    populateList()
  }, [])

  const handleOnDelete = (id) => {
    const undeleted = list.filter(data => (data.id !== id))
    setList(undeleted)
  }


  return(
    <div>
      <Link className="btn btn-success" to="/checklist/create">Create Checklist</Link>
      {
        list.map((data) => (
          <CheckListDetail onDeleted={handleOnDelete} key={data.id} data={data} />
        ))
      }
    </div>
  )
}

export default Checklist
