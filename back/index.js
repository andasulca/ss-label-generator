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

//create

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

//get all

app.get("/get/*", jwtCheck, async (req, res) => {
  console.log(req.params);

  try {
    const allTodos = await pool.query("SELECT * FROM public." + req.params[0]);
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
  console.log("server has started on port 5000");
});
