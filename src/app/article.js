import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import article from '../comix.json'

const genres = ["Action","Comedy","Romance","Fantasy"];

const articles = [...Array(article.length)].map((_, index) => {
  index = Math.floor(Math.random() *24);
  const rdom = Math.floor(Math.random() *3)
  const setIndex = index + 1;
  return {
    id: faker.datatype.uuid(),
    cover: `/static/covers/cover_${setIndex}.jpg`,
    name: faker.random.words(4),
    view: faker.datatype.number(),
    genres: genres[rdom],
    author: faker.name.findName(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    status: sample(["OnGoing", "Ended", "New Release"]),
  };
});
export default articles;
