import { useSelector, useDispatch } from "react-redux";

export function Pagination() {
  const page = useSelector((state) => state);
  const dispatch = useDispatch();
  function handIncrement() {
    dispatch({
      type: "CHANGE_PAGE",
      pageValue: value,
    });
  }
  return (
    <div>
      <button onclick={handleIncrement}>назад</button>
      <button onclick={handleDecrement}>вперед</button>
    </div>
  );
}
