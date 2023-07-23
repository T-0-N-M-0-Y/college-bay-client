import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="carousel md:w-full h-96 md:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/1.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white p-2 md:p-5 uppercase text-center">Wellcome to College <br />
                            <p className="text-sm my-4 font-normal normal-case">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <div className="text-center">
                                <Link to={'/'}><button className="hover:bg-white bg-orange-500 hover:text-black border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 mr-2">ADDMISSION</button></Link>
                                <Link to={'/'}><button className="hover:bg-white border hover:text-black mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Read More</button></Link>
                            </div>
                        </p>
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/2.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white p-2 md:p-5 uppercase text-center">Admission open<br />
                            <p className="text-sm my-4 font-normal normal-case">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <div className="text-center">
                                <Link to={'/'}><button className="hover:bg-white bg-orange-500 hover:text-black border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 mr-2">ADDMISSION</button></Link>
                                <Link to={'/'}><button className="hover:bg-white border hover:text-black mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Read More</button></Link>
                            </div>
                        </p>
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://rn53themes.net/themes/demo/education-master/images/slider/3.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white p-2 md:p-5 uppercase text-center">College bay <br />
                            <p className="text-sm my-4 font-normal normal-case">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <div className="text-center">
                                <Link to={'/'}><button className="hover:bg-white bg-orange-500 hover:text-black border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 mr-2">ADDMISSION</button></Link>
                                <Link to={'/'}><button className="hover:bg-white border hover:text-black mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Read More</button></Link>
                            </div>
                        </p>
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://businessdaily24.com/wp-content/uploads/2018/02/Top-10-Universities-in-Bangladesh-University-of-Dhaka.jpg" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❮</a>
                        <p className="md:text-5xl text-xs md:font-bold text-white p-2 md:p-5 uppercase text-center">Select your Best College <br />
                            <p className="text-sm my-4 font-normal normal-case">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <div className="text-center">
                                <Link to={'/'}><button className="hover:bg-white bg-orange-500 hover:text-black border-none mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32 mr-2">ADDMISSION</button></Link>
                                <Link to={'/'}><button className="hover:bg-white border hover:text-black mt-2 p-3 text-xs md:text-sm rounded-lg md:w-32">Read More</button></Link>
                            </div>
                        </p>
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-800 bg-orange-500 hover:text-white border-none w-4 h-4">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;