import styles from "./Pokemon.module.css";
import { useSelector } from "react-redux";

export function Counter() {
  const counter = useSelector((state) => state.caughtPokemonsIds.length);
  const pageSize = useSelector((state) => state.pagination.pageSize);

  return (
    <div className={styles.counterWrap}>
      <p className={styles.pCount}>поймано покемонов</p>
      <h1 className={styles.count}>
        {counter}/{pageSize}
      </h1>
    </div>
  );
}
