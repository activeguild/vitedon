import React from 'react'
import { Link } from 'react-router-dom'

const index: React.VFC = () => {
  return (
    <div>
      <p>index.vue</p>
      <Link to="/about">
        about
      </Link> 
    </div>
  )
}

export default index