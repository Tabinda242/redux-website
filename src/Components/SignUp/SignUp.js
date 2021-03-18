import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
// import { useHistory } from 'react-router';
// import { connect , useSelector, useDispatch} from 'react-redux';


const SignUp = () => {
    const [signUp, setSignUp] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPswd: '',
    })

    const history = useHistory(); 

    const HandleChange = (e) => {
        setSignUp(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    const HandleSubmit = (event) => {
                event.preventDefault();
                
                localStorage.setItem('account', JSON.stringify(signUp));
               
                let email = signUp.email;
                
                if (email.charAt(email.length - 4) !== ".") {
                    alert("**Invalid . position")
                }
                let pswd = signUp.password;
                // let cnfrmPswd = signUp.confirmPassword;
                if (!Number(pswd)) {
                    alert("Your password must be a number");
                }
                else if (pswd.length < 6) {
                    alert("Password must be at least 6 characters")
                }
                else if (pswd.length > 15) {
                    alert("Please fill atleast 15 characters")
                }
                // let cnfrmPswd = signUp.confirmPassword;
                //  if (pswd !== cnfrmPswd) {
                //     alert("Password are not same")
                // }
                else
                alert("Your account has been created") 
                history.push('/')
                {setSignUp({
                    userName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })}
            }
            // React Life Cycle
            useEffect  (() => {
                let documentData = JSON.parse(localStorage.getItem('account'));
        
                // if (localStorage.getItem('account')) {
                //     setSignUp({
                //         userName: documentData.userName,
                //         email: documentData.email,
                //         password: documentData.password,
                //         confirmPassword: documentData.confirmPassword
                //     })
                // } 
                if (documentData) {
                    setSignUp({
                        email: '',
                        password: '',
                        // confirmPassword: ''
                    })
                }
            }, [])


    return (
        <div>
            <Form className="login_container" onSubmit={HandleSubmit}>
                <h2>SignUp</h2>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" value={signUp.userName} onChange={HandleChange} name="userName" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={signUp.email} onChange={HandleChange}  name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={signUp.password} onChange={HandleChange} name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={signUp.confirmPswd} onChange={HandleChange} name="confirmPswd" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="Login_submit">
                    SignUp
                </Button>
            </Form>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//       userLogin : state.form.userLogin,
//     };
//   };

export default SignUp;