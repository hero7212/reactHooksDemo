import React, { useState, useEffect } from 'react'
function Example() {
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count}`)
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>点我</button>
        </div>
    )
}
 
export default Example;