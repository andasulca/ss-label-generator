const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

//middleware
app.use(cors());
app.use(express.json()); //req.body

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://ss-barcodes-dev.eu.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://localhost:5000",
  issuer: "https://ss-barcodes-dev.eu.auth0.com/",
  algorithms: ["RS256"],
});

//ROUTES//

//create a todo

app.post("/post/clients", async (req, res) => {
  console.log(req.body);
  let query = "";
  if (req.body.id && typeof req.body.id === "number")
    query =
      "UPDATE public.clients " +
      " set company_name = '" +
      req.body.company_name +
      "', " +
      " reg_number = '" +
      req.body.reg_number +
      "' " +
      " where id = " +
      req.body.id;
  else
    query =
      "INSERT INTO public.clients" +
      "(company_name, reg_number)" +
      " VALUES('" +
      req.body.company_name +
      "' , " +
      req.body.reg_number +
      ") RETURNING *";

  try {
    const newRow = await pool.query(query);
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
        " VALUES('" +
        req.body.box_number +
        "' , " +
        req.body.client_id +
        ", " +
        req.body.print_date +
        ") RETURNING *"
    );
    res.json(newRow.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/post/saveboxes", async (req, res) => {
  console.log(req.body);
  try {
    const newRow = await pool.query(
      "select * from saveBoxes(" +
      req.body.client_id + 
      "," +
      req.body.box_count +
      ")"
    );
    res.json(newRow.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/get/getinfo", async (req, res) => {
  console.log(req.query);
  try {
    const newRow = await pool.query(
      "select * from getInfo(" +
      req.query.boxID + 
      "," +
      req.query.box_count +
      ")"
    );
    console.log(newRow.rows);
    res.json(newRow.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/get/*", jwtCheck, async (req, res) => {
  console.log(req.params);

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
      id,
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
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
