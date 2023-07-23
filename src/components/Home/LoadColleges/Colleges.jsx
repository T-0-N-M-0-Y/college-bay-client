import useColleges from "../../../Hooks/useColleges";

const Colleges = () => {
    const [colleges] = useColleges();
    console.log(colleges);

    return (
        <div>
            <h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>Top Colleges</h1>
            <div className="grid grid-cols-3 gap-5 mb-10 px-20">
                {
                    colleges.slice(0, 3).map(college =>
                        <div key={college._id} className="card w-full bg-base-100 shadow-xl">
                            <figure><img src={college.image_url} className="w-full h-64" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{college.college_name}</h2>
                                <p>Admission: {college.admission_start_date} to {college.admission_end_date}</p>
                                <p>Events: {college.event_name}</p>
                                <p>Research: {college.research_topic}</p>
                                <p>Sports: {college.sports_categories[0]}, {college.sports_categories[1]}, {college.sports_categories[2]}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
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