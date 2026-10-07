import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { title } from "process";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.validatePassword = function (
  password: string,
  callback: (err: Error | null, same?: boolean) => void,
) {
  bcrypt.compare(password, this.password, (err, same) => {
    callback(err, same);
  });
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
