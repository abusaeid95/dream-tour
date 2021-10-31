import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddContent.css'

const AddContent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://frightening-phantom-67062.herokuapp.com/offers', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Added Succesfully')
                    reset()
                }
            })
    }
    return (
        <div className="text-center my-5 py-5 addinput">
           
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                <input {...register("img")} placeholder="Add Image" />
                <br />
                <input className="my-2" {...register("Country")} placeholder="Country Name" />
                <br />
                <input className="my-2" {...register("description")} placeholder="Description" />
                <br />
                <input type="number" {...register("price")} placeholder="Price" />
                <br />
                <input className="my-2" {...register("location")} placeholder="Location" />
                <br />
                <input {...register("time")} placeholder="Estimated Days" />
                <br />
                <input  className="my-2 addbknbtn" type="submit" />
            </form>
        </div>
    );
};

export default AddContent;