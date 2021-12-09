import { verify } from "jsonwebtoken";
import { secret } from "./Secret";

export const Verify = (bearerHearder) => {
  const tokens = bearerHearder.split(" ")[1];
  if (tokens) {
    try {
      return verify(tokens, secret);
    } catch (err) {
      return false;
    }
  }
};
