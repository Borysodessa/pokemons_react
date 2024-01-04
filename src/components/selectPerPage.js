import { useState } from "react";
import styles from "./Pokemon.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "./PokemonsList";
const possibleQuantitysPokemons = [4, 8, 12, 14, 16, 20, 24, 28];

export function SelectPerPage() {
  const [openQuantity, setOpenQuantity] = useState(false);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const page = useSelector((state) => state.pagination.page);
  const pageSize = useSelector((state) => state.pagination.pageSize);
  function openQuontityList() {
    setOpenQuantity(!openQuantity);
  }
  function changePageSize(e) {
    setOpenQuantity(!openQuantity);
    dispatch({
      type: "CHANGE_PAGE_SIZE",
      etarget: e.target.textContent,
    });
    // dispatch({
    //   type: "LOAD_POKEMONS",
    //   pokemons: pokemons,
    // });
    // dispatch({
    //   type: "UPDATE_PAGESIZE_2",
    //   pokemons: pokemons,
    // });
  }

  return (
    <div>
      <p className={styles.title}></p>
      <button onClick={openQuontityList} className={styles.quantitysPerPage}>
        Количество покемонов
      </button>
      <div>
        <ul className={styles.openQuantity}>
          {openQuantity
            ? possibleQuantitysPokemons.map((quantity, i) => (
                <li
                  key={i}
                  className={styles.quantityPokemons}
                  onClick={(e) => changePageSize(e)}
                >
                  {quantity}
                </li>
              ))
            : openQuantity}
        </ul>
      </div>
    </div>
  );
}
