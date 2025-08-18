import React, { Component } from 'react';

import '../../assets/fonts/Gotham-Light.otf';
import '../../assets/fonts/GothamBook.ttf';
import '../../assets/fonts/GothamMedium.ttf';
import '../../assets/fonts/Gotham-Bold.otf';
import '../../assets/fonts/Gotham-Black.otf';
import Pone from '../../assets/images/55.svg';
import Ptwo from '../../assets/images/44.svg';
import Pthree from '../../assets/images/33.svg';
import Pfour from '../../assets/images/22.svg';
import Pfive from '../../assets/images/11.svg';
import FAQs_bro from '../../assets/images/faq.png';
import { Accordion, Card } from 'react-bootstrap';
import solarFeature from '../../assets/images/group-1642.png';



// import Contactus  from '../../views/Layout/ContactUs';
import headerThree from '../../assets/images/borrower.svg';

import BorrowerBottom from '../../assets/images/group-2783.svg';
import borrowermobilebottom from '../../assets/images/a.svg';


import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js'; 
class Path3 extends Component {
  constructor(props) {  
    super(props);  
      this.state = {
        "lead_type":[
          {"id" : "1", "value":"Homeowner"},
          {"id" : "9", "value": "Corporate"},
          {"id" : "13", "value": "MSME"},
          {"id" : "14", "value": "Industry"},
          {"id" : "10", "value": "Developer"},
          {"id" : "5", "value": "EPC Company"}
        ]
      }
    }
    render() {
      return (
        <div className="">

          <div className=" full-height ">
            <div className="container-fluid" >
            <div className="row  ">
              <div className="col-lg-6 side-space d-flex align-items-center">
                <div className="brw ">
              
              <span className="header-borrower head-animate-text d-block text-theme"></span>
           
              <h2 className="f-42 mb-5">Discover the fastest way to get your project funded </h2>

            {/*<div className="row">
              <div className="col-lg-6"><div>
              <div className="d-flex align-items-center mt-3 mb-3"><div className="card-application"><img src={Home} alt="" className=""/></div><div className="pl-3 icon-text">Homeowner</div></div>
            <div className="d-flex align-items-center mt-3 mb-3"><div className="card-application"><img src={SMEs} alt="" className=""/></div><div className="pl-3 icon-text">SMEs</div></div>
            <div className="d-flex align-items-center mt-3 mb-3"><div className="card-application"><img src={Institute} alt="" className=""/></div><div className="pl-3 icon-text">Institution & Non-Profits</div></div>
              </div></div>
              <div className="col-lg-6">
              <div className="d-flex align-items-center mt-3 mb-3"><div className="card-application"><img src={Fact} alt="" className=""/></div><div className="pl-3 icon-text">Corporate & Industries</div></div>
            <div className="d-flex align-items-center mt-3 mb-3"><div className="card-application"><img src={Developers} alt="" className=""/></div><div className="pl-3 icon-text">Project Developers</div></div>
            <div className="d-flex align-items-center mt-3 mb-3"><div className="card-application"><img src={Partner} alt="" className=""/></div><div className="pl-3 icon-text">EPC Partners</div></div>
              </div>
      </div>*/}
              {/*<div className="col-lg-4 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Home} className="" alt=""/>                  
                </div>
                <h6 className="text-center font-light mt-2">Homeowner</h6>
              </div>
              <div className="col-lg-4 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={SMEs} className="" alt=""/>                 
                </div>
                <h6 className="text-center font-light mt-2">SMEs</h6>
              </div>
              <div className="col-lg-4 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Institute} className="" alt=""/>                  
                </div>
                <h6 className="text-center font-light mt-2">Institution & Non-Profits</h6>
              </div>
              <div className="col-lg-4 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Fact} className="" alt=""/>          
                </div>
                <h6 className="text-center font-light mt-2">Corporate & Industries</h6>
              </div>
              <div className="col-lg-4 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Developers} className="" alt=""/>           
                </div>
                <h6 className="text-center font-light mt-2">Project Developers</h6>
              </div>
              <div className="col-lg-4 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Partner} className="" alt=""/>            
                </div>
                <h6 className="text-center font-light mt-2">EPC Partners</h6>
      </div>*/}
            </div>
            </div>
          
              <div className="col-lg-6 side-space d-flex align-items-center justify-content-center">
              <img src={headerThree} className="col-lg-10 d-block my-4 mx-auto" alt=""/>         
              </div>
            </div>
          </div>
          </div>
      {/*<div className="content-wrap">
        <div className="content-part">
          
            <h1 className="header-borrower">            Discover the fastest way to get <br/> your project funded            </h1>
            <hr/>
            <p className="">Invester in income generating solar projects for businesses, not profits, homes</p>
            <div className="row">
              <div className="col-lg-2 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Home} className="" alt=""/>                  
                </div>
                <h6 className="text-center font-light mt-2">Homeowner</h6>
              </div>
              <div className="col-lg-2 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={SMEs} className="" alt=""/>                 
                </div>
                <h6 className="text-center font-light mt-2">SMEs</h6>
              </div>
              <div className="col-lg-2 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Institute} className="" alt=""/>                  
                </div>
                <h6 className="text-center font-light mt-2">Institution & Non-Profits</h6>
              </div>
              <div className="col-lg-2 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Fact} className="" alt=""/>          
                </div>
                <h6 className="text-center font-light mt-2">Corporate & Industries</h6>
              </div>
              <div className="col-lg-2 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Developers} className="" alt=""/>           
                </div>
                <h6 className="text-center font-light mt-2">Project Developers</h6>
              </div>
              <div className="col-lg-2 col-4 borrower-mobile-text">
                <div className="square-borrower-card">
                  <img src={Partner} className="" alt=""/>            
                </div>
                <h6 className="text-center font-light mt-2">EPC Partners</h6>
              </div>
            </div>    
        </div>        
    </div>*/}

          {/*<div className="row" >
            <div className="col-lg-6 align-items-center mincard  justify-content-center d-flex position-relative">
              <div className="section-two-content col-lg-6 mx-auto" data-aos="fade-up">
                <h3 className=""><span className="text-section-two-left">Submit Project</span></h3>
                <p className="mt-5">Access investment grade projects with unique profiles including technology, impact, consumer profile, location, size, risk and returns.</p>
              </div>
              <div className="center--wrap">
                <div className="center-circle"><h1 className="text-white"> &gt; </h1></div>
              </div>
            </div>
            <div className="col-lg-6 bg-theme mincard">           
                <div className=" section-two-content col-lg-6 mx-auto " data-aos="fade-up">
                  <h3 className=""><span className="text-section-two">Get Funded</span></h3>
                  <p className="mt-5 text-white">Investors and lenders match with projects meeting investment criteria and return profile. Platform facilitates streamlined process flow for deal closures in under 60 days</p>
                </div>
            </div>
          </div>*/}
          <div className="bg-light-green mincard  row">
          <div className="container">
          <div className="row cards-shadow" >
            <div className="col-lg-6 custom-height-card bg-white align-items-center justify-content-center d-flex position-relative">
              <div className="section-two-content col-lg-8 mx-auto"  data-aos="fade-up">
                <h3 className=""><span className="">Submit Project</span></h3>
                <p className="mt-5">A simple and easy to use platform that lets you share your project details in under 10 minutes; our algorithms collect and analyze over 1000+ data points</p>
              </div>
              {/*<div className="center--wrap">
                <div className="center-circle"><h1 className="text-white f-w-600"> &gt; </h1></div>
              </div>*/}
            </div>
            <div className="col-lg-6 bg-theme-gradient custom-height-card">           
                <div className=" section-two-content col-lg-8 mx-auto"  data-aos="fade-up">
                  <h3 className=""><span className="text-white">Get Funded</span></h3>
                  <p className="mt-5 text-white">We match your project with our vast network of investors and lending partners. Get the most competitive offers for funding your project and receive funds in under 60 days</p>
                </div>
            </div>
          </div>
          </div>
          </div>
          <div className="row mincard pt-4">
            <div className="col-lg-6 mt-5 mb-5 align-items-center justify-content-center d-flex position-relative" data-aos="fade-up">
              <div className="section-two-content col-lg-10 mx-auto">
              <h1 className="mt-4 mb-4">Unlock unique insights to improve your chances of getting funded with WelfundScore</h1>
                <p className="custom-line-height mt-5 mb-5">Industry’s most comprehensive credit analysis and grading for clean energy projects</p>   
                <p className="custom-line-height mt-5">Quantitate and qualitative framework analyzing 1000+ data points across financial, technical, project and legal parameters to identify and mitigate project risks</p>                                
              </div>             
            </div>
            <div className="col-lg-6 d-flex align-items-center mt-5">                           
                <img src={solarFeature} className=" d-block mx-auto mb-5 col-lg-12" data-aos="fade-up" alt=""/>
            </div>
          </div>
          <div className=" ">
            <div className="row bg-light-green mincard side-space">           
            <div className="col-lg-12 " >
            <h2 className="text-center mt-5 mb-5 ">Tailored funding for all projects</h2>
          </div>
              <div className="cards-head col-lg-3 mb-5 " data-aos="fade-up">
              <div className="card position-relative">
                  <div className="list-card-absolute">LONG TERM PPAs</div>
                  <div className="card-body d-flex align-items-center">
                    <div className="">
                      <p className="">Zero down long term Power Purchase Agreements. Pay for power generated by solar at lower tariff than market rates</p>                     
                    </div>
                  </div>
                  <div className="card-footer text-center bg-transparent custom-card-footer"><h5 className=" mb-0 ">Corporates, Industries, Institutions, Government</h5></div>
                </div>
              </div>
              <div className="cards-head col-lg-3 mb-5" data-aos="fade-up">
              <div className="card position-relative">
                  <div className="list-card-absolute list-card-grey">PROJECT FINANCING</div>
                  <div className="card-body d-flex align-items-center">                    
                  <p className="">Collateral free low cost financing or refinancing of projects  to boost project returns from top banks and NBFCs</p>                                         
                  </div>
                  <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h5 className="mb-0">Corporates, Industries, Developers</h5></div>
                </div>
              </div>
              <div className="cards-head col-lg-3 mb-5" data-aos="fade-up">
              <div className="card position-relative">
                  <div className="list-card-absolute text-uppercase">SHORT TERM Financing</div>
                  <div className="card-body d-flex align-items-center">
                  <p className="">Tailored for MSMEs and Corporates with strong business track record for short term financing for 3-5 years</p>
                  </div>
                  <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h5 className="mb-0">Corporates, Industries, MSMEs</h5></div>
                </div>
              </div>
              <div className="cards-head col-lg-3 mb-5" data-aos="fade-up">
              <div className="card position-relative">
                  <div className="list-card-absolute list-card-grey text-uppercase">RESIDENTAL FINANCING</div>
                  <div className="card-body d-flex align-items-center">                    
                  <p className="">Short term collateral free financing for homeowners with upto 70% financing of project cost for 18-24 months</p>                                         
                  </div>
                  <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h5 className="mb-0">Homeowners</h5></div>
                </div>
              </div>
            </div>      
          </div>
          {/*<div className="side-space bg-light row mincard pb-5">
           
            <div className="col-lg-12 " >
            <h2 className="text-center mt-5">Tailored funding for all projects</h2>
          </div>
            <div className="col-lg-3">
                <div className="card mt-5" data-aos="fade-up">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-theme text-center mt-3 mb-3">LONG TERM PPAs</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="">Zero down long term Power Purchase Agreements. Pay for power generated by solar at lower tariff than market rates</p>
                    
                  </div>
                  <div className="card-footer text-center bg-transparent custom-card-footer"><h6 className=" mb-0 ">Corporates, Industries, Institutions, Government</h6></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card mt-5" data-aos="fade-up">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-theme text-center mt-3 mb-3">PROJECT FINANCING</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="">Collateral free low cost financing or refinancing of projects  to boost project returns from top banks and NBFCs</p>
                    
                  </div>
                  <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h6 className="mb-0">Corporates, Industries, Developers</h6></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card mt-5" data-aos="fade-up">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-theme text-center mt-3 mb-3">SHORT TERM FINANCING</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="">Tailored for MSMEs and Corporates with strong business track record for short term financing for 3-5 years</p>
                    
                  </div>
                  <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h6 className="mb-0">Corporates, Industries, MSMEs</h6></div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card mt-5 " data-aos="fade-up">
                  <div className="card-header bg-transparent card-new">
                    <h6 className="text-theme text-center mt-3 mb-3">RESIDENTAL FINANCING</h6>
                  </div>
                  <div className="card-body text-center card-body-height">
                   
                    <p className="">Short term collateral free financing for homeowners with upto 70% financing of project cost for 18-24 months</p>
                    
                  </div>
                  <div className="card-footer text-center mb-0 bg-transparent custom-card-footer"><h6 className="mb-0">Homeowners</h6></div>
                </div>
            
            </div>      
          </div>*/}
          <div className=" row mincard pb-5">
            <div className="col-lg-12  mt-5 mb-5">
              <h3 className="text-center mb-5">Project upload to funding under 60 days</h3>
             {/* <img src={Process} className="container mobile-none mt-5 pt-5" alt=""/>*/}
              

              <div className="custom-row top-space mobile-none pt-5">
            
            <div className="rs-features ">
           
              <div className="features-wrap">
                
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-lg-1"></div>

                          <div className="col-lg-2 md-mb-70">
                              <div className="features-inner colors1">
                                  <div className="number bgcolor1">01</div>
                                  <div className="features mt-57 aos-init aos-animate timeline-top-margin" data-aos="fade-up">
                                      <div>
                                      <h4 className="font-light text-theme mb-4">Eligibility</h4>
                                      <p>Sign NDA and upload basic project financing documents</p>
                                  </div></div>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className="features-inner colors2 ">
                                  <div className="number bgcolor2 list-card-grey">02</div>
                                  <div className="features mt-122 md-mt-57 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                      <div>
                                      <h4 className="font-light text-theme mb-4 clr-grey">Sign Mandate</h4>
                                      <p>Upon confirmation of eligibility, sign funding mandate and upload detailed project documents </p>
                                  </div></div>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className="features-inner colors3">
                                  <div className="number bgcolor3">03</div>
                                  <div className="features mt-57 aos-init aos-animate timeline-top-margin" data-aos="fade-up" data-aos-delay="400">
                                  
                                      <div><h4 className="font-light text-theme mb-4">Rating</h4>
                                      <p>Receive WelfundScore credit rating for your project along with feedback to improve application</p>
                                  </div></div>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className="features-inner colors4 ">
                                  <div className="number bgcolor4 list-card-grey">04</div>
                                  <div className="features mt-122 md-mt-57 aos-init aos-animate " data-aos="fade-up" data-aos-delay="200">
                                 <div>
                                      <h4 className="font-light text-theme mb-4 clr-grey">Match</h4>
                                      <p>Your project is matched with multiple investors/lenders who meet project criteria</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className="features-inner colors4 ">
                                  <div className="number bgcolor4">05</div>
                                  <div className="features mt-122 md-mt-57 aos-init aos-animate timeline-top-margin" data-aos="fade-up">
                                 <div>
                                      <h4 className="font-light text-theme mb-4">Get Funded</h4>
                                      <p>We match your project with our vast network of investors and lending partners. Get the most competitive offers for funding your project and receive funds in under 60 days</p>
                                      
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-1"></div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
            <img src={Pone} className="container  desktop-none" alt=""/>
            <img src={Ptwo} className="container  desktop-none" alt=""/>
            <img src={Pthree} className="container  desktop-none" alt=""/>
            <img src={Pfour} className="container  desktop-none" alt=""/>
            <img src={Pfive} className="container  desktop-none" alt=""/>
        </div>
            {/*<div className="col-lg-1"></div>   
              <div className="cards-head col-lg-2 mb-5" data-aos="fade-up">
              <div className="card position-relative">
                  <div className="list-card-absolute">Eligibility</div>
                  <div className="card-body d-flex align-items-center">
                    <div className="">
                      <p>Sign NDA and upload basic project financing documents</p>
                     
                    </div>
                  </div>
                </div>
              </div>     
          
              <div className="cards-head col-lg-2 mb-5" data-aos="fade-down">
              <div className="card position-relative">
                  <div className="list-card-absolute">Sign Mandate</div>
                  <div className="card-body d-flex align-items-center">
                    <div>
                      <p>Upon confirmation of eligibility, sign funding mandate and upload detailed project documents</p>
                    </div>            
                  </div>
                </div>
              </div>     
           
              <div className="cards-head col-lg-2 mb-5" data-aos="fade-up">
                <div className="card position-relative">
                  <div className="list-card-absolute">Rating</div>
                  <div className="card-body d-flex align-items-center">
                      <div>
                      <p>Receive WelfundScore credit rating for your project along with feedback to improve application  </p>
                      
                      </div>
                  </div>
                </div>
              </div>     
           
              <div className="cards-head col-lg-2 mb-5" data-aos="fade-down">
              <div className="card position-relative">
                  <div className="list-card-absolute">Match</div>
                  <div className="card-body d-flex align-items-center">
               
                      <div><p>Your project is matched with multiple investors/lenders who meet project criteria</p></div>
      
                  </div>
                </div>
              </div>     
           
              <div className="cards-head col-lg-2 mb-5" data-aos="fade-up">
                <div className="card position-relative">
                  <div className="list-card-absolute">Get Funded</div>
                  <div className="card-body d-flex align-items-center ">

                      <div>
                      <p>Receive project funding offers within 30 days and disbursement within 60 days</p>
                      </div>
                  </div>
                </div>
              </div>  
              <div className="col-lg-1"></div>   */}
            </div>

      
          
            <div className="bg-light-green mincard row">
          <div className="container py-5">

            
          <img src={BorrowerBottom} className="mobile-none col-lg-12" alt=""/>
          <img src={borrowermobilebottom} className="desktop-none col-lg-12" alt=""/>
          {/*<div className="row cards-shadow" >
            <div className="col-lg-6 custom-height-card bg-white align-items-center justify-content-center d-flex position-relative">
            <div className="half-vertical-content position-relative"> 
                  <h3 className=""><span className="">Simplicity</span></h3>
                  <h4 className="text-dark">Virtual Dataroom</h4>
                    <h4 className="text-dark">Minimum Documentation</h4>
                    <h4 className="text-dark">Single Application</h4>   
          
                  </div>
            </div>


            <div className="col-lg-6 bg-theme custom-height-card">
            <div className="half-vertical-content position-relative" data-aos="fade-up"> 
                  <h3 className="text-white"><span className="">Value</span></h3>
                    <h4>Multiple Offers</h4>
                    <h4>Competitive Rates</h4>
                    <h4>Fast Processing</h4>   
                    <h4>Reduced Time & Effort</h4>
                    <h4>Transparency </h4>                  
                  </div>
            </div>
            </div>*/}
          </div>
          </div>


          {/*<div className="row" >
            <div className="col-lg-6 align-items-center newmincard  justify-content-center d-flex position-relative" data-aos="fade-up">
          
                  

                
                  <div className="half-vertical-content position-relative"> 
                  <h3 className=""><span className="text-section-two-left">Simplicity</span></h3>
                  <img src={Virtual} className="img-borrower-last" alt=""/>
                  <img src={Minimum} className="img-borrower-last" alt=""/>
                  <img src={Single} className="img-borrower-last" alt=""/>   
                  </div>
                </div>
    

            <div className="col-lg-6 bg-theme newmincard">
            
                  

                     
                  <div className="half-vertical-content position-relative" data-aos="fade-up"> 
                  <h3 className=""><span className="text-section-two">Value</span></h3>
                    <h4>Multiple Offers</h4>
                    <h4>Competitive Rates</h4>
                    <h4>Fast Processing</h4>   
                    <h4>Reduced Time & Effort</h4>
                    <h4>Transparency </h4>                  
                  </div>
             
      
            </div>
        </div>*/}

          <div className="row " id="contact-us">
          <div className="col-lg-6 mt-5 mincard">
            <div className="flex-width">
            <div className="side-space accordion-content" data-aos="fade-up">

            <div className="contact-content mt-4 mb-4">
              <h6 className="text-theme">FAQs</h6>
              <h2 className="font-light"> Ask Anything</h2>
            </div>
          {/* <Accordion className="radius-card" defaultActiveKey="0"> */}
          <Accordion className="radius-card">
            <Card className="mt-2 mb-2 bg-white">
              <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white" eventKey="0">
                What are the financial benefits of solar?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body><p>When you install solar on your property, you generate your own power and save money on your electricity bills and protect yourself against rising costs of electricity. Our consumers typically save between 20%-60% on their energy bills depending on their electricity tariff and mode of financing. </p></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mt-2 mb-2">
              <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white" eventKey="1">
                What are my solar financing options?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body><p>Discover tailored make funding options for your project – depending on your eligibility we offer collateral free short term financing, low cost terms loans or long term Power Purchase Agreement requiring no upfront investment.</p> </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mt-2 mb-2">
              <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white" eventKey="2">
                Which funding option is best for me?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body><p>The decision to buy or fund your project depends on your reasons for going solar. If you are interested in maximizing your financial returns and claiming accelerated depreciation benefit, buying the system and short term lease are the best options in that order. However, if you are looking at putting up no upfront costs and enjoying maintenance free way to reduce your energy spending, you can consider solar PPAs. Get in touch to receive multiple funding offers for your project.</p> </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mt-2 mb-2">
              <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white" eventKey="3">
                What is the cost of financing for solar projects?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body><p>The cost of financing for short term lease (3-7 years) ranges from 12-15%, while the cost of financing for special long term loans ranges from 8.5% to 11%. While all lenders have collateral free schemes for financing projects, not all consumers may be eligible for this benefit. </p> </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mt-2 mb-2">
              <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white" eventKey="4">
                How do I find the most qualified installation partner for my project?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body><p>The Welfund team has expertise in funding over 300MW of projects and can help you discover the most qualified installation contractors for your project providing high quality equipment and guarantees to back their claims. Get in touch with us to know more about how you can receive multiple quotes for your project.</p> </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mt-2 mb-2">
              <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white" eventKey="5">
                What geographies does Welfund cover for project funding?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body><p>We are presently operational in India. </p> </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="mt-2 mb-2">
              <Accordion.Toggle as={Card.Header} className="cursor-pointer bg-white" eventKey="6">
                How can I partner with Welfund to help my customers get funding?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body><p>We work with EPC partners and Energy Consultants to help discover funding for their clients. To find out more about how you can partner with us, contact us <a href="https://project.welfund.org/login">here.</a></p> </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </div>
          </div>
        </div>
          {/* <div className="col-lg-6 bg-theme">
            <div className="side-space">
              <div className="form-card my-5"  data-aos="fade-up">
                <h4 className="text-center font-light text-white">Contact Us</h4>
                <hr/>
                <Contactus lead_type={this.state.lead_type} />
                </div>
              </div>
          </div>                  */}
          <div className="col-lg-6 d-flex align-items-center mobile-hide">
          {/* <a href="https://storyset.com/business">Business illustrations by Storyset</a> */}
            <img src={FAQs_bro} className="altimg mt-5 pt-5 d-block mx-auto" data-aos="fade-up" alt="FAQ's"/>
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