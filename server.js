import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.PORT || 8001;

//Middleware

//DB config

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Arya!"));

//Listener
app.listener("port", () => console.log(`listening on localhost ${port}`));
