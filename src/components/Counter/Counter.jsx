import { connect } from "react-redux";

import React from 'react'

function Counter(props) {
const {count, step,dispatch} = props

const incrementCounter=()=>{
    const action = {type:'increment'}
    dispatch(action)
}

const decrementCounter=()=>{
    const action = {type:'decrement'}
    dispatch(action)
}

  return (
    <>
    <div>Count: {count}</div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
    </>
  )
}

const mapStateToProps = (state)=>{
  return state
}

const withAccessToStore = connect(mapStateToProps)

export default withAccessToStore(Counter)