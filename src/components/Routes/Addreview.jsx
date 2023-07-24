import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Addreview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        const addedreview = { username: data.username, rating: data.rating, review_text: data.review_text }

        fetch('https://college-bay-server-t-0-n-m-0-y.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedreview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        title: 'Thanks For Your FeedBack',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="md:mx-20 mx-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <input type="text" {...register("username", { required: true, maxLength: 100 })} placeholder="Username" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Rating</span>
                    </label>
                    <input type="rating" {...register("rating", { required: true, maxLength: 100 })} placeholder="Rating out of 5" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Review</span>
                    </label>
                    <textarea {...register("review_text", { required: true, maxLength: 100 })} className="textarea textarea-bordered w-full" placeholder="Review"></textarea>
                </div>
                <input className="h-10 w-full rounded-lg bg-orange-500 hover:bg-sky-950 text-white mx-auto mt-5" type="submit" value="Add Review" />
            </form>

        </div>
    );
};

export default Addreview;