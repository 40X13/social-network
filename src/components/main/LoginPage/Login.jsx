import {Formik, Form, Field, ErrorMessage} from 'formik';

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}
const initialValues = {email: '', password: '', rememberMe: false, captchaText: ''}
//инитал из стора!
const Login = ({loginThunk, captcha}) => (

        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(loginData, {setSubmitting, resetForm, setStatus}) => {
                loginThunk(loginData, setStatus);
                setSubmitting(false);
                resetForm();

            }}
        >
            {({isSubmitting, status}) => (
                <Form>
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component="div"/>
                    <Field type="password" name="password" autoComplete="on"/>
                    <ErrorMessage name="password" component="div"/>
                    <Field type="checkbox" name="rememberMe"/>
                    {captcha &&
                        <div>
                            <Field type="text" name="captchaText"/>
                            <img src={captcha} alt=""/>
                        </div>
                    }
                    <div>
                        {status}
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>

);

export default Login;