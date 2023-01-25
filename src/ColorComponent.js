import React from 'react'
import { useSelector } from 'react-redux'
const ColorComponent = () => {
    const color = useSelector(state => state.testReducer.areaColor) || 'white'
    console.log('ColorComponent');
    return (
        <div style={{ backgroundColor: color }} >ColorComponent</div>
    )
}
export default ColorComponent
