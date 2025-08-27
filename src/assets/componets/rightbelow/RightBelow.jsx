import React from 'react'

const RightBelow = () => {
  return (
    <div className="RightBelow">
        <div style={{width: '1300px', height: '150px', backgroundColor: "wheat"}}>
            Latest Updates
            <hr/>
            <br/>
            <br/>
            4 hrs ago  +5 New products were added!
            <br/>
            <br/>
            1 day ago  Database backup Completed.
        </div>
        <div style={{width: '1300px', height: '250px', backgroundColor: "lightgrey"}}>
          User Activity
          <hr/>
          <br/>
          <br/>
          John Doe
          <br/>
          Lorem ipsum is simply dummy text.
          <br/>
          2 min ago.

          <br/>
          <br/>
          John Doe
          <br/>
          Lorem ipsum is simply dummy text.
          <br/>
          2 min ago.

        </div>    
    </div>
  )
}

export default RightBelow