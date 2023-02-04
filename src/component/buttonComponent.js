import React from 'react'
import '../style/index.css'

function ButtonComponent({name, onClick}) {
  return (
    <>
        <button onClick={onClick} >{name}</button>
    </>
  )
}

export default ButtonComponent