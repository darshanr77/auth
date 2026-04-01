import mongoose from "mongoose";

export const userSchema = new mongoose.model({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    lastlogin:{
        type:Date,
        default:Date.now,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPassowrdToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date
},{timestamps:true});


export const User = mongoose.model("User",userSchema);