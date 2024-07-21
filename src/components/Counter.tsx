import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { increment, decrement, incrementByAmount } from '../slices/counterSlice'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  )
}

export default Counter
