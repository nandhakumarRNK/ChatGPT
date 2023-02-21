import React, { Component } from "react";

export class ErrorHomeContainer extends Component {
  goHome = () => {
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h3 className="h2">Something Went Wrong..!</h3>
                    <p>The page Not Available!</p>
                    <a href={""} className="link_404" onClick={this.goHome}>
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ErrorHomeContainer;
