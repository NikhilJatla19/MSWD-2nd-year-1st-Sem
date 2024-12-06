import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AxiosAPIDemo() {
  const classes = useStyles();

  const[option,SetOption]=useState("")

  const[posts,setPosts]=useState([])
  const[photos,setPhotos]=useState([])
  const[todos,setToDos]=useState([])

  const display = (val)=>
  {
    SetOption(val)
  }

  const getpostsdata = () =>
  {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>{
      setPosts(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const getphotosdata = () =>
  {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) =>{
      setPhotos(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const gettodosdata = () =>
  {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) =>{
      setToDos(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  if(option==="posts")
  {
    getpostsdata()
  }
  if(option==="photos")
  {
    getphotosdata()
  }
  if(option==="todos")
  {
    gettodosdata()
  }

  const Posts=({posts})=>
  {
    if(posts!=null)
    {
      return(
        <div>
          {posts.map((posts)=>{
            return<p>{posts.id} {posts.title} {posts.body}</p>
          })}
        </div>
      );
    }
  }

  const ToDos = ({todos}) =>
  {
    if(todos!=null)
    {
      return (
        <div>
          {todos.map((todo) => {
            return <p>{todo.id} {todo.title} {todo.completed?'Completed':'Not Completed'}</p>
          })}
        </div>    
      );
    }
  }

  const Photos=({photos})=>
  {
    if(photos!=null)
    {
      return(
        <div>
          {photos.map((photos)=>{
            return <img src={photos.thumbnailUrl}/>
          })}
        </div>
      );
    }
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={()=>display("posts")}>POSTS</Button>
      <Button variant="contained" color="secondary" onClick={()=>display("photos")}>PHOTOS</Button>
      <Button variant="contained" color="secondary" onClick={()=>display("todos")}>TODO</Button>
      <input type="search" /> <br/><br/>
      <Posts posts={posts}/>
      <ToDos todos={todos}/>
      <Photos photos={photos}/>
    </div>
  );
}
