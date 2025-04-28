import { v4 } from "uuid";
import { imgs } from "../../assets/assets";

export type ProjectFieldType = {
  id: string;
  img: string;
  title: string;
  description: string;
  url: string;
};

export const myProjects: ProjectFieldType[] = [
  {
    img: imgs.xo,
    title: "XO Game",
    url: "https://react-x0.onrender.com",
    description:
      "A X0 game with the design provided by a platform where I am subscribed where users make projects with certain requirements to practice their skills",
  },
  {
    img: imgs.mern_book,
    title: "Booking App",
    url: "https://mern-booking-app-0w8v.onrender.com",
    description:
      "A Mern-stack App where i put focus to consolidate skills learned and applying them to real world scenarios",
  },
  {
    img: imgs.mern_eat,
    title: "Food-delivery App",
    url: "https://food-app-aqkc.onrender.com",
    description:
      "A Mern-stack App where i started to implement a more complex logic for admin management that follows him from creation of products until delivery process",
  },
  {
    img: imgs.pern_book,
    title: "Book-store App",
    url: "https://pern-book.onrender.com",
    description:
      "A Pern-stack App I am making for the final-test of the course I am subscribed, to improve global-state-management organization I started using redux, while on server side I'm learning PostgreSQL to be able work with both sql and no-sql databases",
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
