import React from 'react'
import {Card,CardContent,Typography} from '@mui/material'

export const PostCard=({title,body})=> {
  return (
    <Card   className="card" variant="outlined">
      <CardContent>
        <Typography variant="5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}          
        </Typography>
      </CardContent>       
    </Card>
  );
}
