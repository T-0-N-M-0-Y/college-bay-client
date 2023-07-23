
const Research = () => {
    return (
        <div>
            <h1 className='md:text-4xl text-2xl uppercase font-bold py-20 text-sky-950 text-center'>Some Research Papers</h1>
            <div className="bg-orange-500 text-white flex justify-between p-20">
                <a className="text-xl font-bold hover:underline" href="https://scholar.google.com/">Google Scholar</a>
                <a className="text-xl font-bold hover:underline" href="https://www.microsoft.com/en-us/?ql=2">Microsoft Academic</a>
                <a className="text-xl font-bold hover:underline" href="https://education.iseek.com/iseek/home.page">iSEEK</a>
                <a className="text-xl font-bold hover:underline" href="https://www.loc.gov/">Library of Congress</a>
            </div>
        </div>
    );
};

export default Research;