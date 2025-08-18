import axios from "axios";
import baseURL from "./base_url.service";
async function investProject(payload) {
  let url = baseURL+"save-invester/";
  const response = await axios.post(url, payload);
  return response.data;
}
const commonService = {
  investProject
};
export default commonService;