import { useState, useContext } from 'react';
import '../login/LoginScreen.css'
import { AppContext } from '../../context';
import accountService from '../../services/accountService';
import viteimg from '../../assets/react.svg'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const { saveUser } = useContext(AppContext);
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
      const { jwToken, userName, email } = response.data
      saveUser({
        isAuthenticated: true,
        user: {
          userName,
          email,
          jwToken
        }
      })
      navigate("/admin");
    }

  }

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center mt-4'>
        <div className='col-lg-4'>
        <div className='card bg-dark'>
          <div className='card-body w-100'>
            <div className='d-flex justify-content-center'>
            <a className="navbar-brand text-top" href="#"><i className="fa-solid fa-clapperboard menu-icon"></i>&nbsp;&nbsp;&nbsp;<span className="font-size logo-color">FLJJ</span><span className="font-size text-white">  MOVIE</span></a>
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
