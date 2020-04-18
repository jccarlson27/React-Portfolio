import React from 'react';

function NavBar() {
    return (
        <div className="container-fluid">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{ backroundColor: "#621d68" }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <nav className="navbar">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="/index.html">JC CARLSON</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="/portfolio.html">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="/contact.html">CONTACT</a>
                            </li>
                          
                            <li className="nav-item">
                                <a className="nav-link active text-light" href= "./JCCarlsonPortfolioResume.pdf" rel="noopener noreferrer" target="_blank">RESUME</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;