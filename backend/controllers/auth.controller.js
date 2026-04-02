import { User } from "../models/user.model.js";
import { hash } from "bcryptjs";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signup = async (req,res) => {
    try {
        const {name,email,password} = req.body;

    if( !name || !email || !password){
        res.status(400).json({message:"All the feilds are required"});
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
        return res.status(400).json({sucess:false,message:"Existing User"});
    }

    const hashedPassword = await bcrypt.hash(password,10); 
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();;

    const user = new User({
        name,
        password:hashedPassword,
        email,
        verificationToken,
        verificationTokenExpiresAt:Date.now() + 24 * 60 * 60 * 1000, // for 24hrs or 1day
    });

    await user.save();

    generateTokenAndSetCookie(res,user._id);

    res.status(201).json({
        sucess:true,
        message:"User created Sucessfully",
        user:{
            ...user._doc,
            password:undefined,
        },
    });

    } catch (error) {
        res.status(500).json({sucess:false , message:error.message});
    }
};