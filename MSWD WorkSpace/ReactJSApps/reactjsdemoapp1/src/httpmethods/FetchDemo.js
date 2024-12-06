import React from 'react'

export default function FetchDemo()
{
    async function getdata()
    {
        //alert("Getting Data");
        //const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        //console.log(await response.data)
        console.log(await response.text())
    }
    return <div>
        <h1>Fetch Demo</h1>
        <button onClick={getdata}>Get Data</button>
    </div>
}