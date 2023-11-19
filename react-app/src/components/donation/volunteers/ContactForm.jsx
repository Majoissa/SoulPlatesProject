import InputFiled from "../General-Components/InputFiled";
import Button from "../General-Components/Button";
import "./ContactForm.css"
import {useFormik} from "formik";
import * as Yup from "yup"

function ContactForm() {

    const formik = useFormik({
        initialValues: {
            userFirstName: "",
            userLastName: "",
            PhoneNumber: "",
            Age: "",
            userEmail: "",
            userMessage: "",
        },

        validationSchema: Yup.object({
            userFirstName: Yup.string()
                .max(20, "Must be 20 character or less")
                .required(" * Name is required"),
            userLastName: Yup.string()
                .max(20, "Must be 20 character or less")
                .required(" * Last Name is Required"),
            Age: Yup.number().min(18).positive()
                .max(70, "Must be 20 character or less")
                .required(" * Age Name is Required"),
            userEmail: Yup.string()
                .email('Must be a valid email').max(255)
                .required(" * Email is required"),
            PhoneNumber: Yup.string()
                .required()
                .matches(/^[0-9]+$/, "must be at leas 8 Character")
                .min(8)
                .max(12, "Invalid Phone Number!"),

            userMessage: Yup.string()
                .max(600, "Must be 600 character or less")
                .required(" * Message is required"),
        }),

        onSubmit: async (values) => {
            try {
                const response = await fetch("http://localhost:5550/volunteers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                alert("Form created successfully")
                return await response.json()
            } catch (error) {
                console.error(error);
                alert('request could not created');
            }
        }

    })


    return (
        <div className="form-box">
            <form className="contact-form-control" onSubmit={formik.handleSubmit}>
                <div className="form-body">
                    <div className="contact-form-input-group">
                        <label htmlFor="userFirstName">
                            First Name:
                            <InputFiled className="form-control"
                                        id="userFirstName"
                                        name="userFirstName"
                                        type="text"
                                        placeholder="First Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.userFirstName}
                            />
                            {formik.touched.userFirstName && formik.errors.userFirstName ?
                                <p className="error"> {formik.errors.userFirstName} </p> : null}
                        </label>

                        <label htmlFor="userLastName">
                            Last Name:
                            <InputFiled className="form-control"
                                        id="userLastName"
                                        name="userLastName"
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.userLastName}
                            />
                            {formik.touched.userLastName && formik.errors.userLastName ?
                                <p className="error"> {formik.errors.userLastName} </p> : null}
                        </label>
                    </div>

                    <div className="contact-form-input-group">
                        <label htmlFor="Age">
                            Age:
                            <InputFiled className="form-control"
                                        id="Age"
                                        name="Age"
                                        type="number"
                                        placeholder="Age"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Age}
                            />
                            {formik.touched.Age && formik.errors.Age ?
                                <p className="error"> {formik.errors.Age} </p> : null}
                        </label>

                        <label htmlFor="userEmail">
                            Email:
                            <InputFiled className="form-control"
                                        id="userEmail"
                                        name="userEmail"
                                        type="email"
                                        placeholder="Email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.userEmail}
                            />
                            {formik.touched.userEmail && formik.errors.userEmail ?
                                <p className="error"> {formik.errors.userEmail} </p> : null}
                        </label>
                    </div>

                    <div className="contact-form-input-group">
                        <label htmlFor="PhoneNumber">
                            Phone Number:
                            <InputFiled className="form-control"
                                        id="PhoneNumber"
                                        name="PhoneNumber"
                                        type="tel"
                                        placeholder="Phone Number"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.PhoneNumber}
                            />
                            {formik.touched.PhoneNumber && formik.errors.PhoneNumber ?
                                <p className="error"> {formik.errors.PhoneNumber} </p> : null}
                        </label>

                        <label htmlFor="userMessage">
                            Message:
                            <InputFiled className="form-control"
                                        id="userMessage"
                                        name="userMessage"
                                        type="message"
                                        placeholder="Type your Message"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.userMessage}
                            />
                            {formik.touched.userMessage && formik.errors.userMessage ?
                                <p className="error"> {formik.errors.userMessage} </p> : null}
                        </label>
                    </div>
                    <div>
                        <Button type="submit" text='Submit' className="form-control donationsBtn"/>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default ContactForm