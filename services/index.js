import axios from 'axios';


export async function getTq() {
  const { data } = await axios.get(`https://www.tianqiapi.com/api/?version=v1`);
  return data;
}
