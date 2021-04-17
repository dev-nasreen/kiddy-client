import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import VerticalSidebar from '../Sidebar/VerticalSidebar';

const AddServices = () => {
    const [imageUrl, setImageUrl] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = {
            serviceName:data.name,
            price:data.price,
            description:data.description,
            imageUrl:imageUrl
        }

        fetch('http://localhost:5000/addService',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(serviceData)
        })
        .then(res=>res.json())
        .then(data => {
            //console.log(data)
           data && alert('Uploaded to database')
        })
    };

    //console.log(watch());

const handleImgUrl = (event) =>{
    const imageData = new FormData();
     imageData.set('key', 'f8abae8e21b7331f6bd788466b3eb5a1');
     imageData.append('image', event.target.files[0])

     axios.post('https://api.imgbb.com/1/upload',imageData)
     .then(res =>{
         if(res){
            setImageUrl(res.data.data.display_url) 
         }
         console.log(res.data.data.display_url)
     })
     .catch(err => console.log(err))
}
    return (
        <section style={{ backgroundColor: '#ededed', padding:'100px 0' }}>
        <div className="container">
            <div className="row">
                <VerticalSidebar></VerticalSidebar>
                <div className="col-md-8 mTop">
                <div className="service-form ">
                <h5 className="text-brand">Add a Service</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input type="text" name="name" class="form-control"  placeholder="Service name" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="text" name="price" class="form-control"  placeholder="Price" {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="text" name="description" class="form-control"  placeholder="Service Detail" {...register("description", { required: true })} />
                        {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="file" name="image" class="form-control"  placeholder="Upload Service Image" onChange={handleImgUrl} />
                    </div>
                    <div className="mb-3">
                        <input type="Submit" name="btn" className="btn btn-primary" value="Add Service" />
                    </div>
                </form>
        </div>
                </div>
            </div>
        </div>
        </section>
        
       
    );
};

export default AddServices;