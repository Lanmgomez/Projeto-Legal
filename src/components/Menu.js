// Sass
import './Menu.sass'
// hooks
import { Link } from "react-router-dom";
import { useState } from 'react';
// Carrousel
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// react icons
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { ImMenu } from "react-icons/im"

const Menu = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const ShowMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

  return (
    <nav>
        <ul id="social-medias-icons">
            <li>Social Medias:</li>
            <li><a href="#"><BsFacebook /></a></li>
            <li><a href="#"><AiFillLinkedin /></a></li>
            <li><a href="#"><AiFillGithub /></a></li>
        </ul>
        <ul id='menu-desktop'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">Sobre Nós</Link></li>
            <li><Link to="/cadastros">Cadastros</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/new-account">Nova Conta</Link></li>
        </ul>
        <ImMenu id="ImMenu" onClick={ShowMobileMenu} />
        {mobileMenu &&
            <ul id='mobileMenu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">Sobre Nós</Link></li>
                <li><Link to="/cadastros">Cadastros</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/new-account">Nova Conta</Link></li>
            </ul>
        }
    <Carousel id='carrousel'>
        <Carousel.Item>
          <img
            className='Image-One'
          />
          <Carousel.Caption>
            <h1>Projeto Legal - Algum texto aqui</h1>
                <h3>Algum subtítulo aqui - Outro subtítulo aqui</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='Image-Two'
          />
          <Carousel.Caption>
            <h1>Projeto Legal - Algum texto aqui</h1>
                <h3>Algum subtítulo aqui - Outro subtítulo aqui</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='Image-Three'
          />
          <Carousel.Caption>
            <h1>Projeto Legal - Algum texto aqui</h1>
                <h3>Algum subtítulo aqui - Outro subtítulo aqui</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='Image-Four'
          />
          <Carousel.Caption>
            <h1>Projeto Legal - Algum texto aqui</h1>
                <h3>Algum subtítulo aqui - Outro subtítulo aqui</h3>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </nav>
  )
}

export default Menu