import { sql_query } from "../../../lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { secret } from "./Secret";

const handler = async (req, res) => {
  const { email, password } = req.body;
  if (req.method === "POST") {
    const user = await sql_query(`SELECT * FROM user WHERE email="${email}"`);
    const payload = {
      name: user[0].name,
      email: user[0].email,
      employee_id: user[0].employee_id,
      bureau: user[0].bureau,
      operating_age: user[0].operating_age,
      contact_number: user[0].contact_number,
      weight: user[0].weight,
      height: user[0].height,
      status: user[0].status,
    };
    compare(password, user[0].password.toString(), function (err, result) {
      if (!err && result) {
        const jwt = sign(payload, secret, { expiresIn: "7d" });
        return res.status(200).json({ authToken: jwt });
      } else {
        return res.status(400).json({ message: "Invalid email or password" });
      }
    });
  } else {
    return res.status(405).json({ message: "We only support POST" });
  }
};
export default handler;
