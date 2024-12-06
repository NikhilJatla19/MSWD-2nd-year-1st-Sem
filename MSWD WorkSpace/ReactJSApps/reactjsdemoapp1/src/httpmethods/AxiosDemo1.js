import React from 'react'
import axios from 'axios'
//no async and no await
export default function AxiosDemo1()
{
    function getdata()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return <div>
        <h1>Axios Demo1</h1>
        <button onClick={getdata}>Get Data</button>
    </div>
}