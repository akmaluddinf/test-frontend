import React from 'react'
import { checklist } from '../services/api'

function checkListDetail({ data, onDeleted }) {


  const handleClickDelete = async () => {
    const response = await checklist.delete(data.id)
    if (response.status === 200) {
      onDeleted(data.id)
    }
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">Id: {data.id}</h5>
        <p className="card-text">Name: {data.name}</p>
        <p className="card-text">Items: {JSON.stringify(data.items)}</p>
        <div>
          {
            data.items !== null &&
            data.items.map((item) => (<input key={item.id} type="checkbox"></input>))
          }
        </div>
        <button className="btn btn-danger" onClick={handleClickDelete}>delete</button>
      </div>
    </div>
  )
}

export default checkListDetail
