import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Index() {
    useEffect(() => {
        console.log(`useEffect=>老弟，你来了！Index`)
        return ()=> {
            console.log('老弟！你走了 Index')
        }
    },[])
    return <h2>JSPang.com</h2>
}

function List() {
    useEffect(() => {
        console.log(`useEffect=>老弟，你来了！List`)
    })
    return <h2>List Page</h2>
}

function Example() {
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count}`)
        return () => {
            console.log('============')
        }
    }, [count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>点我</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" exact component={List} />
            </Router>
        </div>
    )
}
 
export default Example;