import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const image_API_key = import.meta.env.VITE_IMAGE_API_KEY;

const Apply = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const college = useLoaderData();
    const { college_name } = college;

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        const image_BB_url = `https://api.imgbb.com/1/upload?key=${image_API_key}`

        fetch(image_BB_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                const imgURL = image.data.display_url;
                const { name, college, subject, phone, address, email, birth } = data;
                const appliedCollege = { name, college, subject, phone, address, email, birth, image: imgURL }
                console.log(appliedCollege);

                fetch('http://localhost:5000/appliedColleges', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(appliedCollege)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                title: 'Applied Successfully',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        }
                    })
            })
        console.log(data)
    };

    return (
        <div className="my-20">
            <form onSubmit={handleSubmit(onSubmit)} className="md:mx-20 mx-5">
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