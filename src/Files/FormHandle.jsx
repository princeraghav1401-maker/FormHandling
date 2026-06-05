import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./FormHandle.css";

const FormHandle = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "https://backend-api-formhandling-production.up.railway.app/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password,
                    }),
                }
            );

            const result = await response.text();

            if (response.ok) {
                toast.success(result);

                reset();

                setTimeout(() => {
                    navigate("/home");
                }, 1500);
            } else {
                toast.error(result);
            }
        } catch (error) {
            toast.error("Backend connection failed!");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="logo">🔐</div>

                <h1>Welcome Back</h1>
                <p>Login to access your account</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="inputBox">
                        <input
                            type="text"
                            placeholder="Full Name"
                            {...register("name", {
                                required: "Name is required"
                            })}
                        />
                        {errors.name && (
                            <span className="error">
                                {errors.name.message}
                            </span>
                        )}
                    </div>

                    <div className="inputBox">
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid Email"
                                }
                            })}
                        />
                        {errors.email && (
                            <span className="error">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="inputBox">
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters"
                                }
                            })}
                        />
                        {errors.password && (
                            <span className="error">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <button type="submit" className="btn">
                        Login
                    </button>


                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <button
                        type="button"
                        className="signupBtn"
                        onClick={() => navigate("/signup")}
                    >
                        Create New Account
                    </button>

                </form>
            </div>
        </div>
    );
};

export default FormHandle;