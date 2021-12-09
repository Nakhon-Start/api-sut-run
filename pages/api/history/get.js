import { sql_query } from "../../../lib/db";
import { Verify } from "../auth/verify";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const bearerHearder = req.headers.authorization;
    const v = Verify(bearerHearder);
    if (!v) {
      return res.status(401).json("Unauthenticated");
    } else {
      try {
        const result = await sql_query(`
        SELECT history.employee_id,history.date,history.distance,history.time,history.status,history.img
        FROM history
        INNER JOIN user
        ON history.employee_id = user.employee_id
        WHERE user.employee_id=${v.employee_id}`);
        return res.json(result);
      } catch (e) {
        res.status(404).json({ message: e.message });
      }
    }
  }
};
export default handler;
