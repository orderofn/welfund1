import React, { Component } from 'react';

import '../../assets/fonts/Gotham-Light.otf'
import '../../assets/fonts/GothamBook.ttf'
import '../../assets/fonts/GothamMedium.ttf'
import '../../assets/fonts/Gotham-Bold.otf'
import '../../assets/fonts/Gotham-Black.otf'

import { Form } from 'react-bootstrap';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import Contactus from './ContactUs';
import HubspotForm from 'react-hubspot-form'

class ContactUs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newLead: {
        lead_type : '',
        f_name: '',
        l_name: '',
        organisation: '',
        email_id: '',
        phone: ''
      }
    }
    console.log(this.props)
    this.updateState = this.updateState.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //this.handleClearForm = this.handleClearForm.bind(this);
  }
  updateState(e) {
    this.setState({newLead: e.target.value});
 }
  handleFormSubmit(e) {
    window.location.href = "/thankyou"
    e.preventDefault();
    let newLead = this.state.newLead;
    fetch('https://admin.altier.co/api/contactus', {
        method: "POST",
        body: JSON.stringify(newLead),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    }).then(response => {
        window.location.href = "/thankyou"
        response.json().then(data => {
          console.log("Successful" + data);
        })
    })
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.newLead
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedOrderForm[inputIdentifier] = event.target.value;
    this.setState({newLead: updatedOrderForm});
  }
  render() {
    // dff01da2-ea2e-4635-ae6a-960f30eaad68
    return (      
      <div className="card card-radius">
        <div className="card-body position-relative forms">
          {/*<div className="form-upper">
              </div>
              <div className="form-down">
          </div>*/}

        <HubspotForm
          portalId='8079131'
          formId='c36a32d1-05c5-41d8-9887-9193ad57bdaf'
          onSubmit={
            () => this.handleFormSubmit 
          }
          onReady={
            (form) => console.log('Form ready!')
          }
          loading={
            <div>Loading...</div>
          }
        />

          {/* <Form className="font-light" onSubmit={this.handleFormSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>I Am... </Form.Label>
              <Form.Control as="select" name="lead_type" value = {this.state.newLead.lead_type} onChange={(event) => this.inputChangedHandler(event, "lead_type")} >
              <option value="">Please Select</option>
                {this.props.lead_type.map(lt => {
                  return <option value={lt.id}>{lt.value}</option>
                })}
              </Form.Control>
            </Form.Group>

            <div className="row"><div className="col-lg-6"><Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text"  name="f_name" value = {this.state.newLead.complete_name} onChange={(event) => this.inputChangedHandler(event, "f_name")}  />
            </Form.Group></div>
            <div className="col-lg-6"><Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"  name="l_name" value = {this.state.newLead.complete_name} onChange={(event) => this.inputChangedHandler(event, "l_name")}  />
            </Form.Group></div>
            </div>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Organization</Form.Label>
              <Form.Control type="text" name="organisation" value = {this.state.newLead.complete_name} onChange={(event) => this.inputChangedHandler(event, "organisation")}  />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  name="email_id" value = {this.state.newLead.email_id} onChange={(event) => this.inputChangedHandler(event, "email_id")}  />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="tel" name="phone" name="phone" value = {this.state.newLead.phone} onChange={(event) => this.inputChangedHandler(event, "phone")}  />
            </Form.Group>

            <button className="btn btn-secondary btn-secondary-theme btn-block mt-5" name="lead_submit">SUBMIT</button>
          </Form> */}
        </div>
      </div>

    );
  }
}
export default ContactUs;
