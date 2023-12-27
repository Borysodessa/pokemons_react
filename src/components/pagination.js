import styles from "./Pokemon.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "./PokemonsList";

export function Pagination() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.page);
  const pageSize = useSelector((state) => state.pagination.pageSize);

  function handleIncrease() {
    fetchPokemons(pageSize, page + 1);

    dispatch({
      type: "INCREASE_PAGE",
    });
  }

  function handleDecrease() {
    fetchPokemons(pageSize, page - 1);
    dispatch({
      type: "DECREASE_PAGE",
    });
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
