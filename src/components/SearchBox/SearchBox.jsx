import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../../redux/filtersSlice";

function SearchBox({ children }) {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const id = useId();

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div className={css.box}>
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        name="search"
        id={id}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
