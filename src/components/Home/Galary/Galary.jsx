import useGalary from "../../../Hooks/useGalary";

const Galary = () => {

    const [images] = useGalary()

    return (
        <div>
            <h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>Memories</h1>
            <div className="grid grid-cols-4 gap-1 px-20">
                {
                    images.map(image =>
                        <div key={image._id} className="">
                            <figure><img src={image.image} className="w-96 h-40" /></figure>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Galary;