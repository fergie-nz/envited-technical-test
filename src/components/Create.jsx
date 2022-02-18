import React from "react"
import {Link} from 'react-router-dom'

const Create = () => {

  

  return (
    <div className="create-page">
      <form>

      </form>
      <Link to={{
        pathname: "/event",
        state: }}>
        <button>
          Next
        </button>
      </Link>
    </div>
  )
}


export default Create