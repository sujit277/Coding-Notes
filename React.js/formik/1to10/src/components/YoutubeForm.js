import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./YoutubeForm.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Values", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });

  console.log("Form Visited", formik.touched);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                {...formik.getFieldProps('name')}
              /*   onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name} */
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div className="errors">{formik.errors.name}</div>
            ) : null}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...formik.getFieldProps('email')}
           /*      onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} */
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="errors">{formik.errors.email}</div>
            ) : null}

            <div className="mb-3">
              <label htmlFor="channel" className="form-label">
                Channel
              </label>
              <input
                type="text"
                className="form-control"
                id="channel"
                {...formik.getFieldProps('email')}
               /*  onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.channel} */
              />
            </div>
            {formik.touched.channel && formik.errors.channel ? (
              <div className="errors">{formik.errors.channel}</div>
            ) : null}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YoutubeForm;
