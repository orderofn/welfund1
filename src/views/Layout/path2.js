import React, { Component } from 'react';

import '../../assets/fonts/Gotham-Light.otf'
import '../../assets/fonts/GothamBook.ttf'
import '../../assets/fonts/GothamMedium.ttf'
import '../../assets/fonts/Gotham-Bold.otf'
import '../../assets/fonts/Gotham-Black.otf'


import { Accordion, Card, Modal } from 'react-bootstrap';
import solarFeature from '../../assets/images/pie_chart.png';

import Investor from '../../assets/images/investor.png';
import pattern from '../../assets/images/shape2.png';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

// import Contactus from '../../views/Layout/ContactUs';
import Deals from '../../assets/images/deals.svg';
import Feedback from '../../assets/images/feedback.svg';
import Transparency from '../../assets/images/transparency.svg';
import Time from '../../assets/images/time.svg';
import Risk from '../../assets/images/risk.svg';
import Cost from '../../assets/images/cost.svg';
import FAQs_bro from '../../assets/images/faq.png';
// import HubspotForm from 'react-hubspot-form'

// Services
import CommonServices from "../../Services/common.service"
class Path2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "lead_type": [
                { "id": "8", "value": "Individual" },
                { "id": "9", "value": "Corporate" },
                { "id": "10", "value": "Developer" },
                { "id": "11", "value": "Fund" },
                { "id": "12", "value": "Fund Manager" }
            ],
            show: false,
            name_of_entity: "",
            name: "",
            email: "",
            mobile: "",
            comment: ""
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onTextChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });        
      };

    handleShow() {
        this.setState({show: true});
    }

    handleClose() {
        this.setState({show: false});
    }

    async submitForm() {
        let { name_of_entity, name, email, mobile, comment } = this.state;
        try {
          if (this.mobileValidate(mobile) && name_of_entity !== "" && name !== "" && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) && comment !== "") {
            let data = {
              name_of_entity: name_of_entity,
              name: name,
              email: email,
              mobile: mobile,
              comment: comment,
            };
            let response = await CommonServices.investProject(data);
            this.checkingResponse(response);
          } else {
            let msg = name_of_entity === "" ? "Please enter the name of entity" : name === "" ? "Please enter the name" : !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ? "Please enter the valid email" : this.mobileValidate(mobile) === false ? "Please enter the valid mobile number" : "Please enter the comment";
            alert(msg);
          }
        } catch (error) {
          console.log(error);
        }
      }

      checkingResponse(response) {
        if (response.status === true) {
            alert("Succesfully submitted!");
            // this.setState({show: false});
            window.location.reload();
        } else {
          alert(response.message);
        }
      }

      mobileValidate(mobile_number) {
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        if (mobile_number === "" || regex.test(mobile_number) === false || mobile_number.length !== 10) {
          return false;
        }
        return true;
      }

    render() {
        const { show, name_of_entity, name, email, mobile, comment } = this.state;
        return (
            <div className="">

                <div className="row investor-mobile-view">
                    <div className="side-space col-lg-6 mt-3  full-height">
                        <img src={pattern} className="position-absolute img-width" alt="" />
                        <div className="position-relative">

                            <h1 className="mt-5">Invest in income generating solar projects for businesses,
                                not profits and homes</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3 full-height">
                        <img src={Investor} className="col-lg-10 d-block mx-auto" alt="" />
                    </div>
                </div>


                <div className="bg-light-green mincard  row">
                    <div className="container">
                        <div className="row cards-shadow">
                            <div
                                className="col-lg-6 custom-height-card bg-white align-items-center justify-content-center d-flex position-relative">
                                <div className="section-two-content col-lg-8 mx-auto" data-aos="fade-up">
                                    <h3 className=""><span className="">Curated projects</span></h3>
                                    <p className="mt-5">Access investment grade projects with unique profiles including
                                        technology, impact, consumer profile, location, size, risk and returns.</p>
                                </div>
                                {/*<div className="center--wrap">
                <div className="center-circle"><h1 className="text-white f-w-600"> &gt; </h1></div>
      </div>*/}
                            </div>


                            <div className="col-lg-6 bg-theme-gradient custom-height-card">

                                <div className=" section-two-content col-lg-8 mx-auto" data-aos="fade-up">
                                    <h3 className=""><span className="text-white">Predictable Yields</span></h3>
                                    <p className="mt-5 text-white">Investors and lenders match with projects meeting
                                        investment criteria and return profile. Our platform facilitates streamlined
                                        process flow for deal closures in under 60 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div
                        className="col-lg-6 align-items-center mincard  justify-content-center d-flex position-relative">
                        <div className="section-two-content col-lg-8 mx-auto">
                            <h1 className="custom-line-height ">WelfundScore is industry’s most comprehensive credit
                                analysis and grading for solar projects</h1>
                        </div>

                    </div>
                    <div className="col-lg-6 mincard">
                        <div className=" section-two-content ">
                            <img src={solarFeature} className="col-lg-6 d-block mx-auto" alt="" />
                            <p className="mt-2 text-center">Every curated project on the Welfund platform is rated with
                                an WelfundScore. WelfundScore reports offer unique insights that aid your investment
                                decisions.</p>
                        </div>
                    </div>
                </div>


                <div className=" ">
                    <div className="row bg-light-green mincard side-space">


                        <div className="cards-head col-lg-3 mb-4" data-aos="fade-up">
                            <div className="card position-relative">
                                <div className="list-card-absolute">LONG TERM PPAs</div>
                                <div className="card-body d-flex align-items-center">
                                    <div className="">
                                        <p>Invest in long term Power Purchase Agreements with creditworthy off-takers.
                                            Get paid for power generated by system over 15-25 years</p>

                                    </div>
                                </div>
                                <div className="card-footer text-center bg-transparent custom-card-footer"><h5
                                    className=" mb-0 ">Developers, Corporates, Individual Investors</h5></div>
                            </div>
                        </div>


                        <div className="cards-head col-lg-3 mb-4" data-aos="fade-up">
                            <div className="card position-relative">
                                <div className="list-card-absolute list-card-grey">PROJECT FINANCING</div>
                                <div className="card-body d-flex align-items-center">

                                    <p className="">Top banks and NBFCs partner with us to fund renewable energy
                                        projects under special schemes with collateral free, low cost financing</p>


                                </div>
                                <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h5
                                    className="mb-0">Banks, NBFCs</h5></div>
                            </div>
                        </div>


                        <div className="cards-head col-lg-3 mb-4" data-aos="fade-up">
                            <div className="card position-relative">
                                <div className="list-card-absolute text-uppercase">SHORT TERM Financing</div>
                                <div className="card-body d-flex align-items-center">

                                    <p className="">Tailored for MSMEs and Corporates with strong business track record
                                        for short term financing for 3-5 years</p>


                                </div>
                                <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h5
                                    className="mb-0">NBFCs, Asset Leasing Developers</h5></div>
                            </div>
                        </div>


                        <div className="cards-head col-lg-3 mb-4" data-aos="fade-up">
                            <div className="card position-relative">
                                <div className="list-card-absolute list-card-grey text-uppercase">RESIDENTAL FINANCING</div>
                                <div className="card-body d-flex align-items-center">

                                    <p className="">Short term collateral free financing for homeowners with upto 70%
                                        financing of project cost for 18-24 months</p>


                                </div>
                                <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h5
                                    className="mb-0">NBFCs, Banks</h5></div>
                            </div>
                        </div>

                        <button onClick={this.handleShow} className="btn com-btn text-uppercase f-14 btn-desktop nav-link mt-2">Click here to invest in our existing projects</button>

                    </div>
                </div>


                <div className="row  mincard">

                    <div className="container mt-5">
                        <div><h3 className="text-center">Welfund platform simplifies investment</h3>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 mb-5">
                                <div className="card-body text-center cards-shadow bg-white">
                                    <img src={Deals} className="mb-3 invest-graphics" alt="" />
                                    <h5 className="font-light">Curated Deals</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card-body text-center  cards-shadow bg-white">
                                    <img src={Feedback} className="mb-3 invest-graphics" alt="" />
                                    <h5 className="font-light">Realtime Feedback</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card-body text-center bg-white cards-shadow">
                                    <img src={Transparency} className="mb-3 invest-graphics" alt="" />
                                    <h5 className="font-light">Increased Transparency</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card-body text-center cards-shadow bg-white">
                                    <img src={Time} className="mb-3 invest-graphics" alt="" />
                                    <h5 className="font-light">Reduced Time to Fund</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card-body text-center cards-shadow bg-white">
                                    <img src={Risk} className="mb-3 invest-graphics" alt="" />
                                    <h5 className="font-light">Lower Risk</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card-body text-center cards-shadow bg-white">
                                    <img src={Cost} className="mb-3 invest-graphics" alt="" />
                                    <h5 className="font-light">Low Due Dilligence Costs</h5>
                                </div>
                            </div>
                            {/*<div className="col-lg-6 align-items-center newmincard justify-content-center d-flex position-relative">
              <div className="section-two-content col-lg-8 mx-auto">
                <h1 className="custom-line-height fadeIn">Welfund platform simplifies investment </h1>                
              </div>
             
            </div>
            <div className="col-lg-6">
                <div className="bg-theme half-vertical-length ">   
                  <div className="half-vertical-content position-relative">
                    <h4>Deals</h4>
                    <h4>Realtime Feedback</h4>
                    <h4>Incresed Transparency</h4>     
                    <img src={ArrowUp} className="position-absolute imgarrow" alt=""/>
                  </div>
                </div>
                <div className="asana-bg-three half-vertical-length">       
                  <div className="half-vertical-content position-relative"> 
                    <h4>Reduced Time to Fund</h4>
                    <h4>Reduced Risk</h4>
                    <h4>Lower Due Dilligence Costs </h4>  
                    <img src={ArrowDown} className="position-absolute imgarrow" alt=""/>
                  </div>
                </div>
      </div>*/}
                        </div>
                    </div>
                </div>
                <div className="side-space custom-row mincards top-space bg-light-green">

                    <div className="rs-features mincard">

                        <div className="features-wrap">

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 md-mb-70">
                                        <div className="features-inner colors1">
                                            <div className="number bgcolor1">01</div>
                                            <div className="features mt-57 aos-init aos-animate timeline-top-margin"
                                                data-aos="fade-up">
                                                <div>
                                                    <h4 className="font-light text-theme mb-4">Select Investment
                                                        Preferences</h4>
                                                    <p>Sign up and share investment preferences to receive qualified
                                                        projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 md-mb-70">
                                        <div className="features-inner colors2 ">
                                            <div className="number bgcolor2 list-card-grey">02</div>
                                            <div className="features mt-122 md-mt-57 aos-init aos-animate"
                                                data-aos="fade-up" data-aos-delay="200">
                                                <div>
                                                    <h4 className="font-light text-theme mb-4 clr-grey">Choose a Project</h4>
                                                    <p>Choose from a list of greenfield or operating projects with
                                                        unique impact location, size, risk and returns</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 sm-mb-70">
                                        <div className="features-inner colors3">
                                            <div className="number bgcolor3">03</div>
                                            <div className="features mt-57 aos-init aos-animate timeline-top-margin"
                                                data-aos="fade-up" data-aos-delay="400">

                                                <div><h4 className="font-light text-theme mb-4">Submit Offer</h4>
                                                    <p>Sign exclusive mandate for access to project virtual dataroom and
                                                        submit your offer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="features-inner colors4 ">
                                            <div className="number bgcolor4 list-card-grey">04</div>
                                            <div className="features mt-122 md-mt-57 aos-init aos-animate "
                                                data-aos="fade-up" data-aos-delay="600">
                                                <div>
                                                    <h4 className="font-light text-theme mb-4 clr-grey">Fund Projects</h4>
                                                    <p>Get introduced to buyer and complete definitive agreements to
                                                        execute transactions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="side-space">
            <div className="row">
            <div className="col-lg-3">
                <div className="card mt-5 bg-theme">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-white text-center mt-3 mb-3">Select Investment Preferences</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="text-white">Sign up and share investment preferences to receive qualified projects</p>
                    
                  </div>
                
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card mt-5 bg-theme">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-white text-center mt-3 mb-3">Choose a Project</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="text-white">Choose from a list of greenfield or operating projects with unique impact location, size, risk and returns.</p>
                    
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card mt-5 bg-theme">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-white text-center mt-3 mb-3">Submit Offer</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="text-white">Sign exclusive mandate for access to project to access project virtual dataroom and submit your offer</p>
                    
                  </div>
               
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card bg-theme mt-5 mb-5">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-white text-center mt-3 mb-3">Fund Projects</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="text-white">Get introduced to buyer and complete definitive agreements to execute transactions</p>
                    
                  </div>
                 
                </div>
              </div>
            </div>      
      </div>*/}

                <div className="row" id="contact-us">

                    <div className="col-lg-6 mincard">
                        <div className="flex-width">
                            <div className="side-space accordion-content">

                                <div className="contact-content mt-4 mb-4">
                                    <h6 className="text-theme">FAQs</h6>
                                    <h2 className="font-light"> Ask Anything</h2>
                                </div>
                                <Accordion className="radius-card">
                                    <Card className="mt-2 mb-2 bg-white">
                                        <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white"
                                            eventKey="0">
                                            What type of projects are listed on the Welfund platform?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body><p>Welfund is presently working on funding on-grid and off-grid
                                                solar PV projects for homeowners, MSMEs, commercial, industrial and
                                                government clients located in India. </p></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="mt-2 mb-2">
                                        <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white"
                                            eventKey="1">
                                            What is the return on investment in renewable projects?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body><p>Each project is unique in terms of risk and returns and our
                                                platform offers Post Tax Equity returns between 12-18%. We help
                                                investors gain access to low cost debt financing to boost project
                                                returns.</p></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="mt-2 mb-2">
                                        <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white"
                                            eventKey="2">
                                            What is the minimum investment amount?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body><p>We presently facilitate direct investments into projects
                                                starting 100kWp onwards, requiring a minimum investment amount of
                                                $55,000. Our team handholds you from project selection, investment
                                                advisory, vendor selection and asset and revenue management during the
                                                project tenure.</p></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="mt-2 mb-2">
                                        <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white"
                                            eventKey="3">
                                            What are risks associated with projects?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body><p>Project risks can be categorized into technical risks and
                                                consumer risks. Technical risks are associated with the technology used,
                                                generation estimation, contactor, and project performance. Financial
                                                risks are related to consumer default in payments.</p></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="mt-2 mb-2">
                                        <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white"
                                            eventKey="4">
                                            How does Welfund help minimize and mitigate risks?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body><p>Welfund follows an intrinsic approach to mitigate the
                                                technical risks by controlling the technology selection and selecting
                                                reputed vendors backing the project with performance and generation
                                                guarantees and warranties. We minimize the consumer default risk by
                                                doing a comprehensive risk assessment with in-house developed
                                                WelfundScore to ensure credit worthy consumers are curated on our
                                                platform. </p></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="mt-2 mb-2">
                                        <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white"
                                            eventKey="5">
                                            How can I invest?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body><p>Get in touch with us to submit your interest and share your
                                                investment preferences. Our team will then send you qualified projects
                                                that meet your investment criteria. </p></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="mt-2 mb-2">
                                        <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white"
                                            eventKey="6">
                                            What is Welfund’s role?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body><p>Welfund brings curated projects meeting target investment
                                                returns and handholds investors in contractor selection, contracts,
                                                investment advisory and asset management for the entire duration of the
                                                investment. We are your long-term partners in your sustainable
                                                investment journey. </p></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 bg-theme">
                        <div className="side-space">
                            <div className="form-card my-5" data-aos="fade-up">
                                <h4 className="text-center font-light text-white">Contact Us</h4>
                                <hr/>
                                <HubspotForm
                                    portalId='8079131'
                                    formId='c36a32d1-05c5-41d8-9887-9193ad57bdaf'
                                    onSubmit={
                                        () => this.Contactus.handleFormSubmit
                                    }
                                    onReady={
                                        (form) => console.log('Form ready!')
                                    }
                                    loading={
                                        <div>Loading...</div>
                                    }
                                />
                            </div>
                        </div>
                    </div> */}
                    <>
                        <Modal size="lg" show={show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Invest in our existing projects</Modal.Title>                                
                            </Modal.Header>
                            <Modal.Body>
                                <p>We appreciate your interest in our existing projects. We currently have 15 projects available for investment, adding up to Rs. 10 crores and 2 MW in capacity.</p>
                                <p>Kindly complete the following form. You will hear from a representative of our company who will assist you with the investment process.</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="name_of_entity">Name of the Entity</label>
                                                <input type="text" name="name_of_entity" value={name_of_entity} onChange={this.onTextChange} className="form-control" id="name_of_entity" placeholder="Name of the Entity" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Contact Person Name</label>
                                                <input type="text" name="name" value={name} onChange={this.onTextChange} className="form-control" id="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" name="email" value={email} onChange={this.onTextChange} className="form-control" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="mobile">Mobile Number</label>
                                                <input type="text" name="mobile" value={mobile} onChange={this.onTextChange} className="form-control" id="mobile" placeholder="Mobile Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="comment">Comment</label>
                                                <textarea name="comment" value={comment} onChange={this.onTextChange} className="form-control" id="exampleFormControlTextarea1" maxLength="200" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <button onClick={this.submitForm} className="btn com-btn text-uppercase f-14 btn-desktop nav-link mt-2">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </>
                    <div className="col-lg-6 d-flex align-items-center mobile-hide">
                        {/* <a href="https://storyset.com/business">Business illustrations by Storyset</a> */}
                        <img src={FAQs_bro} className="altimg mt-5 pt-5 d-block mx-auto" data-aos="fade-up" alt="FAQ's" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Path2;