import classes from './Signin.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../Redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import { MyCheckbox, MyTextInput } from '../Common/Helpers/form_helper';

const LoginValidation = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required(),
  password: Yup
    .string()
    .min(8)
    .max(16)
    // .matches(/^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    // "Password must contain at least one uppercase, one number and one special case character")
    .required(),
})

const SigninForm = (props) => {
  return (

    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      validationSchema={LoginValidation}
      onSubmit={(values, { setSubmitting, setStatus }) => (
        props.login(values.email, values.password, values.rememberMe, setStatus),
        setSubmitting = false
      )}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <MyTextInput
             name="email"
             type="email"
             placeholder="email"
           />
           
           <MyTextInput
             name="password"
             type="password"
             placeholder="password"
           />
          
          <MyCheckbox name="rememberMe">
            Remember me
          </MyCheckbox>
          
          <div>{status}</div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>

        </Form>
      )}
    </Formik>
  );
}

const Signin = ({ isAuth, login }) => {
  if (isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <div>
      <h1>Sign In</h1>
      <SigninForm login={login} />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { login })(Signin);