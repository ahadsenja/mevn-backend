import { Request, Response } from "express";

type User = {
  name: string,
  email: string
}

export const getUsers = (req: Request, res: Response) => {
  const users: Array<User> = [
    {
      name: "Daniel",
      email: "daniel@mail.com"
    },
    {
      name: "John",
      email: "john@mail.com"
    }
  ]

  return res.json(users);
}