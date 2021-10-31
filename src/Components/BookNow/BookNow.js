import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams, useLocation, useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './BookNow.css'

const BookNow = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [offer, serOffer] = useState({});
    const location = useLocation()
    const history = useHistory()

    const redirect_url = location.state?.from || '/';

    useEffect(() => {
        fetch(`https://frightening-phantom-67062.herokuapp.com/booking/${id}`)
            .then(res => res.json())
            .then(data => serOffer(data))
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "pending";
        data.user_email = user.email;
        fetch(`https://frightening-phantom-67062.herokuapp.com/booked/${id}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Added Succesfully')
                    reset()
                    history.push(redirect_url)
                }
            })
    }
    return (
        <div className="text-center py-5 addinput ">

            <form className="booking-contain" onSubmit={handleSubmit(onSubmit)}>
                <input readOnly defaultValue={offer?.Country} className="my-2" {...register("Country")} />
                <br />
                <input readOnly defaultValue={offer?.price} type="number" {...register("price")} />
                <br />
                <input readOnly defaultValue={offer?.location} className="my-2" {...register("location")} />
                <br />
                <input readOnly defaultValue={offer?.time} {...register("time")} />
                <br />
                <input readOnly defaultValue={user?.email} {...register("user_email")} />
                <br />
                <input  {...register("user_name")} type="text" placeholder="Full Name" />
                <br />
                <input  {...register("user_gender")} type="text" placeholder="Gender" />
                <br />
                <input  {...register("user_age")} type="number" placeholder="Age" />
                <br />
                <input  {...register("user_Phone")} type="number" placeholder="Phone number" />
                <br />
                <input  {...register("user_address")} type="text" placeholder="Your Address" />
                <br />
                <input className="my-2" type="submit" />
            </form>
        </div>
    );
};

export default BookNow;