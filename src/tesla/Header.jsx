import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
 

function Header() {

const [menuState, setMenuState]  =  useState(false);

function ShowMenu(e) {
  e.preventDefault();
  setMenuState(true)
} 

function HideMenu() {
  setMenuState(false)
}

  return (
    <header> 
    <nav>
      
        <div><img className='logo' src='images/logo.svg' alt='logo-img'></img></div>
        <ul className='models'>
            <li><a href=' '>Model S </a></li>
            <li><a href=' '>Model X </a></li>
            <li><a href=' '>Model Y </a></li>
            <li><a href=' '>Model 3 </a></li>
            <li><a href=' '>Solar Roof </a></li>
            <li><a href=' '>Solar Panels </a></li>
        </ul>
        
        <ul className='about'>
            <li><a href=' '>Shop</a></li>
            <li><a href=' '>Account</a></li>
            <li onClick={(e) => ShowMenu(e, 'inc')}><a href=' '>Menu</a></li>
        </ul>

       
            <Sidebar menuOpen = {(menuState === false ? false : true)}> 

            <Closer onClick={HideMenu} />

            <li><a href=' '>Esisting Inventory</a></li>
            <li><a href=' '>Used Inventory</a></li>
            <li><a href=' '>Trade-in</a></li>
            <li><a href=' '>Demo Drive</a></li>
            <li><a href=' '>Insurance</a></li>
            <li><a href=' '>Roadster</a></li>
            <li><a href=' '>Semi</a></li>
            <li><a href=' '>Charging</a></li>
            <li><a href=' '>Power wall</a></li>
            <li><a href=' '>Find Us</a></li>
            <li><a href=' '>Investor Relations</a></li>
            </Sidebar>
     
    </nav>
    </header>
  )
}

const Sidebar = styled.ul`
  height: 100vh;
  width: 230px;
  position: fixed;
  top: -20px;
  right: ${(props) => props.menuOpen === false ? '-270px' : 0};
  color: black;
  background-color: rgba(250, 250, 250, 0.97);
  padding-top: 30px;
  list-style-type: none; 
  transition: all 0.5s ease-in-out;

  
  li {
  margin: 30px 0;
  padding: 0;


  a {
  text-decoration: none;
   color: black;
   display: inline-block
  }  
  }
   

`

const Closer = styled(CloseIcon)`
position: absolute;
right: 25px;
top: 20px;
cursor: pointer;
font-size: 2.3rem !important;
`



export default Header