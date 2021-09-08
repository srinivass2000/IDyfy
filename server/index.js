import express from "express";
import cors from "cors";
import passport from "passport";
import passportLocal from "passport-local";
passportLocal.Strategy;
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import expressSession from "express-session";

const app = express();
app.use(
  expressSession({ secret: "idyfy", resave: true, saveUninitialized: true })
);

app.use(cookieParser("idyfy"));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Server running on port ${port} 🔥`)});
