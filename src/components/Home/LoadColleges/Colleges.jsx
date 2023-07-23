import { Link } from "react-router-dom";
import useColleges from "../../../Hooks/useColleges";

const Colleges = () => {
    const [colleges] = useColleges();
    console.log(colleges);

    return (
        <div>
            <h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>Top Colleges</h1>
            <div className="grid md:grid-cols-3 gap-5 mb-10 px-5 md:px-20">
                {
                    colleges.slice(0, 3).map(college =>
                        <div key={college._id} className="card w-full bg-base-100 shadow-xl">
                            <figure><img src={college.image_url} className="w-full h-64" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-extrabold text-sky-950">{college.college_name}</h2>
                                <p className="font-semibold text-sky-950">Admission: {college.admission_start_date} to {college.admission_end_date}</p>
                                <p className="font-semibold text-sky-950">Events: {college.event_name}</p>
                                <p className="font-semibold text-sky-950">Research: {college.research_topic}</p>
                                <p className="font-semibold text-sky-950">Sports: {college.sports_categories[0]}, {college.sports_categories[1]}, {college.sports_categories[2]}</p>
                                <div className="card-actions justify-start">
                                    <Link to={`/collegeDetails/${college._id}`}><button className="hover:bg-sky-950 text-white bg-orange-500 hover:text-white border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 mr-2 font-bold w-full uppercase">See Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Colleges;