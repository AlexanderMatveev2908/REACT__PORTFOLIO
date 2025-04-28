import { v4 } from "uuid";

enum TypeWork {
  REMOTE = "Remote",
  ON_SITE = "On-site",
}

export type ExpType = {
  id: string;
  title: string;
  type: TypeWork;
  at: string;
  when: string;
  description: string;
};

export const experiences: ExpType[] = [
  {
    title: "Frontend Development Student",
    type: TypeWork.REMOTE,
    at: "SDA Academy",
    when: "Sep 2023 - Present",
    description:
      "The course covers key frontend development concepts, from HTML and CSS to JavaScript, focusing on practical applications and real-world scenarios.",
  },
  {
    title: "Barman",
    type: TypeWork.ON_SITE,
    at: "San Lorenzo",
    when: "Jun 2022 - Sep 2022",
    description:
      "Managed the bar from opening to closing. Prepared hot and cold drinks, and snacks using local products. Maintained stock levels and handled payments at the cash register.",
  },
  {
    title: "Construction Worker",
    type: TypeWork.ON_SITE,
    at: "Geo Amiata",
    when: "Sep 2021 - Apr 2022",
    description:
      "Assembled enclosures and gates, cleaned old buildings, planted vegetation, and performed weekly cleaning of compost tubs at the local dump.",
  },
  {
    title: "Waiter",
    type: TypeWork.ON_SITE,
    at: "Osteria Santa Caterina",
    when: "Jun 2020 - Sep 2020",
    description:
      "Managed lunch and dinner service as head waiter, ensuring smooth front-of-house operations. Handled mise en place, monitored fridge temperatures, and explained wines featured on the menu.",
  },
  {
    title: "Barman",
    type: TypeWork.ON_SITE,
    at: "Pizzeria La Lucciola",
    when: "Jun 2019 - Mar 2020",
    description:
      "Created the cocktail menu, changed beer stems when needed, and trained new employees on front-of-house workflow and cocktail preparation standards.",
  },
  {
    title: "Barman",
    type: TypeWork.ON_SITE,
    at: "Pizzeria La Lucciola",
    when: "Jun 2019 - Jan 2020",
    description:
      "Created the cocktail menu, changed beer stems when needed, and trained new employees on front-of-house workflow and cocktail preparation standards.",
  },
  {
    title: "Barman/Waiter",
    type: TypeWork.ON_SITE,
    at: "Rifugio Vetta",
    when: "Aug 2016 - Apr 2019",
    description:
      "Prepared local specialty drinks at the bar, served hotel breakfasts, and explained local dishes, highlighting the quality of the raw materials used in their preparation.",
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
