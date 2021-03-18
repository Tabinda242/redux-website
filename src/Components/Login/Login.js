import React, { useState , useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { useHistory } from 'react-router';
// import { connect } from 'react-redux';


const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    // const [LoggedIn, setLoggedIn] = useState(false);

    const HandleChange = (e) => {
        setLogin(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    const history = useHistory(); 

    const HandleSubmit = (event) => {
                event.preventDefault();
                let loggedIn = false
                
                localStorage.setItem('document', JSON.stringify(login));

                let email = login.email;
                if (email.charAt(email.length - 4) !== ".") {
                    alert("**Invalid . position")
                }
                let pswd = login.password;
                if (!Number(pswd)) {
                    alert("Your password must be a number");
                }
                else if (pswd.length < 6) {
                    alert("Password must be at least 6 characters")
                }
                else if (  pswd.length > 15) {
                    alert("Please fill atleast 15 characters")
                }
                else 
                alert("you are logged In")
                  history.push('/')
                  
                {setLogin({
                    email: "",
                    password: "",
                })}
            }
            // React Life Cycle
            useEffect  (() => {
                let documentData = JSON.parse(localStorage.getItem('document'));
        
                // if (localStorage.getItem('document')) {
                //     setLogin({
                //         email: documentData.email,
                //         password: documentData.password,
                //     })
                // } 
                if (documentData) {
                    setLogin({
                        email: '',
                        password: '',
                    })
                }
            }, [])

 

    return (
        <div>
            <Form className="login_container" onSubmit={HandleSubmit}>
                <h2>Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={login.email} onChange={HandleChange}  name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={login.password} onChange={HandleChange} name="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit" className="Login_submit">
                    Login
                </Button>
                {/* <Form.Text>
                           <Link to="/Signup" className="form-text">Create an account</Link>
                    </Form.Text> */}
            </Form>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//       userLogin : state.form.userLogin,
//     };
//   };

export default Login;