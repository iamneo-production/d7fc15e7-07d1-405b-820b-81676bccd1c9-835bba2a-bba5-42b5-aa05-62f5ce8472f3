import React, { useState } from 'react';

import { Link,useNavigate } from 'react-router-dom';

import Popup from '../../Utils/Popup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/UserSlice';
// import { useUser } from '../context/UserContext';
const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { login: userLogin } = useUser();


  const [formData, setFormData] = useState({
    email: '',
    password: '',
});

const [isPopupVisible, setPopupVisible] = useState(false);
const [message, setMessage] = useState({
    type: '',
    content: '',
    url: '',
    btn: ''
});

const eventHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const showMessage = (type, content, url = '', btn = 'Got it') => {
    setMessage({ type, content, url, btn });
    setPopupVisible(true);
};

// const handlePaste = (e) => {
//     e.preventDefault();
//     showMessage('error', 'Restricted action');
// };

const handleGotItClick = () => {
    if (message.url) {
        navigate(message.url);
    }
    setPopupVisible(false);
};

const submitLoginForm = (e) => {
    e.preventDefault();
    const formValues = Object.values(formData);
    if (!formValues.some((value) => !value)) {
        showMessage('success', 'Login successful!', '/dash');
       
        dispatch(login(formData.email ));
    } else {
        showMessage('error', 'Please fill in all fields');
    }
};
  
 
 

 

 

    // Basic validation checks
   
    // Perform authentication logic here
    
  

return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <form onSubmit={submitLoginForm}>
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              type="email"
              className="input-field"
              name="email"
              onChange={eventHandler}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Password:</label>
            <input
              type="password"
              className="input-field"
              name="password"
              onChange={eventHandler}
              placeholder="Enter your password"
              required
            />
          </div>
       
         
          <button type="submit" className="login-button">
            Login
          </button>
     
        </form>
        <div className="form-footer">
          Don't have an account? <Link to="/sign">Sign up</Link>
        </div>
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
    </div>
  );
};

export default Login;