import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import VerticalSidebar from '../Sidebar/VerticalSidebar';
import './Admin.css'

const MakeAdmin = () => {
  const { makeAdmin } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const email = {
      email: data.email
    }

    fetch('https://whispering-caverns-93848.herokuapp.com/addAdmin', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email)
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        data && alert('Uploaded to database')
      })


  }



  return (
    <>
      <div className="form-area" >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email" class="form-label m-0 mb-0">Email</label>
            <input type="email" name="email" class="form-control" id="email" placeholder="jon@gmail.com" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
          </div>
          <button type="submit" class=" btn btn-brand ms-0" > Submit</button>
        </form>
      </div>
    </>
  );
};

export default MakeAdmin;