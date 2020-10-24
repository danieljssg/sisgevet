import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonToggle,
  Button
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="navbar">
        
        <NavbarBrand className="navbar-brand" color="pink" href="/"><i class="fas fa-heartbeat"></i> Sisgevet</NavbarBrand>
        
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>
              <i class="fas fa-users"></i> Clientes
              </DropdownToggle>
              <DropdownMenu right>
                  
              <DropdownItem header> 
              Clientes 
              </DropdownItem>

                <DropdownItem>
                    <NavLink href="/cliente">Añadir Clientes</NavLink>
                </DropdownItem>

                <DropdownItem>
                    <NavLink href="/cliente">Consultar Clientes</NavLink>
                </DropdownItem>

                <DropdownItem>
                    <NavLink href="/cliente">Modificar Clientes</NavLink>
                </DropdownItem>

              </DropdownMenu>

            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>

              <ion-icon name="paw"/> Mascotas

              </DropdownToggle>

              <DropdownMenu right>
                  
              <DropdownItem header> 
              Mascotas 
              </DropdownItem>

                <DropdownItem>
                    <NavLink href="/mascota">Añadir Mascota</NavLink>
                </DropdownItem>

                <DropdownItem>
                    <NavLink href="/mascota">Consultar Mascota</NavLink>
                </DropdownItem>

                <DropdownItem>
                    <NavLink href="/mascota">Modificar Mascota</NavLink>
                </DropdownItem>
              </DropdownMenu>

            </UncontrolledDropdown>

          </Nav>

          <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>

          
            <DropdownToggle nav caret type="button">
            
            <i class="fas fa-user-circle"></i>

            </DropdownToggle>
     
 
              <DropdownMenu right>

                <DropdownItem>
                    Perfil
                </DropdownItem>

                <DropdownItem>
                    Configuración
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  Cerrar Sesión
                </DropdownItem>
              </DropdownMenu>

            </UncontrolledDropdown>
        </Nav>

        </Collapse>

      </Navbar>
    </div>
  );
}

export default NavbarComponent;