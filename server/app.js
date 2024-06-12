const express = require('express');
const cors = require('cors')
const serverConfig = require('./serverConfig/serverConfig');
const PORT = 3000;
const app = express();
serverConfig(app);

//cors policy settings
app.use(cors({
  origin:[
    'http://localhost:5174',
    'http://localhost:5173',
    'http://localhost:3000',
  ],
  methods:["PUT", "POST", "GET", "DELETE"]
}))


//routers imports
const apiGetAllToDoes = require('./routes/api-get-all-todoes-router')
const apiAddNewTodo = require('./routes/api-add-new-todo-router');

// const { sequelize } = require("./db/models");
// sequelize.authenticate();

app.use('/api', apiGetAllToDoes)
app.use('/api', apiAddNewTodo);


app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
