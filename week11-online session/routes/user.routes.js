const express =require('express')
const router=express.Router()

const controller=require('../controller/user.controler')

router.get('/',controller.getAllUsers)

router.post('/',controller.addUser)

router.patch('/:id',controller.updateUser)

router.delete('/:id',controller.deleteUser)
module.exports=router   