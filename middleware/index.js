const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

module.exports = server => {
  server.use(express.json());
  server.use(helmet());
  server.use(morgan("short"));
  server.use(cors());
};