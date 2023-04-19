import React,{useState} from 'react'
import {Box,TextField,Button} from '@mui/material'
import {addPost} from "../../features/posts/postSlice";
import { useDispatch } from 'react-redux';

const InitialState={
    title:'',
    body:'',
}

export const Addpost=() => {
    const dispatch=useDispatch();
    const [formData,setFormData]=useState()

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(prevState=>({...prevState,[name]:value}));
    };

    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(addPost(formData)); 
      setFormData(InitialState)

    }
  return (
      <Box onSubmit={handleSubmit}
      component="form" className='form-container'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={formData.title} onChange={handleChange} id="title" label="Title" variant="outlined" />
      <TextField value={formData.body} onChange={handleChange} id="body" label="Body" variant="outlined" />
      <Button  type='submit' size="small">Send</Button>
    </Box>
  )
}
