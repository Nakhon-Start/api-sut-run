import { sql_query } from "../../../../lib/db";
import { Verify } from "../../auth/verify";
const handler = async (req, res) => {
  const { historyID } = req.query;
  const employee_id = req.body.employee_id;
  const date = req.body.date;
  const distance = req.body.distance;
  const time = req.body.time;
  const status = req.body.status;
  const img = req.body.img;

  const bearerHearder = req.headers.authorization;
  const v = Verify(bearerHearder);
  if (!v) {
    return res.status(401).json("Unauthenticated");
  } else {
    if (req.method === "PUT") {
      try {
        const results = await sql_query(
          `UPDATE history
          SET employee_id = '${employee_id}',date = '${date}',
          distance = '${distance}',time = '${time}',
          status = '${status}',img = '${img}'
          WHERE id_history = ${historyID}`
        );
        return res.status(200).json({ message: "UPDATE Success", results });
      } catch (e) {
        res.status(404).json({ message: e.message });
      }
    }
  }
};
export default handler;
