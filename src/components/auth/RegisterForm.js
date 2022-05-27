// import React, {useRef, useState, useEffect } from "react";
// import { reduxForm, Field, Form } from "redux-form";
// // import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FormTitle } from "../formTitle";
// import { FormInput, FormButton } from "../formFields";
// import TextLink from "../textLink";
// import './RegisterForm.css'
// // import axios from '../api/axios'

// // const FULLNAME_REGEX=/^[A-z][A-z0-9-_]{3,23}$/;
// // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// // const COMPANY_REGEX =/^[A-z][A-z0-9-_]{3,23}$/;
// // const EMAIL_REGEX= /^[A-z][A-z0-9-_]{3,23}$/;
// // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



// // const REGISTER_URL = '/register';

// const RegisterForm = () => {
//     const fullNameRef = useRef();
//     const userRef = useRef();
//     const companyRef = useRef();
//     const emailRef = useRef();
//     const pwdRef = useRef();
//     const errRef = useRef();

//     const [fullName, setFullName] = useState('');
//     const [validFullName, setValidFullName] = useState(false);
//     const [fullNameFocus, setFullNameFocus] = useState(false);  

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [companyName, setCompanyName] = useState('');
//     const [validCompanyName, setValidCompanyName] = useState(false);
//     const [companyNameFocus, setCompanyNameFocus] = useState(false); 
    
//     const [email, setEmail] = useState('');
//     const [validEmail, setValidEmail] = useState(false);
//     const [emailFocus, setEmailFocus] = useState(false);  

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);  

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

    // useEffect(() => {
    //     setValidFullName(USER_REGEX.test(fullName));
    // }, [fullName])

    // useEffect(() => {
    //     setValidName(USER_REGEX.test(user));
    // }, [user])

    // useEffect(() => {
    //     setValidEmail(USER_REGEX.test(companyName));
    // }, [companyName])

    // useEffect(() => {
    //     setValidCompanyName(USER_REGEX.test(email));
    // }, [email])

    // useEffect(() => {
    //     setValidPwd(PWD_REGEX.test(pwd));
    // }, [pwd])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    // const handleSubmit = (e) => {

    // }

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //       const v1 = USER_REGEX.test(user);
  //       const v2 = PWD_REGEX.test(pwd);
  //       const v3 = COMPANY_REGEX.test(companyName);
  //       const v4 = EMAIL_REGEX.test(user);
  //       const v5 = FULLNAME_REGEX.test(fullName);

       
  //       if (!v1 || !v2 || !v3 || !v4 || !v5) {
  //           setErrMsg("Invalid Entry");
  //           return;
  //       }
  //     try {
  //         const response = await axios.post(REGISTER_URL,
  //             JSON.stringify({name: fullName ,userName: user, company: companyName, email: email, password: pwd }),
  //             {
  //                 headers: { 'Content-Type': 'application/json' },
  //                 withCredentials: true
  //             }
  //         );
  //         
  //         setSuccess(true);
          
  //         // clear state and controlled inputs
  //         // need value attrib on inputs for this
  //         setFullName('');
  //         setUser('');
  //         setCompanyName('');
  //         setEmail('');
  //         setPwd('');
          
  //     } catch (err) {
  //         if (!err?.response) {
  //             setErrMsg('No Server Response');
  //         } else if (err.response?.status === 409) {
  //             setErrMsg('Username Taken');
  //         } else {
  //             setErrMsg('Registration Failed')
  //         }
  //         errRef.current.focus();
  //     }
  //   }
  
//     return (
//       <>
//       {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//         <div>
//           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

//         <Form className="sign-up-form" method="POST" action="/register">

      
//           <FormTitle className="sign-up-form__title" text="New User" />
//           <Field
//             id='fullName'
//             className="sign-up-form__fullname"
//             name="fullname"
//             type="text"
//             title="Full Name"
//             onChange={(e) => setFullName(e.target.value)}
//             component={FormInput}
//             ref={fullNameRef}
//             autoComplete="off"
//             required
//             aria-invalid={validFullName ? "false" : "true"}
//             aria-describedby="uidnote"
//             onFocus={() => setFullNameFocus(true)}
//             onBlur={() => setFullNameFocus(false)}
//           />
//           <p id="uidnote" 
//             className={fullNameFocus && fullName && !validFullName ? "instructions" : "offscreen"}>
//             4 to 24 characters.<br />
//             Must begin with a letter.<br />
//             Letters, numbers, underscores, hyphens allowed.
//           </p>


//           <Field
//             id='user'
//             type="text"
//             id="username"
//             ref={userRef}
//             autoComplete="off"
//             onChange={(e) => setUser(e.target.value)}
//             value={user}
//             required
//             aria-invalid={validName ? "false" : "true"}
//             aria-describedby="uidnote"
//             onFocus={() => setUserFocus(true)}
//             onBlur={() => setUserFocus(false)}
//         />
//         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//             4 to 24 characters.<br />
//             Must begin with a letter.<br />
//             Letters, numbers, underscores, hyphens allowed.
//         </p>

//           <Field
//             id='company'
//             className="sign-up-form__fullname"
//             placeholder="EnterCompany Name"
//             name="company"
//             type="text"
//             title="Company Name"
//             ref={companyRef}
//             autoComplete="off"
//             onChange={(e) => setCompanyName(e.target.value)}
//             component={FormInput}
//             value={companyName}
//             required
//             aria-invalid={validCompanyName ? "false" : "true"}
//             aria-describedby="companynote"
//             onFocus={() => setCompanyNameFocus(true)}
//             onBlur={() => setCompanyNameFocus(false)}
//           />
//             <p id="uidnote" className={companyNameFocus && companyName && !validCompanyName ? "instructions" : "offscreen"}>
//               4 to 24 characters.<br />
//               Must begin with a letter.<br />
//               Letters, numbers, underscores, hyphens allowed.
//           </p>

//           <Field
//             id="email"
//             className="sign-up-form__email"
//             placeholder="Enter Email"
//             name="email"
//             type="email"
//             title="Email"
//             ref={emailRef}
//             autoComplete="off"
//             onChange={(e) => setEmail(e.target.value)}
//             component={FormInput}
//             value={email}
//             required
//             aria-invalid={validEmail ? "false" : "true"}
//             aria-describedby="emailnote"
//             onFocus={() => setEmailFocus(true)}
//             onBlur={() => setEmailFocus(false)}

//           />
//           <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
//               4 to 24 characters.<br />
//               Must begin with a letter.<br />
//               Letters, numbers, underscores, hyphens allowed.
//           </p>

//           <Field
//             id="password"
//             className="sign-up-form__password"
//             name="password"
//             type="password"
//             title="Password"
//             ref={pwdRef}
//             autoComplete="off"
//             onChange={(e) => setPwd(e.target.value)}
//             component={FormInput}
//             value={pwd}
//             required
//             aria-invalid={validPwd ? "false" : "true"}
//             aria-describedby="pwdnote"
//             onFocus={() => setPwdFocus(true)}
//             onBlur={() => setPwdFocus(false)}
//           />
//           <p id="uidnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
//               4 to 24 characters.<br />
//               Must begin with a letter.<br />
//               Letters, numbers, underscores, hyphens allowed.
//           </p>

//           <Field
//             className="sign-up-form__create-account"
//             name="createaccount"
//             type="submit"
//             title="Create Account"
//             component={FormButton}
//           />
//           <div className='sign-up-form__text-links'>
//               <TextLink to='/signin' text='Already Registered? Login'/>
//           </div>
//         </Form>
//       </div>
//     )}
//   </>
//   );
// }

// export default reduxForm({
//   form: 'register'
// })(RegisterForm)