import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ item }) {
  const dispatch = useDispatch();
  const { id, name, number } = item;

  console.log(item);

  function handleClick() {
    dispatch(deleteContact(id));
  }

  return (
    <li className={css.card}>
      <div>
        <ContactData icon={<IoPersonSharp />}>{name}</ContactData>
        <ContactData icon={<FaPhone />}>{number}</ContactData>
      </div>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}

function ContactData({ icon, children }) {
  return (
    <p className={css.info}>
      <span className={css.icon}>{icon}</span>
      <span>{children}</span>
    </p>
  );
}

export default Contact;
