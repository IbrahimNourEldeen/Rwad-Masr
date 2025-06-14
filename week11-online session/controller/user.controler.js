// const users=require('../mod/user')
const Users=require('../mod/users.model')
const { ERROR } = require('../utilits/httpStatus')
const httpStatus=require('../utilits/httpStatus')

const getAllUsers= async (req,res)=>{
    // res.json(users)
    try{
        const users=await Users.find()
        if(!users){
            return res.status(404).json({status:httpStatus.FAIL,data:"data not found"})
        }
        return res.status(200).json({status:httpStatus.SUCCESS,data:{users}})
    }catch(err){
        return res.status(400).json({status:httpStatus.ERROR,message:err.message})
    }
}


const addUser = async (req,res)=>{
    // let newUser={
    //     id:users.length+1,
    //     name: req.body.name,
    //     gmail:req.body.gmail
    // }
    // users.push(newUser)
    // res.json(users)

    try{
        const newUser=new Users(req.body)
        if(!newUser){
            return res.status(404).json({status:httpStatus.FAIL,data:"no user added to body"})
        }
        await newUser.save();
        return res.status(200).json({status:httpStatus.SUCCESS,data:{newUser}})
    }catch(err){
        return res.status(400).json({status:httpStatus.ERROR,message:err.message})
    }
}

const updateUser = async (req,res)=>{
    // let user=users.find(m=>m.id===+req.params.id)
    // if (user) {
    //     user = { ...user, ...req.body };
    //     res.status(200).json(user);
    // } else {
    //     res.status(404).send('Movie not found');
    // }
    try{
        const updatedUser = await Users.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
        if(!updateUser){
            return res.status(404).json({status:httpStatus.FAIL,data:"no user added to body"})
        }
        return res.status(200).json({status:httpStatus.SUCCESS,data:{users}})
    }catch(err){
        return res.status(400).json({status:httpStatus.ERROR,message:err.message})
    }
}


const deleteUser = async (req,res)=>{
    // const userIndex=users.findIndex(m=>m.id===+req.params.id)
    // if (userIndex !== -1) {
    //     users.splice(userIndex, 1);
    //     res.json(users);
    // } else {
    //     res.status(404).send('Movie not found');
    // }

    try{
        const deleteUser = await Users.deleteOne({_id:req.params.id})
        if(deleteUser.count===0){
            return res.status(404).json({status:httpStatus.FAIL,data:"no user added to body"})
        }
        return res.status(200).json({status:httpStatus.SUCCESS,data:{users}})
    }catch(err){
        return res.status(400).json({status:httpStatus.ERROR,message:err.message})
    }
}

module.exports = { 
    getAllUsers,
    addUser, 
    updateUser, 
    deleteUser 
};