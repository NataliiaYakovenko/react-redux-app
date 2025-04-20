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

const stepChangHandler=({target:{value}})=>{
    const action = {type:'newStep', value: Number(value)}
    dispatch(action)
}

  return (
    <>
    <div>Count: {count}</div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
    <input type='number' value={step} onChange={stepChangHandler}/>
    </>
  )
}

const mapStateToProps = (state)=>{
  return state
}

const withAccessToStore = connect(mapStateToProps)

export default withAccessToStore(Counter)