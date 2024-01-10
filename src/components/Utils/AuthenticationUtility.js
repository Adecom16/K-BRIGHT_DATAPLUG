// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthHeader, useSignOut, useAuthUser } from 'react-auth-kit';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../Features/AccountSlice'; // Adjust the import path based on your actual setup
// export default function AuthenticationUtility() {
//   const navigate = useNavigate();
//   // const API_URL = "http://127.0.0.1:8000/api/v1/";
//   const API_URL = "https://musicanny-api.rinvest.com.ng/api/v1";
//   const authHeader = useAuthHeader();
//   const auth = useAuthUser;
//   // console.log(auth);

//   const signOut = useSignOut();
//   const dispatch = useDispatch();
//   // const me = useSelector(user); // Use your user selector https://musicanny-api.rinvest.com.ng
//   const [profile, setProfile] = useState(); // Local state for profile
//   const [musicanny, setMusicanny] = useState({
//     artiste_monitization_fee:0,
//     artiste_amount_per_music:0,
//     company_name:'',
//     max_withdraw_amount:0,
//     min_withdraw_amount:0,
//     number_of_streaming_per_day:0,
//     streamer_amount_per_music:0
//   }); // Local state for profile
//   const http = axios.create({
//     baseURL: API_URL,
//     headers: {
//       "Content-type": "application/json",
//       "Accept": "application/json",
//       "Authorization": `${authHeader()}`,
//       'we_no_dey_play_here':'KOADIT_NAIJA_LOADED_MUSIC_CANNY',
//       'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, PUT, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',

//     }
    
//   });

//   // http.interceptors.response.use(
//   //   (response) => response,
//   //   (error) => {
//   //     if (error.response && error.response.status === 401) {
//   //       signOut();
//   //       // navigate('/');
//   //       window.location.href ="/";
        
//   //     }
//   //     return Promise.reject(error);
//   //   }
//   // );

//   // Card number 4187427415564246 
//   // CVV 828
//   // Expiry 09/32
  

  

//   const fetchUserProfile = async () => {
//     if(auth !=null){
//     try {
//       const response = await http.get('/user/profile');
//       if (response.status === 200) {
//         const data = response.data.data;


//         setProfile(data); 
        
//         // Set profile in local state
//         dispatch(setUser(data)); // Dispatch to Redux
//       }
//     } catch (error) {
//       //console.error("Error fetching user profile:", error);
//     }
//     }
//   };


//   const [musicanny, setMusicanny] = useState({
//     artiste_monitization_fee:0,
//     artiste_amount_per_music:0,
//     company_name:'',
//     max_withdraw_amount:0,
//     min_withdraw_amount:0,
//     number_of_streaming_per_day:0,
//     streamer_amount_per_music:0
//   });

//   const fetchMusicanny = async () => { 
//     try {
//       const response = await http.get('/musicanny');
//       if (response.status === 200) {

//         const data = response.data.data;
//         // console.log('musicanny data'+data);
//         setMusicanny(data);         
//       }
//     } catch (error) {
//       console.error("Error fetching musicanny:", error);
//     }
//   };


//   useEffect(() => {

//     if(auth !=null){
//     fetchUserProfile(); // Fetch user profile on component mount
//     fetchMusicanny();
//     }
    
//   }, []);


//   return {
//     http,
//     profile,
//     musicanny,
//   };
// }




import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthHeader, useSignOut, useAuthUser } from 'react-auth-kit';
import { useDispatch } from 'react-redux';
import { setUser } from '../Features/AccountSlice'; // Adjust the import path based on your actual setup

export default function AuthenticationUtility() {
  const navigate = useNavigate();
  const API_URL = "http://127.0.0.1:8000/api/v1";

  // const API_URL = "https://musicanny-api.rinvest.com.ng/api/v1";
  const authHeader = useAuthHeader();
  const auth = useAuthUser();

  const signOut = useSignOut();
  

  const dispatch = useDispatch();
  // const me = useSelector(user); // Use your user selector https://musicanny-api.rinvest.com.ng

  const [profile, setProfile] = useState(); // Local state for profile
  const [musicanny, setMusicanny] = useState({
    artiste_monitization_fee:0,
    artiste_amount_per_music:0,
    company_name:'',
    max_withdraw_amount:0,
    min_withdraw_amount:0,
    number_of_streaming_per_day:0,
    streamer_amount_per_music:0
  });
  


  const http = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      "Authorization": `${authHeader()}`,
      'we_no_dey_play_here':'KOADIT_NAIJA_LOADED_MUSIC_CANNY',
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
    if(auth() !=null){
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


    const fetchMusicanny = async () => { 
    try {
      const response = await http.get('/musicanny');
      if (response.status === 200) {

        const data = response.data.data;
        // console.log('musicanny data'+data);
        setMusicanny(data);         
      }
    } catch (error) {
      console.error("Error fetching musicanny:", error);
    }
  };



  useEffect(() => {
    fetchUserProfile(); // Fetch user profile on component mount
    fetchMusicanny();
    
  }, []);

  return {
    http,
    profile,
    musicanny,
  };
}

