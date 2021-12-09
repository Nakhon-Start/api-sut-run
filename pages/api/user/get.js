import { sql_query } from "../../../lib/db";
import { Verify } from "../auth/verify";

const handler = async (req, res) => {
  const bearerHearder = req.headers.authorization;
  const v = Verify(bearerHearder)
  if (!v) {
    return res.status(401).json("Unauthenticated");
  } else {
    if (req.method === "GET") {
      try {
        const results = await sql_query(`SELECT * FROM user WHERE email="${v.email}"`);
        return res.json(results);
      } catch (e) {
        res.status(404).json({ message: e.message });
      }
    }
    return res.status(200).json("ok");
  }
};
export default handler;
