// Login.js
import { useState } from 'react';
import AuthenticationUtility from '../Utils/AuthenticationUtility';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { useNavigate } from 'react-router';
const Login = () => {
     const [formData, setFormData] = useState({});
     const { loading, login } = useState({});
     const [formErrors, setFormErrors] = useState({});
     const {http} = AuthenticationUtility();
     const signIn = useSignIn();
     const navigate = useNavigate();
     const handleChange = (e) => {
          setFormData((data) => ({
               ...data,
               [e.target.name]: e.target.value,
          }));


     };
     const handleLogin = async (e) => {

          // console.log(formData);
          e.preventDefault();
          //  Validating user inputs
          if (!formData.username) {
               setFormErrors((form) => ({
                    ...form,
                    username: 'Please provide your username',
               }));
          }

          if (!formData.password) {
               setFormErrors((form) => ({
                    ...form,
                    password: 'Please provide your password',
               }));

               return;
          }

          http
      .post("/login", formData)

      .then((res) => {

        // console.log(res)
        const data = res.data;
     //   console.log(data);

       if(signIn({
          auth: {
               token: data.access_token,
               tokenType:data.token_type,
               authState:data.user,
               expiresIn:data.expires_in,
          },
          userState: data.user,
      })){
          // Redirect or do-something
          // console.log("suppose to dashboard");
          navigate("/dashboard");
      }else {
          //Throw error
          setFormErrors(data || {});
          // console.log("is like error dey");
      }
  })

     //    if(signIn(
     //      {
     //          token: data.access_token,
     //          tokenType:data.token_type,
     //          authState:data.user,
     //          expiresIn:data.expires_in,
     //        // refreshToken: data.refresh_at ,                   // Only if you are using refreshToken feature
     //          //refreshTokenExpireIn: res.data.refreshTokenExpireIn     // Only if you are using refreshToken feature
     //      }
     //  ))
     //  {
         

     //      navigate("dashboard");


     //  }else {
     //      //Throw error
     //      setFormErrors(data || {});

     //  }
       
     //  })
      .catch((err) => {
        setFormData(err?.response?.data || {});
     //    setLoading(false)
        
        
        
      });

          //  Validating user inputs
          // if (!formData.username) {
          //      setFormErrors((form) => ({
          //           ...form,
          //           username: 'Please provide your username',
          //      }));
          // }

          // if (!formData.password) {
          //      setFormErrors((form) => ({
          //           ...form,
          //           password: 'Please provide your password',
          //      }));

          //      return;
          // }

          //  then logim user
          // await login(formData);
     };

     return (
          <div className='center'>
               <div className='login-form'>
                    <h1>Login</h1>

                    <div className='form'>
                         {/* {loginError && (
                              <p
                                   style={{ color: 'red' }}
                                   className='error-message'
                              >
                                   {loginError}
                              </p>
                         )} */}
                         <form onSubmit={handleLogin}>
                              <label htmlFor='username'>Username</label>
                              <br />
                              <input
                                   size={43}
                                   type='text'
                                   id='username'
                                   name='username'
                                   onChange={handleChange}
                                   className={
                                        formErrors.username ? 'error' : ''
                                   }
                              />
                              {formErrors.username && (
                                   <p
                                        style={{ color: 'red' }}
                                        className='error-message'
                                   >
                                        {formErrors.username}
                                   </p>
                              )}

                              <label htmlFor='password'>Password</label>
                              <br />
                              <input
                                   size={43}
                                   type='password'
                                   id='password'
                                   name='password'
                                   onChange={handleChange}
                                   className={
                                        formErrors.password ? 'error' : ''
                                   }
                              />
                              {formErrors.password && (
                                   <p
                                        style={{ color: 'red' }}
                                        className='error-message'
                                   >
                                        {formErrors.password}
                                   </p>
                              )}

                              <br />
                              <input
                                   className='button-cta'
                                   type='submit'
                                   value={loading ? 'Logging in...' : 'Login'}
                                   disabled={loading}
                              />
                              <br />
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Login;
