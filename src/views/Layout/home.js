import React, {Component} from 'react';

import '../../assets/fonts/Gotham-Light.otf'
import '../../assets/fonts/GothamBook.ttf'
import '../../assets/fonts/GothamMedium.ttf'
import '../../assets/fonts/Gotham-Bold.otf'
import '../../assets/fonts/Gotham-Black.otf'

// import {Nav} from 'react-bootstrap';
// import Sun from '../../assets/images/blue-sun.svg';
// import SunCloud from '../../assets/images/cloud.png';
// import cloud from '../../assets/images/cloud.png';

import headerImg from '../../assets/images/Cover-Page.png';
import IconOne from '../../assets/images/icon-one.svg';
import IconTwo from '../../assets/images/icon-two.svg';
import IconThree from '../../assets/images/2.svg';
import IconFour from '../../assets/images/icon-four.svg';

import altscore from '../../assets/images/nnn.png';
import email from '../../assets/images/mail.svg';
import phone from '../../assets/images/contact1.svg';
import one from '../../assets/images/one.svg';
import two from '../../assets/images/two.svg';
import three from '../../assets/images/t3.svg';
import fast from '../../assets/images/fast.png';
import get_in_touch from '../../assets/images/get_in_touch.png';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
// import Contactus from '../../views/Layout/ContactUs';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "lead_type": [
                {"id": "1", "value": "Homemaker"},
                {"id": "2", "value": "Business"},
                {"id": "3", "value": "Solar Developer"},
                {"id": "4", "value": "Investor"},
                {"id": "5", "value": "EPC Company"},
                {"id": "6", "value": "Energy Consultant"},
                {"id": "7", "value": "Other"}
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="content-wrap">
                    <div className="content-part position-relative">
                        <h1 className="heading-text">
                            The simplest way to get your renewable energy project funded
                        </h1>
                        <hr/>
                        <p className="">
                            Digital lending platform connecting lenders & borrowers for sustainable energy projects
                        </p>
                        {/* <button className="btn btn-green-theme btn-width margin-right"><Nav.Link
                            className="text-white py-0" href="/projects">Get Funded</Nav.Link></button>
                        <button className="btn btn-theme btn-width"><Nav.Link href="/invest" className="text-white py-0">Invest</Nav.Link>
                        </button> */}
                    </div>
                    <img src={headerImg} className="header-img" alt=""/>
                    {/*<img src={cloud} className="left-cloud" alt=""/>*/}
                    {/*<img src={Sun} className="sun-placed" alt=""/>*/}
                    {/*<img src={SunCloud} className="sun-cloud" alt=""/>*/}
                </div>
                <div className="bg-light bg-light-green row mincard">
                    <div className="container">

                        <h3 className="text-center mt-5 mb-5">Curated projects match with investors and lenders</h3>
                        {/* <h5 className="font-light text-center mb-5"></h5> */}

                        <div className="row mt-4">

                            <div className="col-lg-4 mb-5" data-aos="fade-up">
                                <div className="card-body card-shadow bg-white text-center">
                                    <div>
                                        <div className="icon-circle-wrap icon-round-bg-one">
                                            <img src={one} className="" alt=""/>
                                        </div>
                                        <p>Each project is evaluated and rated with WelfundScore - our credit rating for
                                            clean energy projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5" data-aos="fade-down">
                                <div className="card-body margin-card card-shadow bg-white text-center">
                                    <div>
                                        <div className="icon-circle-wrap icon-round-bg-two">
                                            <img src={two} className="" alt=""/>
                                        </div>
                                        <p>All projects are unique in terms of technology, impact, consumer profile,
                                            location, size, risk and returns</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5" data-aos="fade-up">
                                <div className="card-body card-shadow bg-white text-center">
                                    <div>
                                        <div className="icon-circle-wrap icon-round-bg-three">
                                            <img src={three} className="" alt=""/>
                                        </div>
                                        <p>Our platform organizes information and process flows enabling faster deal
                                            closures</p>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="col-lg-6 bg-theme bg-theme-height min-height-theme">
          <h2 data-aos="fade-up">Investors and Lenders match with curated projects.</h2>
        </div>
                    <div className="col-lg-6">
          <div className="content-section-one" data-aos="fade-up">
          <p>Each project is evaluated and rated with WelfundScore, our credit rating for clean energy projects.</p>

          <p>All projects are unique in terms of technology, impact, consumer profile, location, size, risk and returns. </p>

          <p>Our platform organizes information and process flows enabling faster deal closures.</p>

          </div>
          </div>*/}
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div
                        className="desktop-hide min-height-theme col-lg-4 bg-theme-gradient d-flex align-items-center justify-content-center text-center bg-theme-height">
                        <div data-aos="fade-up">
                            <h4 className="text-section-two font-light text-secondary-theme col-lg-12 mx-auto">The
                                fastest way to get your project funded</h4>
                            <p className="text-white"></p>
                        </div>
                    </div>

                    <div className="col-lg-8 mincard pt-5 pb-5">
                        <div className="project-funding-section side-space">
                            <div className="row">

                                <div className="col-lg-6 card-center-border ">
                                    <div className="card mr-5 mincards mt-2 mb-2 position-relative" data-aos="fade-up">
                                        <div className="card-body card-height-laps card-content-center pr-5 ">
                                            <div className=" card-content text-center">
                                                <h5>Upload Project Details</h5>
                                                <p className="mb-0"> Complete a basic funding application and upload
                                                    documents for eligibility check </p>
                                                <div className="card-icon-wrap">
                                                    <div className="card-icon">
                                                        <img src={IconThree} className="" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-6 mobile-border margin-card">
                                    <div className="card mincards mt-2 mb-2 margin-custom" data-aos="fade-up">
                                        <div className="card-body card-height-laps card-content-center padding-custom">
                                            <div className="card-content text-center">
                                                <h5>Receive Project Rating</h5>
                                                <p className=" mb-0"> Each funding application receives a credit rating
                                                    with our proprietary algorithm</p>
                                                <div className="card-icon-wrap-left">
                                                    <div className="card-icon-left">
                                                        <img src={IconTwo} className="" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 card-center-border ">
                                    <div className="card mincards mt-2 mb-2 mr-5" data-aos="fade-up">
                                        <div className="card-body card-height-laps card-content-center pr-5 ">
                                            <div className="card-content text-center">
                                                <h5>Matchmaking</h5>
                                                <p className="mb-0"> Funding application is submitted to lenders and
                                                    investors meeting investment criteria</p>
                                                <div className="card-icon-wrap">
                                                    <div className="card-icon">
                                                        <img src={IconFour} className="" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-6 mobile-border margin-card" data-aos="fade-up">
                                    <div className="card mincards mt-2 mb-2 margin-custom">
                                        <div className="card-body card-height-laps card-content-center padding-custom">
                                            <div className="card-content text-center">
                                                <h5>Funding Approval</h5>
                                                <p className="mb-0"> Projects may receive multiple offers for funding
                                                    from which the best offer can be accepted</p>
                                                <div className="card-icon-wrap-left">
                                                    <div className="card-icon-left">
                                                        <img src={IconOne} className="" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div
                        className="mobile-hide col-lg-4 bg-theme-gradient d-flex align-items-center justify-content-center text-center bg-theme-height">
                        <div data-aos="fade-up">
                        <img src={fast} alt="fastest way to get your project funded" />
                            <h4 className="text-section-two font-light text-secondary-theme col-lg-12 mx-auto">The
                                fastest way to get your project funded</h4>
                            <p className="text-white"></p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="row bg-light-green mincard">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="content side-space" data-aos="fade-up">
                                <h3 className="mt-5 mb-5">WelfundScore</h3>

                                <p>Industry’s most comprehensive credit analysis and rating for clean energy
                                    projects</p>
                                <p className="mb-5">Quantative and qualitative framework analyzing 1000+ data points
                                    across Legal, Technical and Financial parameters to identify and mitigate project
                                    risks. </p>

                                <a href="https://project.welfund.org/project-list"
                                   className="btn btn-green-theme col-lg-3">Apply</a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img src={altscore} className="altimg mt-5 pt-5 d-block mx-auto" data-aos="fade-up"
                                 alt="WelfundScore"/>
                        </div>
                    </div>
                </div>
                <div className=" row  ">
                    <div className="container" id="contact-us">
                        <div className="">
                            <div className="row">
                                
                                <div className="desktop-hide col-lg-6 mt-5 d-flex align-items-center mb-5">
                                {/* <div className="col-lg-6 mt-5 d-flex align-items-center mb-5"> */}
                                    <div className="contact-content" data-aos="fade-up">

                                        <h1 className="font-light">Get in Touch</h1>
                                        <p>To know more about how technology and our services can reform your core
                                            needs, fill in the form and let us know your queries</p>
                                            <a aria-label="Chat on WhatsApp" href="whatsapp://send?phone=+917305970276" target="_blank" rel="noopener noreferrer">
                                                    <div className="d-flex align-items-center mt-3 mb-3">                                            
                                                        <div className="card-application"><img src={phone} alt="" className=""/>
                                                    </div>
                                                    <div className="pl-3 icon-text">+91 73059 70276</div>                                                
                                                    </div>
                                            </a>
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@welfund.org" target="_blank" rel="noopener noreferrer">
                                                <div className="d-flex  mt-3 mb-3 align-items-center">                                            
                                                    <div className="card-application"><img src={email} alt="" className=""/>
                                                    </div>
                                                    <div className="pl-3 icon-text">contact@welfund.org</div>
                                                </div>
                                            </a>
                                    </div>
                                </div>

                                <div className="col-lg-6 mobile-hide">
                                <img src={get_in_touch} className="altimg mt-2 pt-5 d-block mx-auto" data-aos="fade-up"
                                    alt="WelfundScore"/>
                                </div>
                                {/* <div className="col-lg-6 bg-theme" id="contact">
                                    <div className="side-space">
                                        <div className="form-card my-5" data-aos="fade-up">
                                            <h4 className="text-center font-light text-white">Contact Us</h4>
                                            <hr/>
                                            <Contactus lead_type={this.state.lead_type}/>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="col-lg-6 mobile-hide mt-5 mb-5 d-flex align-items-center">
                                    <div className="side-space">
                                        <div className="contact-content " data-aos="fade-up">
                                            <h1 className="font-light mb-4">Get in Touch</h1>
                                            <p className="mb-4">To find out more about sustainable energy investing or
                                                getting your projected funded, please reach out </p>
                                                {/* <a href="https://api.whatsapp.com/send?phone=0000000000">Web</a> | <a href="whatsapp://send?phone=0000000000">App</a>< */}
                                                <a aria-label="Chat on WhatsApp" href="https://wa.me/+917305970276" target="_blank" rel="noopener noreferrer">
                                                    <div className="d-flex align-items-center mt-3 mb-3">                                            
                                                        <div className="card-application"><img src={phone} alt="" className=""/>
                                                    </div>
                                                    <div className="pl-3 icon-text">+91 73059 70276</div>                                                
                                                    </div>
                                                </a>
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@welfund.org" target="_blank" rel="noopener noreferrer">
                                                <div className="d-flex  mt-3 mb-3 align-items-center">                                            
                                                    <div className="card-application"><img src={email} alt="" className=""/>
                                                    </div>
                                                    <div className="pl-3 icon-text">contact@welfund.org</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;