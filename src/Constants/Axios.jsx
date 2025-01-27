import axios from "axios";
import { baseUrl } from "/src/Constants/Urls";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
