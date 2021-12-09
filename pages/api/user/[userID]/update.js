import { sql_query } from "../../../../lib/db";
import { Verify } from "../../auth/verify";
const handler = async (req, res) => {
  const name = req.body.name;
  const employee_id = req.body.employee_id;
  const sex = req.body.sex;
  const bureau = req.body.bureau;
  const operating_age = req.body.operating_age;
  const email = req.body.email;
  const contact_number = req.body.contact_number;
  const weight = req.body.weight;
  const height = req.body.height;
  const { userID } = req.query;

  const bearerHearder = req.headers.authorization;
  const v = Verify(bearerHearder);
  if (!v) {
    return res.status(401).json("Unauthenticated");
  } else {
    if (req.method === "PUT") {
      try {
        const results = await sql_query(
          `UPDATE user
          SET name = '${name}', employee_id = '${employee_id}',
          sex = '${sex}', bureau = '${bureau}',
          operating_age = '${operating_age}', email = '${email}',
          contact_number = '${contact_number}', weight = '${weight}',
          height = '${height}'
          WHERE id_user = ${userID};`
        );
        return res.status(200).json({ message: "UPDATE Success", results });
      } catch (e) {
        res.status(404).json({ message: e.message });
      }
    }
  }
};
export default handler;
