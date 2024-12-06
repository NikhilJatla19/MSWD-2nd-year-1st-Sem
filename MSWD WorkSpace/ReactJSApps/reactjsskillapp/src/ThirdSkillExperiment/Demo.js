import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { ComputerScience } from './data';
import { Electrical } from './data';
import { BioTech } from './data';
import { Mechanical } from './data';
import './Demo.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Demo() {
  const classes = useStyles();
  const[department,setDepartment] = useState(ComputerScience)
  
  const display = (depart) =>
  {
    setDepartment(depart)
  }

  return (
    <div>
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={() =>display(ComputerScience)}>CSE</Button>
        <Button variant="contained" color="primary" onClick={() =>display(Electrical)}>ECE</Button>
        <Button variant="contained" color="primary" onClick={() =>display(Mechanical)}>ME</Button>
        <Button variant="contained" color="primary" onClick={() =>display(BioTech)}>BT</Button>
      </div>
      <div>
        <p><b>{department[0].displayName}</b></p>
        <img src={department[0].imageUrl} width="70%" height="550"/>
        <p>{department[0].description}</p>
        <p style={{textAlign:"left"}}><b>Programs Offered:</b>


        

       <ul>

       {department[0].programsOffered.map((program)=>{

         return <li>{program}</li>

       })}

       </ul>

</p>
        <p><b>Head Of The Department: {department[0].hod}</b></p>
      </div>
    </div>
  );
}