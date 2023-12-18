import styles from "./Pokemon.module.css";
import { useDispatch, useSelector } from "react-redux";
export function Pokemon({ name, id }) {
  const dispatch = useDispatch();
  const caught = useSelector((state) => state.caughtPokemonsIds);

  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    id +
    ".png";
  function handleClick(id) {
    dispatch({
      type: "CAUGHT_TOOGLE",
      id,
    });
  }
  const style = {
    backgroundColor: caught.includes(id) ? "red" : "green",
  };

  return (
    <div className={styles.colorWrap} style={style}>
      <h2 className={styles.name}>{name}</h2>
      <img className={styles.img} src={url} alt="" />
      <button className={styles.button} onClick={() => handleClick(id)}>
        {caught.includes(id) ? "отпустить" : "поймать"}
      </button>
    </div>
  );
}
