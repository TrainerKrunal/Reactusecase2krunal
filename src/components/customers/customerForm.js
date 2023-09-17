import { useState, useEffect } from "react"
import {toast} from 'react-toastify';
import Joi from 'joi-browser'
import axios from "axios";


export default function CustomerForm(props) {

    const baseURL = "http://localhost:9009/api/v1/malaysia/";

    const [formData,setNewFormData] = useState({
      id:0,
      name:"",
      accountType:"",
      email:"",
      phone:""
    })

    const [errors,setErrors] = useState('');

   

   
  const schema={
    id:Joi.number(),
    name:Joi.string().required().label("First Name"),
    accountType:Joi.string().required(),
    email:Joi.string().required(),
    phone:Joi.string().required()
   
}

    useEffect(() => {
    
        loadCustomer();
       // if we get new value for props.id it will trigger loadCustomer() again , 
    //if the value is same then it will not

    }, [props.id]);  

    const loadCustomer = async () => {
        if (props.id > 0) {
            //http://localhost:9009/api/v1/malaysia/customers/1
            const apiEndPoint = `${baseURL}/customers/${props.id}`; 
            const result = await axios.get(apiEndPoint);
            setNewFormData(result.data.body);
        }
    }

    const handleChange = (evt)=>{

      //accessing target element's name and value
      const {name,value} = evt.target;
    
      let errorData = {...errors};  //taking clone of errors in state
  
      const errorMessage = validateProperty(evt); //calling validateProperty() to check function
  
      if(errorMessage){   //if errorMessage is not null ex:name
          errorData[name] = errorMessage   //errorData[name]=errorMessage
      }
      else{
          delete errorData[name]  //delete errorData[name]
      }
  
      //copuing the existing formData using ES 6 Spread Operator [...]
      let customerData = {...formData};
  
      //updating current value with the user entered valuve
      customerData[name] = value;
  
      //setting the new value in the formData
      setNewFormData(customerData);
  
      //update errors
      setErrors(errorData);
  
    }
  
    const validateProperty=(event)=>{
      const {name,value}= event.target;
      const obj = {[name]:value};  // obj {firstName : 'Krunal' }
      const subSchema = {[name]:schema[name]};
      const result = Joi.validate(obj,subSchema);
      //console.log(result);
      const {error} = result;
      return error ? error.details[0].message : null
    }
  
   
    const validate = () => {
  
      const result = Joi.validate(formData,schema,{abortEarly:false});
      console.log(formData);
      if(!result.error){
          return null
      }
      else{
          const errorData = {};
          for (let item of result.error.details){
              errorData[item.path[0]] = item.message;
          }
          setErrors(errorData);
          return errorData;
      }
   

    }

    const saveCustomer = async ()=>{
       
        if (formData.id === 0) {
          const apiEndPoint = `${baseURL}/customers`
        
          
          const response = await axios.post(apiEndPoint, formData);
          if (response.data.status === 201) {
              toast.success("Customer Added Successfully");
              clear();
          }
      }
      else {
          const apiEndPoint = `${baseURL}/customers/${formData.id}`
          alert(apiEndPoint);
       
          
          const response = await axios.put(apiEndPoint, formData);
          if (response.data.status === 200) {
              toast.success("Customer Updated Successfully");
              clear();
          }
      }
      const customer = {...formData};   // Swee Hong
      props.addCustomer(customer);    // function addNewCustomer(customer){}
    }
  
    const handleSubmit = (event)=>{
      event.preventDefault();  // going to prevent default behaviour of the event and element
      const errors = validate();
      console.log(errors);
      if(!errors){
          saveCustomer();
      }
      else{
          toast.error("Please fill valid details");
      }
     
    }

    const clearForm = (event) => {
        event.preventDefault();
        setNewFormData({
        name:"",
        accountType:"",
        email:"",
        phone:""
        });
    }

    const clear = () => {
      setNewFormData({
      name:"",
      accountType:"",
      email:"",
      phone:""
      });
    }

    return (
      <div>
          <p className="lead">Add/Update Customer</p>
          <hr />
          <form className="ui form">
              <div className="form-group">
                  <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={(event)=>handleChange(event)}
                  />
                  {
                      errors.name &&
                      <div className="alert alert-danger">{errors.name}</div>
                  }
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      name="accountType"
                      className="form-control"
                      placeholder="Enter Account Type"
                      value={formData.accountType}
                      onChange={(event)=>handleChange(event)}
                  />
                  {
                      errors.accountType &&
                      <div className="alert alert-danger">{errors.accountType}</div>
                  }
              </div>


              <div className="form-group">
                  <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={(event)=>handleChange(event)}
                  />
                  {
                      errors.email &&
                      <div className="alert alert-danger">{errors.email}</div>
                  }
              </div>
              <div className="form-group">
                  <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone"
                      value={formData.phone}
                      onChange={(event)=>handleChange(event)}
                  />
                  {
                      errors.phone &&
                      <div className="alert alert-danger">{errors.phone}</div>
                  }
              </div>
              <button className="btn btn-primary btn-sm m-2"
                  onClick={(event) => handleSubmit(event)}>
                  Save / Update
              </button>
              <button className="btn btn-warning btn-sm m-2"
                  onClick={clearForm}>
                  Clear
              </button>
          </form>
      </div>
  )
                }