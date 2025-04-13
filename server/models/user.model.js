import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        require: true, 
        trim :true
    },
    email:{
        type:String, 
        require: true, 
        lowercase:true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},{ timestamps: true })

export default mongoose.model('User', userSchema);