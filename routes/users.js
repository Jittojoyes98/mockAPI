import express from "express";
import {v4 as uuidv4} from 'uuid'
export  const router=express.Router()

let users=[]


router.get('/',(req,res)=>{
    res.send(users)
})

router.post('/',(req,res)=>{
    res.send("Post route reached")
    const user=req.body
    const id=uuidv4()
    users.push({...user,"id":id})
})

router.get('/:id',(req,res)=>{
    const {id}=req.params
    // console.log(id)
    const currentUser=users.find((user)=>user.id===id)
    // console.log(currentUser)
    res.send(currentUser);
})


router.delete('/:id',(req,res)=>{
    const {id}=req.params
    users=users.filter((user)=>user.id!==id)
    res.send(`User deleted with id ${id}`)
})


router.patch('/:id',(req,res)=>{
    const {id}=req.params
    const userToBeChanged=users.find((user)=>user.id===id)
    const {firstName,lastName,age}=req.body;
    if(firstName) userToBeChanged.firstName=firstName
    if(lastName) userToBeChanged.lastName=lastName
    if(age) userToBeChanged.age=age
})
export default router;
