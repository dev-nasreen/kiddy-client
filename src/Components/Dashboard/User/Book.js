import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
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
            ...loggedInUser,
            package: _id, 
            shipment: shippingData, 
            orderTime: new Date(),
            paymentId
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
                    <Sidebar></Sidebar>
                    <div className="col-md-8 mTop">
                        <div className="service-form ">
                            <h5 className="text-brand">Please Confirm Order By giving the following information.</h5>
                            <div style={{display: shippingData ? 'none':'block' }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input type="text" name="name" class="form-control" defaultValue={service.serviceName} {...register("name", { required: true })} />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="user" class="form-control" defaultValue={loggedInUser.name} {...register("user", { required: true })} />
                                    {errors.user && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" class="form-control" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <input type="text-area" name="address" class="form-control" placeholder="address" {...register("address", { required: true })} />
                                    {errors.address && <span>This field is required</span>}
                                </div>
                                <input name="phone" {...register("phone", { required: true })} placeholder="Your phone no."/>
                                {errors.phone && <span className="error">This phone No. is required</span>}
                                <input type="submit" />
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