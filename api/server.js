const express = require("express");
const welcomeRouter = require("../welcome/welcome-router");
const carsRouter = require("../cars/cars-router");

const server = express();

server.use(express.json());
server.use("/api/cars", carsRouter);
server.use("/", welcomeRouter);

module.exports = server;
