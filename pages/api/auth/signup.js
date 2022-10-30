// import connectDb from "../../../lib/connectdb";
// import {  } from "bcryptjs";
// import User from "../../../models/User";

// connectDb();

// async function handler(req, res) {
//   //Only POST mothod is accepted
//   if (req.method === "POST") {
//     //Getting email and password from body
//     const {
//       email,
//       password,
//       lastName,
//       firstName,
//       schoolName,
//       individual,
//       teacherId,
//     } = req.body;
//     //Validate
//     if (!email || !email.includes("@") || !password) {
//       res.status(422).json({ message: "Invalid Data" });
//       return;
//     }
//     //Connect with database

//     //Check existing
//     const checkExisting = await User.findOne({ email: email });
//     //Send error response if duplicate user is found
//     if (checkExisting) {
//       res.status(422).json({ message: "User already exists" });
//       connectDb.close();
//       return;
//     }

//     const user = new User({
//       email,
//       password: await hash(password, 12),
//       firstName,
//       lastName,
//       schoolName,
//       individual,
//       teacherId,
//     });
//     await user.save();
//     res.send(user);
//     //Hash password
//     //Send success response
//     res.status(201).json({ message: "User created", data: user });
//     //Close DB connection
//     connectDb.close();
//   } else {
//     //Response for other than POST method
//     res.status(500).json({ message: "Route not valid" });
//   }
// }

// export default handler;

import connectDb from "../../../lib/connectdb";
import { genSalt, hash } from "bcryptjs";
import User from "../../../models/User";

connectDb();

export default async function handler(req, res) {
  const {
    email,
    password,
    lastName,
    firstName,
    schoolName,
    individual,
    teacherId,
  } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    res.status(200).json({ message: "already registered" });
    return;
  }
  const salt = await genSalt(10);
  const hashPass = await hash(password, salt);

  const newUser = new User({
    email,
    password: hashPass,
    firstName,
    lastName,
    schoolName,
    individual,
    teacherId,
  });

  await newUser.save();
  res.status(200).json({ message: "success" });
}
