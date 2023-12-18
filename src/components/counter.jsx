import styles from "./Pokemon.module.css";
import { useSelector } from "react-redux";
export function Counter() {
  const counter = useSelector((state) => state.caughtPokemonsIds.length);

  return (
    <div className={styles.counterWrap}>
      <p className={styles.pCount}>поймано покемонов</p>
      <h1 className={styles.count}>{counter}/20</h1>
    </div>
  );
}
