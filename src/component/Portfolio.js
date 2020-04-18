import React from 'react';
import OTRFImg from "../images/Annotation 2020-01-23 180942.png";
import TapThatImg from "../images/Annotation 2020-03-21 113909.png";
import PassGenImg from "../images/Annotation 2020-01-23 181953.png";
import DayPlanner from "../images/Annotation 2020-01-23 182532.png";
import BurgerAp from '../images/Burger activity.png';
import Weatherap from "../images/weather ap.png";

function Portfolio() {
    return (
        <main id="swup" className="transition-fade">
            <div className="container bdPort" style={{ marginTop: "5rem" }}>
                <h1 className="display-4 text-center">Portfolio</h1>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6 mb-3 col-sm-12">
                        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
                            <img src={OTRFImg} className="card-img-top" alt="image1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">On The Right Foot</h5>
                                <p className="card-text">An app developed to help people wake up in the morning and get all of
                                their daily needs in one place.</p>
                                <a href="https://evan-m-py.github.io/projectOne/#" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Site</a>
                                <a href="https://github.com/Evan-M-Py/projectOne" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 col-sm-12">
                        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
                            <img src={TapThatImg} className="card-img-top" alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">TapThat</h5>
                                <p className="card-text">App developed for beer lovers everywhere.</p>
                                <a href="https://tapthatcorona.herokuapp.com/Beer.html" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View
                                Site</a>
                                <a href="https://github.com/HOWBZR/TapThat" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View
                                Repo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 col-sm-12">
                        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
                            <img src={PassGenImg} className="card-img-top" alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Password Generator</h5>
                                <p className="card-text">App developed to help make raondom pasword with customized options.</p>
                                <a href="https://jccarlson27.github.io/HW-3W-Passord-Generator/" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View
                                Project</a>
                                <a href="https://github.com/jccarlson27/HW-3W-Passord-Generator" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View
                                Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 col-sm-12">
                        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
                            <img src={DayPlanner} className="card-img-top" alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Day Planner</h5>
                                <p className="card-text">Day planner that helps you crate tasks and complete them throughout
                                your day</p>
                                <a href="https://jccarlson27.github.io/HW-W5-Third-Party-API-DayPlanner/" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Project</a>
                                <a href="https://github.com/jccarlson27/HW-W5-Third-Party-API-DayPlanner" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Repo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 col-sm-12">
                        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
                            <img src={BurgerAp} className="card-img-top" alt="..." height="200px"
                                width="200px"/>
                            <div className="card-body">
                                <h5 className="card-title">Burger Ap</h5>
                                <p className="card-text">Pick a burger. Buy a Burger. Eat a Burger.</p>
                                <a href="https://boiling-sea-54354.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Project</a>
                                <a href="https://github.com/jccarlson27/HW-W13-NodeExpressHandlebars-Burger" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 col-sm-12">
                        <div className="card h-100 shadow p-3 mb-5 bg-white rounded">
                            <img src={Weatherap} className="card-img-top" alt="weather" />
                            <div className="card-body">
                                <h5 className="card-title">Weather API</h5>
                                <p className="card-text">This ap lets you see the weather and saves local storage info so you
                                can see your favorite cities .</p>
                                <a href="https://jccarlson27.github.io/HW-W6-Server-Side-APIs/" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Project</a>
                                <a href="https://github.com/jccarlson27/HW-W6-Server-Side-APIs" target="_blank" rel="noopener noreferrer"
                                    className="btn btn-primary">View Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Portfolio;