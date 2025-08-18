import axios from "axios";
import baseURL from "./base_url.service";

async function welfundCalculator(payload) {
  let url = baseURL+"solar-calculator/";
  const response = await axios.post(url, payload);
  return response.data;
}

async function getUtility(pincode) {
  console.log(pincode)
  let url = baseURL+"get-discom/";
  const response = await axios.get(url, {
    params: {
      pincode: pincode
    }
  });
  return response.data;
}


const calcService = {
    welfundCalculator,
    getUtility,
};

export default calcService;
