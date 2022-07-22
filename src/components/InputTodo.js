/* eslint-disable */

import React, { useState } from "react"

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputTodo


// But, in some cases, you’d be working with objects as state values. 
// For instance, you may be working with related data as in the case of 
// form fields and you’d want a single handler to keep track of all the fields

// ================================================================================================
// import React, { useState } from "react"

// const InputTodo = props => {
//   const [inputText, setInputText] = useState({
//     fName: "",
//     lastName: "",
//   })

//   const onChange = e => {
//     setInputText({
//       ...inputText,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log("submitted")
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add first name"
//           value={inputText.fName}
//           name="fName"
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add last name"
//           value={inputText.lastName}
//           name="lastName"
//           onChange={onChange}
//         />

//         <button className="input-submit">Submit</button>
//       </form>
//       <h2>{inputText.fName}</h2>
//       <h2>{inputText.lastName}</h2>
//     </>
//   )
// }

// export default InputTodo
// =========================================================================================================
