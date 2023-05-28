import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { Authcontext } from '../../Providers/Authprovider';

const SignUp = () => {
    const { register, handleSubmit, reset ,formState: { errors } } = useForm();
    const {createUser, updateUserProfile}=useContext(Authcontext)
    const navigate=useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            updateUserProfile(data.name,data.photo)
            .then(()=>{
                alert('user profile updated')
                reset();
                navigate('/')
            })
        })
        .catch(error=>console.error(error));
    };
    return (
        <>
            <Helmet>
                <title>Bistro | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='urlphoto' {...register("photo", { required: true })} type="text" placeholder="Photo Url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-500'>Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}/
                                })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password  is required</p>}
                                {errors.password?.type === 'minLength' && <p role="alert">Password Must be six character</p>}
                                {errors.password?.type === 'pattern' && <p role="alert">Password Must have one uppercase one lower case and one special character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input disabled='' type="submit" className="btn btn-primary" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-2xl text-center m-2'><small>Have a Account? <Link to="/login" className='text-primary'>Login Your Account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp