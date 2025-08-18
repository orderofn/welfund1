import React, { Component } from "react";

class TermsAndConditions extends Component {
  render() {
    return (
      <div class="container pb-4">
        <h1 class="entry-title margin-card text-dark">TERMS AND CONDITIONS</h1>
        <div class="container">
          <p style={{ margin: "0", padding: "0" }}>
            I/We the applicant for the loan, hereby declare that,
          </p>
          <br />
          <p style={{ margin: "0", padding: "0" }}>
            The information given herein and the details in the statements and
            other papers enclosed as part of the application are, to the best of
            our knowledge and belief, true and correct in all particulars.
          </p>
          <br />
          <ol className="terms_and_cond mb-5">
            <li>No borrowing arrangements except as indicated have been made.</li>
            <li>
              I/we shall furnish all other information that may be required by
              WELFUND in connection with the application.
            </li>
            <li>
              The information pertaining to us may be exchanged by WELFUND in
              connection with the application.
            </li>
            <li>
              The present proposal of loan is not for cost overrun financing.
            </li>
            <li>
              The present proposal of loan is not for procurement of any Second-
              hand equipment and machinery.
            </li>
            <li>
              The applicant and/or main promoters of the Applicant Company have
              not been convicted for criminal/economic offences or under national
              security laws.
            </li>
            <li>The project under consideration is/ is not commissioned.</li>
            <li>
              Our dues of loan from other financial institutions are being paid on
              time as per the respective loan agreements.
            </li>
            <li>
              The Applicant shall not (nor authorize any person authorizing on his
              behalf of) engage in:
            </li>
            <ol type="a">
              <li>
                Prohibited Practice in connection with company's business and
                operations, including the procurement of the execution of any
                contract for the goods or works relating to company's business or
                the projects, including the procurement or execution of any
                contract for goods or works relating the projects.
              </li>
              <li>Obstructive Practices.</li>
              <li>
                Money Laundering, or act in breach of any applicable Law relating
                to Money Laundering.
              </li>
              <li>The Financing of Terrorism.</li>
            </ol>
            <li>
              Shall ensure that operations of the projects will be in accordance
              with the following:
            </li>
            <ol type="a">
              <li>Prudent industry Practice.</li>
              <li>
                The prevailing power industry Standards (including any applicable
                health and safety standards and regulations).
              </li>
              <li>The Environmental and social Documents.</li>
            </ol>
            <li>
              The Parent Company or the SPV have not been blacklisted by any
              government agency.
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
export default TermsAndConditions;
