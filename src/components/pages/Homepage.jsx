import RealTimeNotication from "./subComponents/RealTimeNotication";
import Billing from "./subComponents/Billing";
import Loan from "./subComponents/Loan";
import Testimonal from './subComponents/Testimonal'
import Carousel from "./subComponents/Carosel";
import Lastsec from "./subComponents/Lastsec";
import Navbar from "../layouts/Navbar";
export default  function HomePage() {
  return (
    <div className="">
    <Navbar/>
      <div className="">
        <div className="hero-section  ">
          <div className="FirstSide-Section ">
            <span className="heading-1">Simple. Transparent. Secure</span>
            <br />
            <br />

            <span className="heading-2">
              The Best Platform For Automated VTU Services
            </span>
            <br />

            <p className="heading-3">
              Finally, the solution to all your data problems is here... We have
              the best prices and with convenient payment options. Click on your
              preferred network below to get your cheap data
            </p>

            <br />

            <div className="hero-button-section">
              <a href="" className="btn-cta-1">
                Open Account
              </a>
              <a href="" className="btn-cta-2">
                Get In touch
              </a>
            </div>
          </div>
          <div className="SecondSide-Section ">
            <img src="https://demo.dirtyscripts.shop/vtu/assets/frontend/assets/images/banner-bg.png"></img>
          </div>
        </div>
      </div>
      <RealTimeNotication />
      <Billing />
      <Loan />
      <Testimonal />
      <Carousel />
      <br />
      <Lastsec/>
    </div>
  );
}
