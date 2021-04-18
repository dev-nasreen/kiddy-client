import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import VerticalSidebar from '../Sidebar/VerticalSidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [review, setReview] =useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const history = useHistory();
    const onSubmit = data => {
        const reviewData = {
            serviceName: data.name,
            review: data.description,
            ...loggedInUser
        }
        fetch('https://whispering-caverns-93848.herokuapp.com/addReview', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if(data){
                    alert('Thanks for your valuable review.');
                    history.push('/')
                }
               
            })
    
    }
        console.log(loggedInUser.img);
    return (
        <section style={{ backgroundColor: '#ededed', padding: '100px 0' }}>
            <div className="container">
                <div className="row">
                    <VerticalSidebar></VerticalSidebar>
                    <div className="col-md-8 mTop">
                        <h5 className="text-brand">Add a Review</h5>
                        <div className="form-area" >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="mb-3">
                                            <input type="text" name="name" class="form-control" placeholder="Service name" {...register("name", { required: true })}/>
                                            {errors.name && <span>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                        <textarea name="description" class="form-control" placeholder="Your valuable review please..." id="description" cols="30" rows="7" spellcheck="false"  {...register("description", { required: true })} ></textarea>
                                        {errors.description && <span>This field is required</span>}
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-warning">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;