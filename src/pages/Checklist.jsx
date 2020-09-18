import React, { useState, useEffect } from 'react'
import { checklist } from '../services/api'
import { Link } from 'react-router-dom'
import CheckListDetail from '../pages/ChecklistDetail'

function Checklist() {

  const [list, setList] = useState([])

  const populateList = async () => {
    console.log('populateList')
    try {
      const response = await checklist.getAll()
      console.log(response.data.data)
      if (response.status === 200) setList(response.data.data)
    } catch (e) {
      if (e && e.response && e.response.data) {
        console.log(e.response.data)
      } else {
        console.log(e)
      }
    }
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
