import React from 'react'
import { useState } from 'react'

export default function Quiz()
{
    const[q1,setq1]=useState()
    const[q2,setq2]=useState()
    const[q3,setq3]=useState()
    const[q4,setq4]=useState()
    const[q5,setq5]=useState()
    var value=0
    
    if(q1==='a')
    {
        value=value+1
    }
    if(q2==='b')
    {
        value=value+1
    }
    if(q3==='c')
    {
        value=value+1
    }
    if(q4==='a')
    {
        value=value+1
    }
    if(q5==='a')
    {
        value=value+1
    }
    return (
    <div>
        <form>
            <h1>Q1.Value Of 11+4</h1>
            <input type='radio' name='q1' value='a' onChange={setq1('a')}/>a.15<br/>
            <input type='radio' name='q1' value='b' onChange={setq1('b')}/>b.14<br/>
            <h1>Q2.Value Of 10+2</h1>
            <input type='radio' name='q2' value='a' onChange={setq2('a')}/>a.10<br/>
            <input type='radio' name='q2' value='b' onChange={setq2('b')}/>b.12<br/>
            <h1>Q3.Value Of 15-4</h1>
            <input type='radio' name='q3' value='a' onChange={setq3('a')}/>a.15<br/>
            <input type='radio' name='q3' value='b' onChange={setq3('b')}/>b.12<br/>
            <input type='radio' name='q3' value='c' onChange={setq3('c')}/>c.11<br/>
            <h1>Q4.Value Of 2+4</h1>
            <input type='radio' name='q4' value='a' onChange={setq4('a')}/>a.2<br/>
            <input type='radio' name='q4' value='b' onChange={setq4('b')}/>b.4<br/>
            <input type='radio' name='q4' value='c' onChange={setq4('c')}/>c.6<br/>
            <h1>Q5.Value Of 14+41</h1>
            <input type='radio' name='q5' value='a' onChange={setq5('a')}/>a.55<br/>
            <input type='radio' name='q5' value='b' onChange={setq5('b')}/>b.53<br/>
            <input type='radio' name='q5' value='c' onChange={setq5('c')}/>c.52<br/>
        </form>
    </div>
    )
}