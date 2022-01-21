const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide fullname"],
    },
    email: {
      type: String,
      required: [true, "Please provide valid email address"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6,
      select: false,
    },
    // starred_idea: Array,
    pulled_ideas: Number,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    emailVerified: Boolean,
    emailVerificationToken: String,
    emailVerificationTokenExpiry: Date,
    ideas_contributed: Array,
    engagement_score: Number,
    profile_pic: String,
  },
  { timestamps: true }
);

UserSchema.index({
  title: "text",
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};

UserSchema.methods.getemailVerificationToken = function () {
  const VerificationToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.emailVerificationToken = crypto
    .createHash("sha256")
    .update(VerificationToken)
    .digest("hex");

  // Set token expire date
  this.emailVerificationTokenExpiry = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return VerificationToken;
};

const User = mongoose.model("User", UserSchema);

User.createIndexes();

module.exports = User;
