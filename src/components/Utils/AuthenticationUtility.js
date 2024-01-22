import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/AccountSlice";

export default function AuthenticationUtility() {
  const navigate = useNavigate();
  const API_URL = "https://wirelesspay.ng/api/v1";
  const authHeader = useAuthHeader();
  const auth = useAuthUser();
  const signOut = useSignOut();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState();

  const http = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `${authHeader}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });

  http.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        signOut();
        navigate("/");
        window.localStorage.clear();
      }
      return Promise.reject(error);
    }
  );

  const fetchUserProfile = async () => {
    if (auth != null) {
      try {
        const response = await http.get("/user/get-profile");
        if (response.status === 200) {
          const data = response.data.data;
          setProfile(data);
          dispatch(setUser(data));
        }
      } catch (error) {
        // Handle error
      }
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return {
    http,
    profile,
  };
}
