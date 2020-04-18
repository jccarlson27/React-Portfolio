import React from 'react';

function Contact() {
    return (
        <main id="swup" className="transition-fade">
            <div className="bdContact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-12">
                            <div className="card card-design ">
                                <h1 className="display-4 text-wrap" style={{ color: "aliceblue" }}>Stay Connected</h1>
                                <div className="row">
                                    <div className="col-1">
                                        <p className="textintobox text-nowrap fa fa-google"> :</p>
                                    </div>
                                    <div className="col-11">
                                        <p className="textintobox">jim.carlson827@gmail.com</p>
                                    </div>
                                    <div className="col-1">
                                        <p className="textintobox text-nowrap fa fa-phone"> :</p>
                                    </div>
                                    <div className="col-11">
                                        <p className="textintobox">(480-215-4083)</p>
                                    </div>
                                    <div className="col-1">
                                        <p className="textintobox text-nowrap fa fa-linkedin"> :</p>
                                    </div>
                                    <div className="col-11">
                                        <p className="textintobox">JC Carlson</p>
                                    </div>
                                    <div className="col-1">
                                        <p className="textintobox text-nowrap fa fa-github"> :</p>
                                    </div>
                                    <div className="col-11">
                                        <p className="textintobox">jccarlson27</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 offset-lg-4 offset-md-2 col-sm-12">
                            <div className="card card-design">
                                <h1 className="display-4 text-nowrap" style={{ color: "aliceblue" }}>Contact</h1>
                                <form name="contact" method="POST" data-netlify="true">
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput" style={{color: "aliceblue"}}>Name</label>
                                        <input type="text" className="form-control" name="name" id="formGroupExampleInput" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1" style={{ color: "aliceblue" }}>Email
                                        address</label>
                                        <input type="email" name="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="name@example.com" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1" style={{ color: "aliceblue" }}>Message</label>
                                        <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="7"></textarea>
                                    </div>
                                    <div className="text-right">
                                        <button id="generate" type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;