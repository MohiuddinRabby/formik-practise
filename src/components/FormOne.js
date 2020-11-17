import React from "react";
import { useFormik } from "formik";

const FormOne = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (formValues) => {
      console.log("values", formValues);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="name"
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          email="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="email"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormOne;
