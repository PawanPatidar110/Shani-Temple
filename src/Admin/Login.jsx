import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        // Add your login API call here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-black bg-opacity-60 text-white rounded-xl shadow-lg p-8 w-full max-w-sm"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-purple-300">Login</h2>

                {/* Username */}
                <div className="mb-4">
                    <label className="block text-purple-200 mb-1" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        {...register('username', { required: 'Username is required' })}
                        className="w-full px-3 py-2 bg-gray-800 border border-purple-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.username && (
                        <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-purple-200 mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        className="w-full px-3 py-2 bg-gray-800 border border-purple-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-purple-200 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })}
                        className="w-full px-3 py-2 bg-gray-800 border border-purple-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.password && (
                        <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <Link to={'/dashboard'}>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
                    >
                        Login
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
