const Users = require('../models/Users');

const gt = async (req, res) => {
    // Users.find((err,data) =>{
    //     if(err){
    //         res.status(500).send(err);
    //     }else{
    //         res.status(200).send(data);
    //     }
    // })

    let users;
    try {
        users = await Users.find();
    }
    catch (err) {
        return console.log(err);
    }
    return res.status(200).json({ users });
};


const pt = async (req, res, next) => {
    let { Username, FullName, Email, Password, ConfirmPassword } = req.body;

    if(Password == ConfirmPassword){
        const newUser = new Users({
            Username, FullName, Email, Password
        });
        try {
            await newUser.save();
        }
        catch (err) {
            console.log(err);
        }
        return res.status(200).send({ message: "Data entered success." });
    }else{
        return res.status(200).send({message:"Passwords does not match"})
    }
    
}

module.exports = { gt, pt };
