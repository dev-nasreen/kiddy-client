import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import VerticalSidebar from '../Sidebar/VerticalSidebar';
import ProcessPayment from './ProcessPayment'

const Book = () => {
    const { _id } = useParams();
    const history = useHistory();
    const [service, setService] = useState({});
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [shippingData, setShippingData] = useState(null);
    const onSubmit = data => {
        console.log(data)
        setShippingData(data)
    };
    const handlePaymentSuccess = paymentId =>{
        const shippingDetails ={ 
            ...service,
            ...loggedInUser,
            shipment: shippingData, 
            orderTime: new Date(),
            paymentId,
            status: 'pending'
        }
        fetch('http://localhost:5000/addOrder',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(shippingDetails)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('Your order placed successfully');
                history.push('/')
            }
        })

        }
        
        useEffect(() => {
            fetch(`http://localhost:5000/singleService/${_id}`)
                .then(res => res.json())
                .then(data => setService(data[0]))
        }, [_id])
       
 
    return (
        <section style={{ backgroundColor: '#ededed', height: 'auto', padding:'50px 0' }}>
            <div className="container">
                <div className="row">
                    <VerticalSidebar></VerticalSidebar>
                    <div className="col-md-8 mTop">
                        <div className="service-form ">
                            <h5 className="text-brand mb-5">Please Confirm Order By giving the following information.</h5>
                            <div style={{display: shippingData ? 'none':'block' }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 form-group">
                                <div className="row">
                                    <div className="col-md-4">
                                    <label htmlFor="exampleFormControlInput1" class="form-label m-0 mb-0">Service Name</label>
                                    <input type="text" name="name" class="form-control" id="exampleFormControlInput1" defaultValue={service.serviceName}  />
                                    </div>
                                    <div className="col-md-4">
                                    <label htmlFor="name" class="form-label m-0 mb-0">Price</label>
                                    <input type="text" name="price" class="form-control" defaultValue={service.price}  />
                                    </div>
                                </div>
                                </div>
                                <div className="mb-3 form-group">
                                    <label htmlFor="user" class="form-label m-0 mb-0">User Name</label>
                                    <input type="text" name="user" class="form-control" defaultValue={loggedInUser.name}  />
                                    {errors.user && <span>This field is required</span>}
                                </div>
                                <div className="mb-3 form-group" >
                                <label htmlFor="email" class="form-label m-0 mb-0">Email</label>
                                    <input type="email" name="email" class="form-control" defaultValue={loggedInUser.email} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className="mb-3 form-group">
                                    <label htmlFor="address" class="form-label m-0 mb-0">Address</label>
                                    <input type="text-area" name="address" class="form-control" placeholder="address" {...register("address", { required: true })} />
                                    {errors.address && <span>This field is required</span>}
                                </div>
                                <div className="mb-3 form-group">
                                <label htmlFor="phone" class="form-label m-0" style={{marginBottom:'0'}}>Phone No.</label>
                                <input name="phone" type="number" class="form-control" {...register("phone", { required: true })} placeholder="Your phone no."/>
                                {errors.phone && <span className="error">This phone No. is required</span>}
                                </div>
                                <div className="mb-3 form-group">
                                <input type="submit" class="form-control btn btn-brand" />
                                </div>
                            </form>
                            </div>
                            <div style={{display: shippingData ? 'block':'none' }}>
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;