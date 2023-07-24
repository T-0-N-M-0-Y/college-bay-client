import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";


// const image_API_key = import.meta.env.VITE_IMAGE_API_KEY;

const Apply = () => {

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const college = useLoaderData();
    const {college_name} = college;

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="my-20">
            <form onSubmit={handleSubmit(onSubmit)} className="ml-10">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">College Name</span>
                    </label>
                    <input type="text" defaultValue={college_name} readOnly {...register("college", { required: true, maxLength: 100 })} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 100 })} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} readOnly {...register("email", { required: true, maxLength: 100 })} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Subject</span>
                    </label>
                    <input type="text"  {...register("subject", { required: true, maxLength: 100 })} placeholder="Subject" className="input input-bordered w-full" />
                </div>

                <div className="mt-2 md:grid grid-cols-2 gap-3">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number</span>
                        </label>
                        <input type="number" {...register("phone", { required: true, maxLength: 100 })} placeholder="Phone Number" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Date of Birth</span>
                            </label>
                            <input type="date" {...register("birth", { required: true, maxLength: 100 })} placeholder="Date of Birth" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className="form-control my-3 md:grid grid-cols-2 gap-5">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Full Address</span>
                        </label>
                        <input type="text" {...register("address", { required: true, maxLength: 100 })} placeholder="Address" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Upload Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className=" file-input file-input-bordered w-full" />
                    </div>
                </div>
                <input className="h-10 w-full rounded-lg bg-orange-500 hover:bg-sky-950 text-white mx-auto mt-10" type="submit" value="Apply" />
            </form>
        </div>
    );
};

export default Apply;