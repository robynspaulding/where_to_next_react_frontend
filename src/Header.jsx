import { LogoutLink } from "./LogoutLink";
import { useState } from "react";
import { Modal } from "./Modal";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { TripsNew } from "./TripsNew";

export function Header() {
  const [isNewTripVisible, setIsNewTripVisible] = useState(false);

  const handleNewTripShow = () => {
    setIsNewTripVisible(true);
  };

  const handleNewTripClose = () => {
    setIsNewTripVisible(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Modal show={isNewTripVisible} onClose={handleNewTripClose}>
        <TripsNew onNewTripClose={handleNewTripClose} />
      </Modal>
      <Container>
        <Navbar.Brand href="/">Where To Next?</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="#" onClick={handleNewTripShow}>
            Add New Trip
          </Nav.Link>
        </Nav>
        <Nav>
          <li>
            {localStorage.jwt === undefined ? (
              <></>
            ) : (
              <li className="logout">
                <LogoutLink />
              </li>
            )}
          </li>
        </Nav>
      </Container>
    </Navbar>
  );
}
