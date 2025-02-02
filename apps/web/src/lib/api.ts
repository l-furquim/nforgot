import axios from "axios"


export const api = axios.create({
  baseURL: "http://ec2-18-191-17-84.us-east-2.compute.amazonaws.com:3333",
  headers: {
    "Content-Type": "application/json",
  },
});