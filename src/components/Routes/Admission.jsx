import { Link } from "react-router-dom";
import useColleges from "../../Hooks/useColleges";

const Admission = () => {

    const [colleges] = useColleges();
    console.log(colleges);

    return (
        <div className="md:mx-20 mx-5 mb-20">
            <h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>Apply to your favourite college</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>College Name</th>
                            <th>Admission Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colleges.map(college =>
                                <tr key={college._id}>
                                    <td></td>
                                    <td>{college.college_name}</td>
                                    <td>{college.admission_start_date} to {college.admission_end_date}</td>
                                    <td>
                                        <Link to={`/apply/${college._id}`}><button className="hover:bg-sky-950 text-white bg-orange-500 hover:text-white border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 font-bold w-full uppercase">Apply Now</button></Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;