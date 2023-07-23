import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useReviews from "../../../Hooks/useReviews";

const Reviews = () => {

    const [reviews] = useReviews()

    return (
        <div className='text-center mb-20'>
            <h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>Experience</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =>

                        <SwiperSlide
                            key={review._id}

                        >
                            <div className="my-10 flex flex-col items-center mx-40">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="my-4">{review.review_text}</p>
                                <h3 className="text-2xl text-yellow-600">{review.username}</h3>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;