import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John doe",
    email: "johndoe@gmail.com",
    password: bcrypt.hashSync("23456", 10),
  },
  {
    name: "Jane doe",
    email: "janedoe@gmail.com",
    password: bcrypt.hashSync("34567", 10),
  },
];

export default users;
