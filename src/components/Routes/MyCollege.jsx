import { Link } from "react-router-dom";
import useAppliedCollege from "../../Hooks/useAppliedCollege";

const MyCollege = () => {

    const [appliedColleges] = useAppliedCollege();
    console.log(appliedColleges);

    return (
        <div>
            {
                appliedColleges.length === 0 ?

                    <><h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>You have to apply first</h1></>
                    :
                    <><h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>Application</h1></>
            }
            <div className="grid md:grid-cols-3 gap-5 mb-10 px-5 md:px-20">
                {
                    appliedColleges.map(college =>
                        <div key={college._id} className="card w-full">
                            <figure><img src={college.image} className="w-64 h-64" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-extrabold text-sky-950">{college.college}</h2>
                                <p className="font-semibold text-sky-950">Name : {college.name}</p>
                                <p className="font-semibold text-sky-950">Email : {college.email}</p>
                                <p className="font-semibold text-sky-950">Subject : {college.subject}</p>
                                <p className="font-semibold text-sky-950">Address : {college.address}</p>
                                <p className="font-semibold text-sky-950">Phone : {college.phone}</p>
                                <p className="font-semibold text-sky-950">Date of birth : {college.birth}</p>
                            </div>
                            <div className="card-actions justify-start">
                                <Link to={`/addreview/${college._id}`}><button className="hover:bg-sky-950 text-white bg-orange-500 hover:text-white border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 mr-2 font-bold w-full uppercase">Feedback</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyCollege;