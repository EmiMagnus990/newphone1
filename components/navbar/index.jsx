import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget";

const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <div>
                    <Navbar.brand href="#home">NEWphone</Navbar.brand>
                    <a href="#" className="link1">Tienda</a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <a href="#" className="numeroCarritoNav"></a>
                </div>
            </Container>
        </Navbar>
    )
}