import styles from "./Pokemon.module.css";
import { Pokemon } from "./Pokemon";
import { Counter } from "./counter";
//import { Pagination } from "./pagination";
import { useSelector, useDispatch } from "react-redux";

// ...
// fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.results.map((pokemon) => ({
//       pokemon: "name",
//       id: pokemon.url.slice(34, -1),
//     }));
//   });

// const po = [];
// async function pok() {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
//   const data = await response.json();

//   data.results.map(async (pokemon) => {
//     po.push({
//       pokemon: pokemon.name,
//       id: pokemon.url.slice(34, -1),
//     });
//   });
// }
// pok().then(() => {
//   console.log(po);
// });
//console.log(po)
//console.log(JSON.parse(po));

// 1. Кнопка «Загрузить покемонов» вызывает фетч и диспатчит массив
// 2. Сделать две кнопки вперед-назад, которые месяню текщую страницу (пока без загрузки покемонов)

export function PokemonsList() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  function handleClick() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pokemons = data.results.map((pokemon) => ({
          name: pokemon.name,
          id: pokemon.url.slice(34, -1),
        }));
        dispatch({
          type: "LOAD_POKEMONS",
          pokemons: pokemons,
        });
      });
  }
  return (
    <div className={styles.wrap}>
      <button className={styles.buttonLoad} onClick={handleClick}>
        Загрузить покемонов
      </button>
      <Counter />
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
      ))}
    </div>
  );
}
