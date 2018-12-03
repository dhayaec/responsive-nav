import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const active = isOpen ? "active" : "";
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <span onClick={this.toggle} className="navbar-toggle">
              &#x2630;
            </span>
            <div className="menu-container">
              <div>
                <a href="/" className="logo">
                  GreenApp
                </a>
              </div>
              <div className="nav-links">
                <ul className={`main-nav ${active}`} id="js-menu">
                  <li>
                    <a href="/" className="nav-links">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-links">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-links">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-links">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-links">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="wrapper">
          <h1>Welcome</h1>
          <h2>This is an example text</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dicta
            ducimus quaerat quasi? Consequatur, nesciunt illo incidunt nemo
            consequuntur veritatis voluptates aut, sed nobis quis consectetur
            quisquam, aliquam quibusdam totam.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
