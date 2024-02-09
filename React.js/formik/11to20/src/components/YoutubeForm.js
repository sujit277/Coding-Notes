import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./YoutubeForm.css";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("Form Values", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const YoutubeForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="name"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <ErrorMessage name="name" component={TextError} />

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <ErrorMessage name="email">
                {(errorMessage) => <div className="error">{errorMessage}</div>}
              </ErrorMessage>

              <div className="mb-3">
                <label htmlFor="channel" className="form-label">
                  Channel
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="channel"
                  name="channel"
                />
              </div>
              <ErrorMessage name="channel" component={TextError} />

              <div className="mb-3">
                <label htmlFor="comments" className="form-label">
                  Comments
                </label>
                <Field
                  as="textarea"
                  className="form-control"
                  id="comments"
                  name="comments"
                />
              </div>
              <ErrorMessage name="comments" />

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Field className="form-control" id="address" name="address">
                  {(props) => {
                    const { field, form, meta } = props;
                    // console.log("Render Props", props);
                    return (
                      <div>
                        <input id="address" {...field}></input>
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>
              <ErrorMessage name="address" />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default YoutubeForm;
