import connectDb from "../../../lib/connectdb";
import { hash } from "bcryptjs";
import User from "../../../models/User";

connectDb();

async function handler(req, res) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const {
      email,
      password,
      lastName,
      firstName,
      schoolName,
      individual,
      teacherId,
    } = req.body;
    //Validate
    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }
    //Connect with database

    //Check existing
    const checkExisting = await User.findOne({ email: email });
    //Send error response if duplicate user is found
    if (checkExisting) {
      res.status(422).json({ message: "User already exists" });
      connectDb.close();
      return;
    }

    const user = new User({
      email,
      password: await hash(password, 12),
      firstName,
      lastName,
      schoolName,
      individual,
      teacherId,
    });
    await user.save();
    res.send(user);
    //Hash password
    //Send success response
    res.status(201).json({ message: "User created", data: user });
    //Close DB connection
    connectDb.close();
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;
