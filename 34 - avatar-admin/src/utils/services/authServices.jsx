import axiosInstance from '../axiosInstance/axiosInstance'
import toast from 'react-hot-toast'

const LoginApi = async (payload) => {
  try {
    const responce = await axiosInstance.post(`/login`, payload)
    return responce.data
  } catch (error) {
    toast.error(error.response.data.message)
  }
}

const RequestPasswordResetApi = async (payload) => {
  try {
    const responce = await axiosInstance.post(`/request-password-reset`, payload)
    return responce.data
  } catch (error) {
    toast.error(error.response.data.message)
   
  }
}
const ResetPasswordApi = async (payload) => {
  try {
    const responce = await axiosInstance.post(`/reset-password`, payload)
    return responce.data
  } catch (error) {
    toast.error(error.response.data.message)
  }
}

const addcommission = async(payload)=>{
  console.log(payload);
  try{
      const response = await axiosInstance.post('/commision', payload)
     return response.data;
  }catch(error){
    toast.error(error.response.data.message);
  }
}

const getcommission = async()=>{
  try{
     const getdata = await axiosInstance.get('/getcommision');
     return getdata.data;
  }catch(err){
    console.log(err);
  }
}

export default LoginApi

export { RequestPasswordResetApi, ResetPasswordApi ,addcommission,getcommission }
