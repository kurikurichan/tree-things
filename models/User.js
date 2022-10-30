import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    schoolName: String,
    individual: String,
    teacherId: String,
  },
  { timeStamps: true }
);

const User = models?.User || model("User", UserSchema);

export default User;
