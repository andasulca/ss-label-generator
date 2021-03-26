const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/post/clients", async (req, res) => {
  console.log(req.body);
  try {
    const newRow = await pool.query(
      "INSERT INTO public.clients" +
      "(company_name, reg_number)" + 
      " VALUES('" + req.body.company_name + "' , " 
      + req.body.reg_number + ") RETURNING *"
    );
    res.json(newRow.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/post/boxes", async (req, res) => {
  console.log(req.body);
  try {
    const newRow = await pool.query(
      "INSERT INTO public.boxes" +
      "(box_number, client_id, print_date)" + 
      " VALUES('" + req.body.box_number + "' , " 
      + req.body.client_id + ", " +
      req.body.print_date +
      ") RETURNING *"
    );
    res.json(newRow.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/get/*", async (req, res) => {
  console.log(req.params)
  
  try {
    const allTodos = await pool.query("SELECT * FROM public." + req.params[0]);
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
