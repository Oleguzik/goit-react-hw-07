import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectIsLoading } from "../../redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.form}>
        <h1>PhoneBook</h1>
        <ContactForm />
        <SearchBox>Find contacts by name</SearchBox>
        {isLoading && !error && <b>Is loading...</b>}
        {error && <b>Something is wrong. Please try again later.</b>}
      </div>
      <ContactList />
    </>
  );
}

export default App;
