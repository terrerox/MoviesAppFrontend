import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../login/LoginScreen.css'
import accountService from '../../services/accountService';
import viteimg from '../../assets/react.svg'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const [state,setState] = useState({
    form:{
      "email":"",
      "password":""
    },
    error:false,
    errorMsg:""
  })

  const handleSubmit = (event) =>{
    event.preventDefault();
  }

  const handleInput = (event) =>{
    setState({
      form:{
        ...state.form,
        [event.target.name]:event.target.value
      }
    })
  }

  const handlebutton = async () => {
    const response = await accountService.Auth(state.form);

    console.log(response.data);

    if(response.data.hasError===true){
      setState({
        error:response.data.hasError,
        errorMsg:response.data.error
      })
    }
    else{
      localStorage.setItem("user-name",response.data.firstName)
      localStorage.setItem("user-lastname",response.data.lastName)
      localStorage.setItem("token","Bearer " + response.data.jwToken)
    navigate("/admin");

    }

  }

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center mt-4'>
        <div className='col-lg-4'>
        <div className='card bg-dark'>
          <div className='card-body'>
            <div className='d-flex justify-content-center'>
            <img src={viteimg}/>
            </div>
            {
             state.error === true ? 
            <div class="alert alert-danger mt-3" role="alert">
                {state.errorMsg}
              </div>
              : ""
              }
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                <label className='form-label text-white' for='email'>Email: </label>
                <input className='form-control' type="text" name='email' id='email' onChange={handleInput}/>
                </div>
                <div className='form-group mt-3'>
                <label className='form-label text-white' for='password'>Password: </label>
                <input className='form-control' type="password" name='password' id='password' onChange={handleInput}/>
                </div>
                <button className='btn btn-success bg-custom w-25 mt-4 float-end' type="submit" onClick={handlebutton}>Login</button>
                </form>
          </div>
        </div>
        </div>
      </div>      
    </div>
  )
}
