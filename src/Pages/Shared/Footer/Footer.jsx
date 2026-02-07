import logo from '../../../assets/img/logo.png'

const Footer = () => {
  return (
    <div className="shadow-xl" >

      <footer className="max-w-7xl mx-auto">
        {/* up section */}
        <section className="">
          <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
              <img className='w-32' src={logo} alt="" />
              <p>
                ACME Industries Ltd.
                
                Providing reliable tech since 1992
              </p>
            </aside>
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </section>

        {/* bottom section */}
        <section className="flex flex-col-reverse md:flex-row justify-between  ">
          <div>
            <h5>Copyright © 2026. JobMart all right reserved</h5>


          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Security</p>

          </div>
        </section>
      </footer>

    </div>
  );
};

export default Footer;