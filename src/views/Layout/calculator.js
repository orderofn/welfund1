import React, { Component } from "react";
import calculatorBg from '../../assets/images/calculator_bg.png';
import utility from '../../assets/images/utility.png';
import pincodeImg from '../../assets/images/pincode.png';
import rooftopImg from '../../assets/images/rooftop.png';
import inrImg from '../../assets/images/inr.png';
import bgWave from '../../assets/images/Asset 1@1.5x.png';
// import { CChart } from '@coreui/react-chartjs'
import CalcService from "../../Services/calc.service"

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: "",
      monthlyBillRange: "1000",
      monthlyBill: "",
      roofTopArea: "",
      roofTopRange: "500",
      tariffType: "",
      loanReq: true,
      emiCalculation: [],
      solarCalculation: [],
      subsidy: "",
      // showingResult: false,
      discom: []
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onTextChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    // if (event.target.name === "roofTopRange") {
    //   this.setState({ roofTopArea: event.target.value });
    // }

    // if (event.target.name === "monthlyBillRange") {
    //   this.setState({ monthlyBill: event.target.value });
    // }

    if (event.target.name === "loanReq") {
      let statusCheck = !this.state.loanReq;
      this.setState({
        loanReq: statusCheck
      })
    }

    if (event.target.name === "monthlyBill") {
      this.setState({
        monthlyBillRange: event.target.value
      })
    }

    if (event.target.name === "roofTopArea") {
      this.setState({
        roofTopRange: event.target.value
      })
    }

    if (event.target.name === "pincode" && event.target.value.length === 6) {
      this.getUtility(event.target.value);
    }


  };

  onradioChange = (event) => {
    this.setState({
      tariffType: event.target.value
    })
  }

  async submitForm() {
    let { monthlyBill, roofTopArea, tariffType, pincode } = this.state;
    // let TariffType = !tariffType ? "residential" : "commercial";
    monthlyBill = monthlyBill.replace(/[^\w\s]/gi, '');
    roofTopArea = roofTopArea.replace(/[^\w\s]/gi, '');

    try {
      if (monthlyBill !== "" && roofTopArea !== "" && tariffType !== "") {
        let data = {
          avg_bill: monthlyBill,
          roof_top_area: roofTopArea,
          calculation_for: tariffType,
        };
        let response = await CalcService.welfundCalculator(data);
        this.checkingResponse(response);
      } else {
        let msg = pincode === "" ? "Please enter Pincode" : monthlyBill === "" ? "Please enter Monthly Bill" : roofTopArea === "" ? "Please enter Rooftop area (in Sq.ft)" : "Please select customer category";
        alert(msg);
      }
    } catch (error) {
      console.log(error);
    }
  }

  checkingResponse(response) {
    if (response.status === true) {
      this.setState({
        emiCalculation: response.data.EMI_Calculation,
        solarCalculation: response.data.solar_calculator,
        subsidy: response.data.subsidy,
        // showingResult: true
      });
    } else {
      alert(response.message);
    }
  }

  async getUtility(pincode) {
    try {
      // let data = {
      //   pincode: pincode
      // };
      let response = await CalcService.getUtility(pincode);
      if (response.status) {
        // console.log(response.data);
        this.setState({
          discom: response.data
        });
      } else {
        alert(response.message);
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { monthlyBill, roofTopArea, emiCalculation,
      solarCalculation, subsidy, pincode, discom } = this.state;
    return (
      <>
        <div className="full-height">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 side-space d-flex align-items-center justify-content-center">
                <img src={calculatorBg} className="col-lg-10 d-block my-4 mx-auto" alt="" />
              </div>
              <div className="col-lg-6 side-space d-flex align-items-center">
                <div className="brw">
                  {/* <span className="btn btn-calculator mb-3">Welfund Solar Calculator</span> */}
                  <h2 className="f-42 mb-3">Find the best rooftop solar solution</h2>
                  <p className="lh-30">The Welfund Solar Calculator is a simple online tool that enables you to determine the required solar capacity based on your EB Bill and the rooftop area for your premises. On the basis of the price of your rooftop solar system, interest and tenor, it will also provide you an estimate of equated monthly instalments (EMIs).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={bgWave} className="bg-wave" alt="welfund score" />
        <div className="row bg-light-grey" id="welfund-calculator">
          {/* <div className="col-lg-12"> */}
          <div className="content side-space" data-aos="fade-up">
            <h3 className="mt-1 mb-3">Welfund Solar Calculator</h3>
            {/* <p>Get the estimated EMI you can have for solar power system. It is simple & easy, just need to fill the budget you are planning to spend or cost of your required solar power system & select your bank.</p> */}
            <div className="row">
              <div className="col-lg-4 mb-3 d-flex align-items-stretch form-calc">
                <div className="calc-card">
                  {/* Pincode */}
                  <div className="form-group">
                    <label>Pincode</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                        <img src={pincodeImg} alt="Pincode" />                       
                        </span>
                      </div>
                      <input type="text" name="pincode" className="form-control" placeholder="Pincode"
                        value={pincode}
                        onChange={this.onTextChange}
                      />
                    </div>
                  </div>
                  {/* Discom */}
                  {
                    discom.length > 0 ?
                      <div className="form-group">
                        <label>DISCOM</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">
                            <img src={utility} alt="Utility" />
                            </label>
                          </div>

                          <select defaultValue="1" className="custom-select" id="inputGroupSelect01">

                            {
                              discom.map((x, y) =>
                                <option key={y}>{x}</option>)
                            }
                          </select>
                        </div>
                      </div>
                      : null
                  }
                  {/* Monthly Bill */}
                  <div className="form-group">
                    <label>Monthly Bill</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                        <img src={inrImg} alt="Monthly Bill" />
                        </span>
                      </div>
                      <input type="text" name="monthlyBill" className="form-control" placeholder="Monthly Bill"
                        value={monthlyBill}
                        onChange={this.onTextChange}
                      />
                    </div>
                  </div>
                  {/* Rooftop area (in Sq.ft) */}
                  <div className="form-group">
                    <label>Rooftop area (in Sq.ft)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                        <img src={rooftopImg} alt="Rooftop" />
                        </span>
                      </div>
                      <input type="text" name="roofTopArea" className="form-control" placeholder="Rooftop area (in Sq.ft)"
                        value={roofTopArea}
                        onChange={this.onTextChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Customer Category</label>
                    <div className="d-flex">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="tariffType" id="residential"
                          value="residential"
                          onChange={this.onradioChange}
                        />
                        <label className="form-check-label" htmlFor="residential">
                          Residential
                        </label>
                      </div>
                      <div className="form-check ml-2">
                        <input className="form-check-input" type="radio" name="tariffType" id="commercial"
                          value="commercial"
                          onChange={this.onradioChange} />
                        <label className="form-check-label" htmlFor="commercial">
                          Commercial
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <div className="form-group">
                      <span className="btn btn-theme text-uppercase f-14" onClick={this.submitForm}>Calculate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 d-flex align-items-stretch op-calc">
                <div className="calc-card">
                  <h5 className="mt-1 mb-4 text-center">Solar Calculation</h5>
                  <div className="col-lg-12 border-bottom pb-2">
                    <p><b>Capacity of the Solar Plant (in kW)</b></p>
                    <h5>
                      {
                        solarCalculation["Solar Power Plant Capacity"] ?
                          solarCalculation["Solar Power Plant Capacity"] : 0
                      }
                    </h5>
                  </div>
                  <div className="col-lg-12 mt-4 border-bottom pb-2">
                    <p><b>Cost of the Solar Plant<span className="ml-2">(Incl. GST)</span></b></p>
                    <h5><i className="fa fa-inr mr-2"></i>
                      {
                        emiCalculation["Project Value with GST"] ?
                          emiCalculation["Project Value with GST"] : 0
                      }
                    </h5>
                  </div>
                  {subsidy ?
                    <div className="col-lg-12 mt-4 border-bottom pb-2">
                      <p><b>Subsidy Amount</b></p>
                      <h5><i className="fa fa-inr mr-2"></i>{subsidy.subsidy_amount}</h5>
                    </div>
                    : null
                  }
                </div>
              </div>
              <div className="col-lg-4 mb-3 d-flex align-items-stretch op-calc">
                <div className="calc-card">
                  <h5 className="mt-1 mb-4 text-center">EMI Calculation </h5>
                  <div className="col-lg-12 border-bottom pb-2">
                    <p><b>Your Loan Amount</b></p>
                    <h5><i className="fa fa-inr mr-2"></i>
                      {
                        emiCalculation["Loan Amount"] ?
                          emiCalculation["Loan Amount"] : 0
                      }
                    </h5>
                  </div>
                  <div className="col-lg-12 mt-4 border-bottom pb-2">
                    <p><b>Interest Rate and Tenor</b></p>
                    <h5>
                      {
                        emiCalculation["Interest Rate"] ?
                          emiCalculation["Interest Rate"] : 0
                      }<span> ({emiCalculation["Tenure (Years)"]} years)</span>
                    </h5>
                  </div>
                  <div className="col-lg-12 mt-4 border-bottom pb-2">
                    <p><b>Down Payment</b></p>
                    <h5><i className="fa fa-inr mr-2"></i>
                      {
                        emiCalculation["Initial Payment"] ?
                          emiCalculation["Initial Payment"] : 0
                      }
                    </h5>
                  </div>
                  <div className="col-lg-12 mt-4 border-bottom pb-2">
                    <p><b>EMI</b></p>
                    <h5><i className="fa fa-inr mr-2"></i>
                      {
                        emiCalculation["EMI"] ?
                          emiCalculation["EMI"] : 0
                      }
                    </h5>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                <div className="calc-card">
                  <h5 className="mt-1 mb-3 text-center">EMI Calculation </h5>
                  <div className="calcScore text-center">
                    <h6 className="mt-1 mb-3">Your Loan Amount</h6>
                    <h4><i className="fa fa-inr mr-2"></i>
                      {
                        emiCalculation["Loan Amount"] ?
                          emiCalculation["Loan Amount"] : 0
                      }
                    </h4>
                  </div>
                  <div className="botScore text-center mt-4">
                    <h6 className="green-banner">Interest Rate and Tenor</h6>
                    <h4>
                      {
                        emiCalculation["Interest Rate"] ?
                          emiCalculation["Interest Rate"] : 0
                      }<span>( {emiCalculation["Tenure (Years)"]} years)</span>
                    </h4>
                    <h6 className="green-banner mt-4">Down Payment</h6>
                    <h4><i className="fa fa-inr mr-2"></i>
                      {
                        emiCalculation["Initial Payment"] ?
                          emiCalculation["Initial Payment"] : 0
                      }
                    </h4>
                    <h6 className="green-banner mt-4">EMI</h6>
                    <h4><i className="fa fa-inr mr-2"></i>
                      {
                        emiCalculation["EMI"] ?
                          emiCalculation["EMI"] : 0
                      }
                    </h4>
                  </div>                  
                </div>
              </div> */}
              <div className="col-lg-12">
                <p><b>Disclaimer:</b> The above calculation is subject to change based on the Site Survey, net metering policy of the state and credit rating of the customer.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}



export default Calculator;
