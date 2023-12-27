import { useState } from "react";
import styles from "./Pokemon.module.css";
import { useDispatch } from "react-redux";
const possibleQuantitysPokemons = [4, 8, 12, 14, 16, 20, 24, 28];

export function SelectPerPage() {
  const [openQuantity, setOpenQuantity] = useState(false);
  const dispatch = useDispatch();

  function openQuontityList() {
    setOpenQuantity(!openQuantity);
  }

  function changePageSize(e) {
    setOpenQuantity(!openQuantity);
    dispatch({
      type: "CHANGE_PAGE_SIZE",
      etarget: e.target.textContent,
    });
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
