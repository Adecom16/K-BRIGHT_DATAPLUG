import { useState } from 'react';
// import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Register = () => {
     const [formData, setFormData] = useState({});
     const { loading, signup } = useAuth();

     const [formErrors, setFormErrors] = useState({});

     const handleChange = (e) => {
          setFormData((data) => ({
               ...data,
               [e.target.name]: e.target.value,
          }));
     };

     const handleRegister = async (e) => {
          e.preventDefault();

          //  Validating user inputs
          if (!formData.name) {
               setFormErrors((form) => ({
                    ...form,
                    name: 'Please provide your name',
               }));
          }

          if (!formData.email) {
               setFormErrors((form) => ({
                    ...form,
                    email: 'Please provide your email',
               }));
               return;
          }

          //  then signup user
          await signup(formData);
     };

     return (
          <div className='center'>
               <div className='login-form'>
                    <h1>Register</h1>

                    <div className='form'>
                         <form onSubmit={handleRegister}>
                              <label htmlFor='name'>Name</label>
                              <br />
                              <input
                                   size={43}
                                   type='text'
                                   id='name'
                                   name='name'
                                   // value={formData.name}
                                   onChange={handleChange}
                                   className={formErrors.name ? 'error' : ''}
                              />
                              {formErrors.name && (
                                   <span
                                        className='error-message'
                                        style={{
                                             color: 'red',
                                             fontSize: '14px',
                                        }}
                                   >
                                        {formErrors.name}
                                   </span>
                              )}

                              <div>
                                   <label htmlFor='email'>Email</label>
                                   <br />
                                   <input
                                        size={43}
                                        type='email'
                                        id='email'
                                        name='email'
                                        //  value={formData.email}
                                        onChange={handleChange}
                                        className={
                                             formErrors.email ? 'error' : ''
                                        }
                                   />
                                   {formErrors.email && (
                                        <span
                                             className='error-message'
                                             style={{
                                                  color: 'red',
                                                  fontSize: '14px',
                                             }}
                                        >
                                             {formErrors.email}
                                        </span>
                                   )}
                              </div>

                              <label htmlFor='password'>Password</label>
                              <br />
                              <input
                                   size={43}
                                   type='password'
                                   id='password'
                                   name='password'
                                   //  value={formData.password}
                                   onChange={handleChange}
                                   className={
                                        formErrors.password ? 'error' : ''
                                   }
                              />
                              {formErrors.password && (
                                   <p className='error-message'>
                                        {formErrors.password}
                                   </p>
                              )}

                              <label htmlFor='confirmPassword'>
                                   Confirm Password
                              </label>
                              <br />
                              <input
                                   size={43}
                                   type='password'
                                   id='confirmPassword'
                                   name='confirmPassword'
                                   //  value={formData.confirmPassword}
                                   onChange={handleChange}
                                   className={
                                        formErrors.confirmPassword
                                             ? 'error'
                                             : ''
                                   }
                              />
                              {formErrors.confirmPassword && (
                                   <p className='error-message'>
                                        {formErrors.confirmPassword}
                                   </p>
                              )}

                              <label htmlFor='referral'>Referral Code</label>
                              <br />
                              <input
                                   size={43}
                                   type='text'
                                   id='referral'
                                   name='referral'
                                   //  value={formData.referral}
                                   onChange={handleChange}
                                   className={
                                        formErrors.referral ? 'error' : ''
                                   }
                              />
                              {formErrors.referral && (
                                   <p className='error-message'>
                                        {formErrors.referral}
                                   </p>
                              )}

                              <label htmlFor='username'>Username</label>
                              <br />
                              <input
                                   size={43}
                                   type='text'
                                   id='username'
                                   name='username'
                                   //  value={formData.username}
                                   onChange={handleChange}
                                   className={
                                        formErrors.username ? 'error' : ''
                                   }
                              />
                              {formErrors.username && (
                                   <p className='error-message'>
                                        {formErrors.username}
                                   </p>
                              )}

                              <label htmlFor='gender'>Gender</label>
                              <br />
                              <select
                                   id='gender'
                                   name='gender'
                                   //  value={formData.gender}
                                   onChange={handleChange}
                                   className={formErrors.gender ? 'error' : ''}
                              >
                                   <option value='male'>Male</option>
                                   <option value='female'>Female</option>
                              </select>
                              {formErrors.gender && (
                                   <p className='error-message'>
                                        {formErrors.gender}
                                   </p>
                              )}

                              <br />
                              <label htmlFor='nin'>
                                   National Identity Number
                              </label>
                              <br />
                              <input
                                   size={43}
                                   type='text'
                                   id='nin'
                                   name='nin'
                                   //  value={formData.nin}
                                   onChange={handleChange}
                                   className={formErrors.nin ? 'error' : ''}
                              />
                              {formErrors.nin && (
                                   <p className='error-message'>
                                        {formErrors.nin}
                                   </p>
                              )}

                              <label htmlFor='phone'>Phone</label>
                              <br />
                              <input
                                   size={43}
                                   type='text'
                                   id='phone'
                                   name='phone'
                                   //  value={formData.phone}
                                   onChange={handleChange}
                                   className={formErrors.phone ? 'error' : ''}
                              />
                              {formErrors.phone && (
                                   <p className='error-message'>
                                        {formErrors.phone}
                                   </p>
                              )}

                              <br />
                              <button
                                   className='button-cta'
                                   type='submit'
                                   disabled={loading}
                              >
                                   {loading ? 'Registering...' : 'Register'}
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;
