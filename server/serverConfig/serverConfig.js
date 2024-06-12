const express = require('express');
const morgan = require('morgan');

const serverConfig = (server) => {
  server.use(morgan('combined'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(express.static('public'));
};

module.exports = serverConfig;
