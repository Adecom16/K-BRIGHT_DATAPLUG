
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuthHeader, useSignOut, useAuthUser } from 'react-auth-kit';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useDispatch } from 'react-redux';
import { setUser } from '../Features/AccountSlice'; // Adjust the import path based on your actual setup

export default function AuthenticationUtility() {
  const navigate = useNavigate();
  // const API_URL = "http://127.0.0.1:8000/api/v1";

  const API_URL = "https://wirelesspay.ng/api/v1";
  const authHeader = useAuthHeader();
  const auth = useAuthUser();

  const signOut = useSignOut();
  

  const dispatch = useDispatch();
  // const me = useSelector(user); // Use your user selector https://musicanny-api.rinvest.com.ng

  const [profile, setProfile] = useState(); // Local state for profile

  


  const http = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      "Authorization": `${authHeader}`,
      'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',


    }
    
  });

  http.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        signOut();

        navigate('/');
        window.localStorage.clear();
      }
      return Promise.reject(error);
    }
  );




  

  const fetchUserProfile = async () => {
    // console.log(auth());
    if(auth !=null){
    try {
      const response = await http.get('/user/profile');
      if (response.status === 200) {
        const data = response.data.data;
        setProfile(data); 
        // Set profile in local state
        dispatch(setUser(data)); // Dispatch to Redux
      }
    } catch (error) {
      //console.error("Error fetching user profile:", error);
    }
    }
  };





  useEffect(() => {
    fetchUserProfile(); // Fetch user profile on component mount
    
  }, []);

  return {
    http,
    profile,
  };
}

