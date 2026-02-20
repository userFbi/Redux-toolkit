import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decre, incre } from './counterSlice'

const ButtonUi = () => {

    const count = useSelector((state) => state.counter.value)
    const dis = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dis(incre())}>+++</button>
            <button onClick={() => dis(decre())}>---</button>
        </div>
    )
}

export default ButtonUi