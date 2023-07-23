

const Search = () => {
    return (
        <div className="text-center bg-sky-950 p-3">
            <input type="text" placeholder="Search College" className="p-3 input-bordered w-full max-w-xl rounded-l uppercase" />
            <button className="p-3 px-10 hover:bg-sky-800 bg-orange-500 hover:text-white text-white border-none rounded-r uppercase font-bold">Search</button>
        </div>
    );
};

export default Search;