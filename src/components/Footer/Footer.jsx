
const Footer = () => {

    return (
        <div className="bg-sky-950">
            <footer className="footer p-10 text-white mt-20">
                <div>
                    <p className="md:text-xl font-extrabold text-white">COLLEGE <span className="text-orange-500">BAY</span></p>
                    <p>We bring the years, <br /> global experience, <br /> and stamina to guide our clients <br /> through new and often disruptive realities.</p>
                </div>
                <div className="relative mt-10">
                    <input type="text" placeholder="Email" className="input input-bordered w-full pr-44" />
                    <button className="btn hover:bg-orange-800 hover:text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
                <div>
                    <span className="footer-title">Academy</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">History</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">News & Media</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className="divider"></div>
            <footer className="footer footer-center p-4 text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by College Bay</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;