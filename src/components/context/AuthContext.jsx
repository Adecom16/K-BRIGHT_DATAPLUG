import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();

     /**
      * --------------------
      * User Route
      * --------------------
      */

     useEffect(() => {
          const fetchUserProfile = async () => {
               const storedToken = JSON.parse(
                    localStorage.getItem('kbrightdataplug')
               );

               if (storedToken) {
                    try {
                         const response = await fetch(
                              'https://wirelesspay.ng/api/v1/user/get-profile',
                              {
                                   headers: {
                                        Authorization: `Bearer ${storedToken}`,
                                        'Content-Type': 'application/json',
                                   },
                              }
                         );

                         const userData = await response.json();

                         setUser(userData);
                    } catch (error) {
                         console.error('Error fetching user profile:', error);
                         setLoading(false);
                    }
               } else {
                    setLoading(false);
                    navigate('/login');
               }
          };

          fetchUserProfile();
     }, [navigate]);

     /**
      * --------------------
      * Signup Route
      * --------------------
      */
     const signup = async (signupData) => {
          try {
               setLoading(true);

               const response = await fetch(
                    'https://wirelesspay.ng/api/v1/register_without_bvn',
                    {
                         method: 'POST',
                         body: JSON.stringify(signupData),
                         headers: {
                              'Content-Type': 'application/json',
                         },
                    }
               );

               const data = await response.json();

               if (data.status === 'failed') {
                    alert(data.error);
                    return setLoading(false);
               }

               setLoading(false);
               navigate('login');
          } catch (err) {
               console.log(err);
          }
     };

     /**
      * --------------------
      * Login Route
      * --------------------
      */
     const login = async (loginData) => {
          try {
               setLoading(true);

               const response = await fetch(
                    'https://wirelesspay.ng/api/v1/login',
                    {
                         method: 'POST',
                         body: JSON.stringify(loginData),
                         headers: {
                              'Content-Type': 'application/json',
                         },
                    }
               );

               const data = await response.json();

               if (data.status === 'failed') {
                    alert(data.error);
                    return setLoading(false);
               }
               // setting token to localstorage
               localStorage.setItem(
                    'kbrightdataplug',
                    JSON.stringify(data.access_token)
               );

               setLoading(false);
               navigate('/dashboard');
          } catch (err) {
               console.log(err);
          }
     };

     return (
          <AuthContext.Provider
               value={{
                    user,
                    signup,
                    loading,
                    login,
               }}
          >
               {children}
          </AuthContext.Provider>
     );
};

// AuthContext.js
// ... (your existing code)

// export const useAuth = () => {
//      const context = useContext(AuthContext);

//      if (!context) {
//           throw new Error('useAuth must be used within an AuthProvider');
//      }

//      return context;
// };
