import { sql_query } from "../../../lib/db";
import { Verify } from "../auth/verify";

const handler = async (req, res) => {
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
    if (req.method === "POST") {
      try {
        const results = await sql_query(
          "INSERT INTO history (employee_id,date,distance,time,status,img) VALUES (?, ?, ?, ?, ?, ?)",
          [employee_id, date, distance, time, status, img]
        );
        return res.status(200).json({ message: "Success", results });
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    }
  }
};
export default handler;
