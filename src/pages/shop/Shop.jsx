import React from 'react'
import { useParams } from 'react-router-dom'

export default function Shop() {
  const { type } = useParams()
  console.log(type)
  const listItem = [
    {
      id: 1,
      url: "../image/hoabinh/hoabinh1.jpg",
      type: "hoabinh"
    },
    {
      id: 2,
      url: "../image/hoabo/hoabo1.jpg",
      type: "hoabo"
    },
    {
      id: 3,
      url: "../image/hoagio/giohoa1.jpg",
      type: "hoagio"
    },
  ]
  const result = listItem.filter((item) =>
    item.type === type
  )

  return (
    <div>
      {result.map((item) => <div>
        <img src={item.url} alt="" />
      </div>)}
    </div>
  )
}
