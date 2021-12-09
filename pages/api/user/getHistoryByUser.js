import { sql_query } from "../../../lib/db";
import { Verify } from "../auth/verify";

const handler = async (req, res) => {
  const bearerHearder = req.headers.authorization;
  const v = Verify(bearerHearder);
  if (!v) {
    return res.status(401).json("Unauthenticated");
  } else {
    if (req.method === "GET") {
      try {
        const results = await sql_query(`SELECT *
        FROM user
        INNER JOIN history
        ON user.employee_id = history.employee_id WHERE email="${v.email}"`);
        return res.status(200).json(results);
      } catch (e) {
        res.status(404).json({ message: e.message });
      }
    }
  }
};
export default handler;
