import React, { Component } from "react";
import Contact from "../../assets/images/contact.svg";
import Mail from "../../assets/images/mail-new.svg";
// import Fb from "../../assets/images/fb.svg";
// import Twitter from "../../assets/images/twitter.svg";
// import Insta from "../../assets/images/linkedin.svg";
// import Send from "../../assets/images/send.svg";
// import logoWhite from "../../assets/images/altier-white.svg";
import { Nav } from "react-bootstrap";
// import HubspotForm from "react-hubspot-form";
import "../../assets/css/App.css";
// import { useForm } from "react-hook-form";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      setShow: false,
      setMessage: false,
    };

    this.handleChange = this.onSubmitEmail.bind(this);
  }
  componentDidMount() {
    // const script = document.createElement("script");
    // script.src = "https://use.typekit.net/foobar.js";
    // script.async = true;
    // document.body.appendChild(script);
    // const cssLink = document.createElement("link");
    // cssLink.href = "style.css";
    // cssLink.rel = "stylesheet";
    // cssLink.type = "text/css";
    // frames['iframe1'].document.head.appendChild(cssLink);
  }

  handleClose() {
    this.setState({
      setShow: false,
    });
  }

  onSubmitEmail(data, e) {
    var xhr = new XMLHttpRequest();
    var url =
      "https://api.hsforms.com/submissions/v3/integration/submit/381510/a14474d3-8b5a-4392-9713-c806454971a6";
    var sendData = {
      fields: [
        {
          name: "email",
          value: data.email,
        },
      ],
    };
    var finel_data = JSON.stringify(sendData);
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          setMessage: xhr.responseText.split('"', 4)[3],
          setShow: true,
        });
        e.target.reset();
      } else if (xhr.readyState === 4 && xhr.status === 400) {
        this.setState({
          setMessage: JSON.parse(xhr.responseText).errors[0].message,
          setShow: true,
        });
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        this.setState({
          setMessage: xhr.responseText,
          setShow: true,
        });
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        this.setState({
          setMessage: xhr.responseText,
          setShow: true,
        });
      }
    };
    xhr.send(finel_data);
  }

  render() {
    return (
      <footer>
        <div className="row footer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-5 col-12">
                <h5 className="text-white mb-4 f-18">
                  Enabling transition to a sustainable energy future by
                  delivering access to capital
                </h5>
                <p className="f-16 text-justify footer-para">
                  At Welfund, we partner with leading solar developers, EPCs,
                  financial institutions and investors to help source and
                  finance sustainability projects for governments, businesses,
                  SMEs, non-profits, communities and homeowners.
                </p>
                <div className="row text-white footer-icon mb-5 ">
                  <div className="col-lg-6 col-6">
                  <a aria-label="Chat on WhatsApp" href="https://wa.me/+917305970276" target="_blank" rel="noopener noreferrer">
                      <img src={Contact} className="mt-2 mb-2" alt="" />+91 73059 70276
                    </a>
                  </div>
                  <div className="col-lg-6 col-6">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@welfund.org" target="_blank" rel="noopener noreferrer">
                      <img src={Mail} className="mt-2 mb-2" alt="" />{" "}
                      contact@welfund.org
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <h5 className="text-white mb-3 f-18">Useful Links</h5>
                <p className="footer-para">
                  <Nav.Link className="text-white" href="/">
                    Home
                  </Nav.Link>
                </p>
                <p className="footer-para">
                  <Nav.Link className="text-white" href="/invest">
                    Invest
                  </Nav.Link>
                </p>
                <p className="footer-para">
                  <Nav.Link className="text-white" href="/projects">
                    Get Funded
                  </Nav.Link>
                </p>
                {/*<p className="footer-para">*/}
                {/*  <Nav.Link*/}
                {/*    className="text-white"*/}
                {/*    href="https://altierenergy.blogspot.com/"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*  >*/}
                {/*    Blog*/}
                {/*  </Nav.Link>*/}
                {/*</p>*/}
                <p className="footer-para">
                  <Nav.Link className="text-white" href="/privacy-policy">
                    Privacy Policy
                  </Nav.Link>
                </p>
                <p className="footer-para">
                  <Nav.Link className="text-white" href="/terms-and-conditions">
                    Terms & Conditions
                  </Nav.Link>
                </p>
                <p className="footer-para">
                  <Nav.Link className="text-white" href="/faqs">
                    FAQS
                  </Nav.Link>
                </p>
              </div>
              <div className="col-lg-4 col-6">
              
                {/* <h5 className="text-white mb-5 f-18"> Newsletter</h5> */}
                {/* <div className="input-group mb-3 newsletter">
                    {<HubspotForm
                      portalId='8079131'
                      formId='77b48057-1189-492b-bef9-a6f5f5403570'
                      onSubmit={
                        () =>  console.log('Submit!')
                      }
                      onReady={
                        (form) => console.log('Form ready!')
                      }
                      loading={
                        <div>Loading...</div>
                      }
                    />
                    }
                </div> */}


                {/* <a href="https://share.hsforms.com/1d7SAVxGJSSu--ab19UA1cA4t5wb"></a> */}
                
                {/*<h6 className="text-white">Subscribe Us</h6>*/}
                {/*<div className="input-group mb-3 newsletter">*/}
                { /*<div className="input-group mb-3 newsletter">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <div className="input-group-append ">
                    <span className="input-group-text bg-theme text-white border-0 px-3 py-3">
                      <a href="https://share.hsforms.com/1d7SAVxGJSSu--ab19UA1cA4t5wb">
                        <img src={Send} className="" alt="" />
                      </a>
                    </span>
                  </div>
                </div>
               */}
               {/*{<HubspotForm*/}
               {/*                 portalId='8079131'*/}
               {/*                 formId='77b48057-1189-492b-bef9-a6f5f5403570'*/}
               {/*                 onSubmit={*/}
               {/*                   () =>  console.log('Submit!')*/}
               {/*                 }*/}
               {/*                 onReady={*/}
               {/*                   (form) => console.log('Form ready!')*/}
               {/*                 }*/}
               {/*                 loading={*/}
               {/*                   <div>Loading...</div>*/}
               {/*                 }*/}
               {/*             /> }*/}
               {/* </div>*/}
                <h6 className="text-white mb-3">Social Links</h6>
                <ul className="social-network social-circle">
                  <li><a href="https://www.facebook.com/Welfund-107022755484893/?ref=pages_you_manage" target="_blank" className="icoFacebook" title="Facebook" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://in.linkedin.com/company/welfund-climate-technology-advisory?trk=public_profile_topcard-current-company" className="icoLinkedin" target="_blank" title="Linkedin" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com/_welfund_/" className="icoInsta" target="_blank" title="Instagram" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCXSsyQwZowhSLveEQNnU1tw" className="icoYoutube" target="_blank" title="YouTube" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>
                  <li><a href="https://twitter.com/Welfund_Climate" className="icotwitter" target="_blank" title="Twitter" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                </ul>	
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-secondary-theme">
          <h6 className=" font-light mx-auto d-block text-white f-14 mb-0">
            Copyright &#169; 2022 Welfund Climate Technology Advisory Private Limited
          </h6>
        </div>
      </footer>
    );
  }
}
export default Footer;
