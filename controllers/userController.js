const User = require("./../models/userModel")

function home(req, res){
    res.send("<h1>Home Route of CRUD Application</h1>");
}

async function createUser(req,res){
    try {
        const {name, email} = req.body;

        // Check if Name or/and Email are empty
        if(!(name && email)){
            throw new Error("Name or/and Email are empty!")
        }

        // Check if User already exists
        const uniqueUserOrNot = await User.findOne({email});
        if(uniqueUserOrNot){
            throw new Error("User with same email already exists!")
        }

        // Create and Save User in database
        const newUser = new User({name,email});
        await newUser.save((error) => {
                if(error) console.log(`Error: User Creation Failed!\nErrorDetails: ${error}`);
            });
        res.status(201).json({
            success:true,
            message:"User Created Successfully.",
            newUser,
        });
    } catch (error) {
        console.log(error)
        res.status(400).send(`Error Occurred!\n${error}`)
    }
}

async function getUsers(req,res){
    try {    
        const allUsers = await User.find();
        let responseMsg = "User list exists.";
        if(!allUsers.length){
            responseMsg = "User list is empty!";
        }
        res.status(200).json({
            success:true,
            message:responseMsg,
            allUsers,
        })
    } catch (error) {
        console.log(error);
        res.status(403).json({
            success:false,
            message:error.message,
        })
    }
}

module.exports = {home, createUser, getUsers};