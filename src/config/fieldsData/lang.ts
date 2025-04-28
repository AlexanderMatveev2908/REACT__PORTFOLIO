import { v4 } from "uuid";

export const lang = [
  "Italian(C2)",
  "English(B2)",
  "Romanian(B2 only spoken)",
  "French(B1)",
].map((el) => ({
  el,
  id: v4(),
}));
