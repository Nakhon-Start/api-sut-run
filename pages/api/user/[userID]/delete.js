import { sql_query } from "../../../lib/db";
import { Verify } from "../../auth/verify";

const handler = async (req, res) => {
  const { userid } = req.query;
  const bearerHearder = req.headers.authorization;
  const v = Verify(bearerHearder)
  if(!v){
    return res.status(401).json("Unauthenticated");
  }else {
    if (req.method === "DELETE") {
      try {
        const results = await sql_query(
          `DELETE FROM user WHERE id_user='${userid}'`
        );
        return res.status(200).json({ message: "Delete Success" });
      } catch (e) {
        res.status(404).json({ message: e.message });
      }
    }
  }

};
export default handler;
