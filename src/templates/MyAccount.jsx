import React from 'react';
import '../styles/Myaccount.scss';
import Yardsale from '@logos/logo_yard_sale.svg';

const MyAccount = () => {
	return (

		<div className="login-MyAccount">
        <div className="form-MyAccount">
          <img src={Yardsale} alt="logo" className="logo-MyAccount"/>
          
          <h1 className="title-MyAccount"> My account </h1>  

          <form action="/" className="form-MyAccount">
            <label for="email" className="label-MyAccount">Name</label>
            <p className="value-Myaccount"> Miguel angel Muñoz </p>

            <label for="password" className="label-MyAccount">Email adress</label>
            <p className="value-Myaccount"> Thewintherdmc@gmail.com</p>

            <label for="password" className="label-MyAccount">Password</label>
            <p className="value-Myaccount">*********</p>
            <input type="submit" value="Edit" className="secondary-button-MyAccount login-button-MyAccount"/>
           
          </form>
    
          
        </div>
      </div>
	);
}

export default MyAccount;