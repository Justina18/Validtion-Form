import React, { useState } from 'react';
import './FormInput.css'
import { AiOutlineEye } from "react-icons/ai";
import {RiEyeCloseLine} from "react-icons/ri"


function FormInput() {
  const [showPassword, setShowPassword] = useState(false);
  const Visible = () => {
    setShowPassword(prevState => !prevState);
  };


  const [formData, setFormData] = useState({
    Username: "",
    Email:'',
    Password: '',
    ConfirmPassword: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const [toggle, settoggle] = useState(true);

  const handletoggle = () => { settoggle(!toggle) }
  const FiAlignJustif = (<AiOutlineEye fontSize={18} color="black" onClick={handletoggle} />)
  const FaTime = (<div>
      <RiEyeCloseLine fontSize={18} color="black" onClick={handletoggle} />
                </div>)

  return (
    <div className='wrap'>
      <h3>Sign up Form</h3>
      <form onSubmit={handleSubmit} className="Data">
        <label>
          <input
            placeholder='Username'
            className='input'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <hr className='line'/>
        </label>
        <br />
        <label>
          <input
            placeholder='E-mail'
            className='input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <hr className='line' />
        </label>
        <br />
        <label className='pass' >
          <input
            placeholder='Password'
            className='input'
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div onClick={Visible}
            type={showPassword ? "text" : "password"} >
                    {toggle ? FiAlignJustif : FaTime}
          </div>
        </label>
        <hr className='line'/>
        <br/>
        <label className='pass' >
          <input
            placeholder='Confirm Password'
            className='input'
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div onClick={Visible}
            type={showPassword ? "text" : "password"} >
                    {toggle ? FiAlignJustif : FaTime}
          </div>
        </label>
        <hr className='line'/>
        <br />
        <p>Forgot <b className='red'>Password?</b></p>
        <button type="submit" className='button' >Sign Up</button>
      </form>
    </div>
  );
}

export default FormInput;