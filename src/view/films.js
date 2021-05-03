import { GET_FILM } from '../models/getFilm.js';
import { CardFilm } from './components/content/card-film/CardFilm.js';
import helpers from '../controller/helpers/helpers.js';

export const Films = (type, customClass) => {
  const containerFilms = document.createElement("main");
        containerFilms.classList.add("container");
  if (customClass) containerFilms.classList.add(customClass);

  const keywordsFilms = ["comedy", "terror", "drama", "romantic"];
  const randomNum = helpers.RANDOM_NUMBER(keywordsFilms.length);

  const URL = helpers.GET_URL("general", keywordsFilms[randomNum], null, type, 1 );
  const films = GET_FILM(URL);
  
  films.then(data => {
    console.log(data);
    let structureHTML = "";
    data.forEach((element) => {
      const {Poster, Title, Year, price, imdbID } = element;
      structureHTML += `${CardFilm(Poster, Title, Year, price, imdbID, "Add to card")}`;
      containerFilms.innerHTML = structureHTML;
    });
  });

  return containerFilms;
};
