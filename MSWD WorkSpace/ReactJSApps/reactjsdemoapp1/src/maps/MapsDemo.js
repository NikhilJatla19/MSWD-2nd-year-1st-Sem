import React from 'react'

export default function MapsDemo()
{
    // number map
    const numbermap = [1,2,3,4,5,6,7,8,9,10]

    const numberlist = numbermap.map((element)=>{
        return <h2>{element}</h2>
    }
    )

    // string map

    const namemap = ["JS","SDP1","MEAN","MERN","JFSD"]

    const namelist = namemap.map(  (name) =>
    {
        return <h2>{name}</h2>
    }   
    )

    const employeemap=[{id:19,name:"KLU",age:40},{id:14,name:"KLEF",age:50},{id:1141,name:"KL",age:60}]

    const employeelist=employeemap.map((emp) =>
    {
        //console.log(emp)
        return <div>
            <h2>{emp.id}  {emp.name}  {emp.age}</h2>
        </div>
    }
    )
    return <div>
        <h1>Maps Demo</h1>
        <h2>{numberlist}</h2>
        <h2>{namelist}</h2>
        <h2>{employeelist}</h2>
    </div>
}