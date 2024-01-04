import styles from "./Pokemon.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { fetchPokemons } from "./PokemonsList";

export function Pagination() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.pagination.page);
  // const pageSize = useSelector((state) => state.pagination.pageSize);

  function handleIncrease() {
    dispatch({
      type: "INCREASE_PAGE",
    });

    // fetchPokemons(pageSize, page + 1).then((pokemons) => {
    //   dispatch({
    //     type: "UPDATE_PAGESIZE",
    //     pokemons: pokemons,
    //   });
    // });
  }

  function handleDecrease() {
    dispatch({
      type: "DECREASE_PAGE",
    });

    // fetchPokemons(pageSize, page - 1).then((pokemons) => {
    //   console.log(pokemons);
    //   dispatch({
    //     type: "UPDATE_PAGESIZE",
    //     pokemons: pokemons,
    //   });
    // });
  }

  return (
    <div>
      <button onClick={handleDecrease} disabled={page <= 1}>
        назад
      </button>
      <span className={styles.page}>{page}</span>
      <button onClick={handleIncrease}>вперед</button>
    </div>
  );
}
