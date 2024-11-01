import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { addcommission ,getcommission } from '../../utils/services/authServices'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast'


const FormProfile = () => {
  const[commission,setcommission] = useState('');
  const [getcom,setcom] = useState(0);

  const handleFormProfileSubmit = async(e) => {
    e.preventDefault();
    const body = {
      commission: commission
    };
    try{
      let data = await addcommission(body);

      if(data?.isSuccess){
        toast.success(data?.message);
      }
      else{
        toast.error(data?.message);
      }

    }catch(error){
      console.log(error);
    }

  }
  const getdata = async()=>{
    try{
       let data = await  getcommission();
      setcom(data.data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
   getdata();

  },[])
  return (
    <div className="form-profile">
      <Form onSubmit={handleFormProfileSubmit}>
        <Form.Group className="mb-3" controlId="formProfileCommission">
          <Form.Label>Commission</Form.Label>
          <Form.Control value={getcom} name='commission' type="number" placeholder="Enter your commission" onChange={(e)=>setcommission(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  )
}

export default FormProfile
