import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const FormSevenCheckBox = () => {
  // Validation schema
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("User Name required"),
    userEmail: Yup.string().email().required("Email required"),
    ddlOne: Yup.object().shape({
      label: Yup.string().required("City Name required"),
      value: Yup.string().required("City Name required"),
    }),
  });
  const initialValues = {
    userName: "",
    userEmail: "",
    expand: "",
  };
  return (
    <div>
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(`values`, values);
            resetForm();
          }}
        >
          {({ values, setFieldValue, isValid }) => (
            <>
              <Form>
                <div className="container">
                  <div className="form-group row py-5">
                    <div className="col-lg-4">
                      <label>User Name</label>
                      <Field
                        className="form-control"
                        name="userName"
                        placeholder="User Name"
                        value={values?.userName}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="userName" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <label>Email</label>
                      <Field
                        className="form-control"
                        name="userEmail"
                        placeholder="Email"
                        value={values?.userEmail}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="userEmail" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <label htmlFor="">Expand</label>
                      <Field
                        className="checkbox ml-3 mt-4"
                        type="checkbox"
                        name="expand"
                        placeholder="Email"
                        value={values?.expand}
                        checked={values?.expand}
                        onChange={(e) =>
                          setFieldValue("expand", e.target.checked)
                        }
                      />
                    </div>
                    {values.expand ? (
                      <div className="col-lg-4 py-5">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Accusamus, rerum fuga. Porro quod ad inventore
                          dolore iusto incidunt? Possimus, reprehenderit?
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={!isValid}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </>
    </div>
  );
};

export default FormSevenCheckBox;
