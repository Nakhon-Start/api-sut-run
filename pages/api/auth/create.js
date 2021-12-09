import { sql_query } from "../../../lib/db";
import { hash } from "bcrypt";

const handler = async (req, res) => {
  const name = req.body.name;
  const employee_id = req.body.employee_id;
  const sex = req.body.sex;
  const bureau = req.body.bureau;
  const operating_age = req.body.operating_age;
  const email = req.body.email;
  const password = req.body.password;
  const contact_number = req.body.contact_number;
  const weight = req.body.weight;
  const height = req.body.height;

  if (req.method === "POST") {
    hash(password, 10, async function (err, hash) {
      try {

        const results = await sql_query(
          "INSERT INTO user (name,employee_id,sex,bureau,operating_age,email,password,contact_number,weight,height) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)",
          [
            name,
            employee_id,
            sex,
            bureau,
            operating_age,
            email,
            hash,
            contact_number,
            weight,
            height,
          ]
        );
        return res.status(200).json({ message: "Success", results });
      } catch (e) {
        res.status(404).json({ message: "This e-mail is already in use." });
      }
    });
  }
};
export default handler;
