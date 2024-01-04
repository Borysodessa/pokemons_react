import { useEffect } from "react";
import styles from "./Pokemon.module.css";
import { Pokemon } from "./Pokemon";
import { Counter } from "./counter";
import { Pagination } from "./pagination";
import { SelectPerPage } from "./selectPerPage";
import { useSelector, useDispatch } from "react-redux";

export function fetchPokemons(pageSize, page) {
  const offset = page * pageSize - pageSize;
  console.log("4546546", pageSize);
  let limit = pageSize;

  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  console.log("****", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const pokemons = data.results.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.url.slice(34, -1),
      }));
      return pokemons;
    });
}

export function PokemonsList() {
  const pokemons = useSelector((state) => state.pokemons);
  const pageSize = useSelector((state) => state.pagination.pageSize);
  const page = useSelector((state) => state.pagination.page);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPokemons(pageSize, page).then((pokemons) => {
      dispatch({
        type: "LOAD_POKEMONS",
        pokemons: pokemons,
      });
    });
  }, [pageSize, page]);

  return (
    <div className={styles.mainWrap}>
      <div className={styles.wrap}>
        {/* <button className={styles.buttonLoad} onClick={handleClick}>
          Загрузить покемонов
        </button> */}
        <Counter />
        <SelectPerPage />
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  );
}
