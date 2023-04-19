 
import React from 'react'
import {PostCard} from './PostCard'
import { useSelector } from 'react-redux'

export const Postlist=()=> {
  const {posts}=useSelector(state=>state.postStore)
  return (
    <> 
      {
        posts?.map((post,i)=>(<PostCard {...post} key={i}/>))
      }
    </>
  )
}
