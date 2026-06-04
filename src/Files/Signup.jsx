import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./FormHandle.css";

const Signup = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "http://localhost:8082/api/signup",
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
                    navigate("/");
                }, 1500);

            } else {
                toast.error(result);
            }

        } catch (error) {
            console.error(error);
            toast.error("Backend connection failed!");
        }
    };

    return (
        <div className="container">
            <div className="card">

                <div className="logo">🚀</div>

                <h1>Create Account</h1>
                <p>Join us and start your journey</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="inputBox">
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Enter valid email"
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

                    <div className="inputBox">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                                required: "Confirm your password",
                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && (
                            <span className="error">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>

                    <button type="submit" className="btn">
                        Create Account
                    </button>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <button
                        type="button"
                        className="signupBtn"
                        onClick={() => navigate("/")}
                    >
                        Back To Login
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Signup;