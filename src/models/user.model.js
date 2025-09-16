import mongoose,{Schema} from mongoose;
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userschema=new Schema({
      username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
      }  ,
       email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
      },
        fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
      },
         avatar:{
        type:String,
        required:true,
      },
         coverimage:{
        type:String,
      },
        watchistory:[
            {
        type:Schema.Types.ObjectId,
        ref:"video",
           }
    ],
    password:{
        type:String,
        required:[true,"password is required"]

    },
    refreshtokens:{
        type:String,
    },
     
},{timestamps: true })


userschema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})

userschema.methods.isPasswordCorrect =async function(password){
       return await  bcrypt.compare(password,this.password)
}

userschema.methods.generateacesstoken=function(){
   return  jwt.sign({
        id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
)
}
userschema.methods.generaterefreshtoken=function(){
       return  jwt.sign({
        id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
)
}

export const user=mongoose.model("user",userschema);