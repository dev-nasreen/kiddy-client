import React from 'react';
import { useForm } from "react-hook-form";
import VerticalSidebar from '../Sidebar/VerticalSidebar';
import './Admin.css'

const MakeAdmin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const email = {
          email: data.email
        }

        fetch('http://localhost:5000/addAdmin', {
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
    <section style={{ backgroundColor: '#ededed', padding: '100px 0' }}>
      <div className="container">
        <div className="row">
          <VerticalSidebar></VerticalSidebar>
          <div className="col-md-8 mTop">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;