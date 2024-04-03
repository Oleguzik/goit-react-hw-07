import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {
  const allContacts = useSelector(selectFilteredContacts);
  // console.dir(allContacts);
  // const search = useSelector(selectNameFilter);
  // const contacts =
  //   search.trim() === ""
  //     ? allContacts.slice()
  //     : allContacts.filter((contact) =>
  //         contact.name.toLowerCase().includes(search.toLowerCase())
  //       );

  return (
    <ul className={css.grid}>
      {allContacts.map((contact) => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
