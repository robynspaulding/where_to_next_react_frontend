import { LogoutLink } from "./LogoutLink";
import { useState } from "react";
import { Modal } from "./Modal";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { TripsNew } from "./TripsNew";
import { Search } from "./Search";

export function Header() {
  const [isNewTripVisible, setIsNewTripVisible] = useState(false);

  const handleNewTripShow = () => {
    setIsNewTripVisible(true);
  };

  const handleNewTripClose = () => {
    setIsNewTripVisible(false);
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchShow = () => {
    setIsSearchVisible(true);
  };

  const handleSearchClose = () => {
    setIsSearchVisible(false);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Modal show={isNewTripVisible} onClose={handleNewTripClose}>
        <TripsNew />
      </Modal>
      <Modal show={isSearchVisible} onClose={handleSearchClose}>
        <Search />
      </Modal>
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" width="70" height="50" className="d-inline-block align-top" alt="" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">All My Trips</Nav.Link>
          <Nav.Link href="#" onClick={handleNewTripShow}>
            Add New Trip
          </Nav.Link>
          <Nav.Link href="#" onClick={handleSearchShow}>
            Search
          </Nav.Link>
        </Nav>
        <Nav className="logout">
          <Nav.Link>
            {localStorage.jwt === undefined ? (
              <></>
            ) : (
              <Nav.Link>
                <LogoutLink />
              </Nav.Link>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
