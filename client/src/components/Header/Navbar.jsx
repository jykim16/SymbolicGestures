import React from 'react'
import styles from './../../../styles/navbarStyles.css'
import {Navbar,
  Nav,
  NavItem,
  MenuItem} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Navbar fixedTop fluid className={this.props.navBarIsHidden ? styles.hidden : styles.displayed}>
          <Navbar.Header>
            <Navbar.Brand style={{padding: "0px 0px", display: "flex"}} href="/">
              <a className={styles.brand} href="/"></a>
              <a className={styles.logo} href="/">Offer Overflow</a>
            </Navbar.Brand>
            <Navbar.Toggle style={{margin: "20px 10px 0px 0px"}}/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}><Link to="/">Applications</Link></NavItem>
              <NavItem eventKey={2}><Link to="/analytics">Analytics</Link></NavItem>
              <NavItem eventKey={3}><Link to="/connect">Connect</Link></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#Settings">Settings</NavItem>
              <NavItem eventKey={1} href="/logout">Log Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;

Header.propTypes = {
  navBarIsHidden: PropTypes.bool
}
