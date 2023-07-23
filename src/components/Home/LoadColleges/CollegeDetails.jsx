import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {

    const details = useLoaderData();
    console.log(details);

    const { college_name, image_url, admission_start_date, admission_end_date, admission_requirements, event_name, event_name2, event_name3, event_date, event_date2, event_date3, event_description, event_description2, event_description3, research_topic, research_topic2, research_description, research_description2, sports_categories } = details;

    return (
        <div>
            <div className="card md:p-20 md:text-center">
                <figure><img className="md:w-1/2 h-96" src={image_url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="md:text-5xl text-2xl font-bold text-sky-950 text-center">{college_name}</h2>
                    <p className="md:text-2xl font-semibold">Addmission: {admission_start_date} to {admission_end_date}</p>
                    <p className="font-semibold">Requirements: {admission_requirements}</p>
                    <h1 className="text-xl font-bold underline">Events: </h1>
                    <p className="text-orange-500">{event_name} in {event_date} !!!</p>
                    <p>Details: {event_description}</p>
                    <p className="text-orange-500">{event_name2} in {event_date2} !!!</p>
                    <p>Details: {event_description2}</p>
                    <p className="text-orange-500">{event_name3} in {event_date3} !!!</p>
                    <p>Details: {event_description3}</p>
                    <h1 className="text-xl font-bold underline">Researches: </h1>
                    <p className="text-orange-500">{research_topic}</p>
                    <p>Details: {research_description}</p>
                    <p className="text-orange-500">{research_topic2}</p>
                    <p>Details: {research_description2}</p>
                    <h1 className="text-xl font-bold underline">Sports: </h1>
                    <p>{sports_categories[0]}, {sports_categories[1]}, {sports_categories[2]}</p>
                    <div className="card-actions justify-start">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;