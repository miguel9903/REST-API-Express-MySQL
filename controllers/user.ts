import { Request, Response } from "express";
import User from "../models/user";

const userController = {
    
    getUsers: async (req: Request, res: Response) => {

        try {

            const users = await User.findAll();

            if(users.length === 0) {
                res.status(404).json({
                    message: "Not users found"
                });
            } else {
                res.json(users);
            }

        } catch(err) {
            res.status(500).json({
                message: "Failed to get users",
                error: err
            });
        }  

    },

    getUser: async (req: Request, res: Response) => {

        try {

            const { id } = req.params;
            const user = await User.findByPk(id);
            res.json(user);

        } catch(err) {
            res.status(500).json({
                message: "Failed to get user",
                error: err
            });
        }

    },

    createUser: async (req: Request, res: Response) => {

        try {

            const { name, lastname, email, age } = req.body;
            const userData = { name, lastname, email, age };    
                               
            const user = new User(userData);
            await user.save();
            
            res.json({
                message: "User created",
                user
            });

        } catch(err) {
            res.status(500).json({
                message: "Failed to create user",
                error: err
            });
        }

    },

    updateUser: async (req: Request, res: Response) => {

        try {

            const { id } = req.params;
            const { name, lastname, email, age } = req.body;
            const userData = { name, lastname, email, age };  

            const user = await User.findByPk(id);
            await user?.update(userData); 

            res.json({
                message: "User updated",
                user
            });              
            
        } catch(err) {
            res.status(500).json({
                message: "Failed to update user",
                error: err
            });
        }

    },

    deleteUser: async (req: Request, res: Response) => {

        try {

            const { id } = req.params;
            const user = await User.findByPk(id);
            await user?.update({ status:false });

            res.json({
                message: "User deleted",
                user
            });

        } catch(err) {
            res.status(500).json({
                message: "Failed to delete user",
                error: err
            });
        }

    }

};

export default userController;