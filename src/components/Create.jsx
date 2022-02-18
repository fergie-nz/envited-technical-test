import React from "react"
import {Link} from 'react-router-dom'

const Create = () => {

  return (
    <div>
      <Link to={`event`}>
        <button>
          Next
        </button>
      </Link>
    </div>
  )
}


export default Create