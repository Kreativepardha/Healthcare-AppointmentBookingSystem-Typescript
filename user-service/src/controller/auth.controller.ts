import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createUser, findUserByEmail } from "../repository/user.repository"


const SECRET_KEY = process.env.JWT_SECRET || "SECRET"

export const register = async (req: Request, req: Response) => {
    const {name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
        name, email, password: hashedPassword
    })
    res.status(201).json(user);
}




export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
};