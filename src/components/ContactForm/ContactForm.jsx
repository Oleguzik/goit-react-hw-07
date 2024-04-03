import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
// import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const phoneFormat = /^[0-9]{3}[ \\-][0-9]{3}[ \\-][0-9]{4}$/;

function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .matches(phoneFormat, "Phone number format is 000-000-0000")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.inputArea}>
        <InputForm id={nameId} type="text" name="name">
          Name
        </InputForm>
        <InputForm id={numberId} type="text" name="number">
          Number
        </InputForm>
        <div>
          <button className={css.btn} type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}

function InputForm({ id, type, name, placeholder = "", children }) {
  return (
    <div className={css.inputField}>
      <label htmlFor={id}>{children}</label>
      <Field
        className={css.input}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      ></Field>
      <span className={css.error}>
        <ErrorMessage as="span" name={name} />
      </span>
    </div>
  );
}

export default ContactForm;
