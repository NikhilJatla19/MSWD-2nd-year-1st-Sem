import React from 'react'
import axios from 'axios'

export default function AxiosDemo()
{
    async function getdata()
    {
        //alert("Getting Data");
        try
        {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(response.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return <div>
        <h1>Axios Demo</h1>
        <button onClick={getdata}>Get Data</button>
    </div>
}