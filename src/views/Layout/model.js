import React, { Component } from 'react';
// import { Form, Accordion, Card } from 'react-bootstrap';
import Thanku from '../../assets/images/thanku.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js'; 
class Path3 extends Component {

    render() {
      return (
        <div className="row">
          <div className="full-height container-fluid bg-light">
            <div className="container margin-thanks thanks-wrap text-center bg-white cards-shadow">
              <div className="col-lg-12">
              <img src={Thanku} className="col-lg-2 col-3 mb-4 mt-4" alt=""/>
              {/* <h5 className="font-light mb-4">Dear <span className="text-theme f-w-600">Customer</span>,</h5> */}
              <h3 className="mb-4">Your Application Has Been Submitted !</h3>
              <p className="col-lg-8 mb-4 mx-auto">We'll send you an acknowledgement Email as soon as your apllication accepted, Thank You! </p>
              <button className="mb-4 btn btn-custom-theme col-lg-3">Check Status</button>
              </div>
            </div>
          </div>
        </div>
   );
}
}
export default Path3;

AOS.init({
  // initialise with other settings
  duration : 2000
});