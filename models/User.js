import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    username: { type: String },
    schoolName: { type: String },
    individual: { type: String },
    teacherId: { type: String },
  },
  { timeStamps: true }
);

const User = models?.User || model("User", UserSchema);

export default User;
