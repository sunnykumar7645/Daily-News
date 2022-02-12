import React from 'react'
import loading from './loading.gif'
const Spinner =() => {
  return (
    <div className="text-center" >

      <img src={loading} alt='loading'/>
      
    </div>
  )
}

export default Spinner

// change into class based component into funtion based component

// import React, { Component } from 'react'

// export default class Spinner extends Component {
//   render() {
//     return (
//      <div className="text-center" >

        // <img src={loading} alt='loading'/>
        
        // </div>
//     )
//   }
// }
