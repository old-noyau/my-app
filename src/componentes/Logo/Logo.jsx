import React from 'react'
import styled from "styled-components";
import "../Logo/Logo.css";
import { useNavigate } from 'react-router-dom';
import { RiHome7Fill } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
const Logo = () => {
  const navigate = useNavigate();
    const goToBasePage = () => {
      window.location.reload(); 
        navigate('/Base'); // Navigate to the /Base route
    };
  
  document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('RotateButton');
    const child = document.querySelector('button');

    child.addEventListener('mouseenter', () => {
        parent.style.backgroundColor = '#e74c3c'; // Change the parent's background color
    });

    child.addEventListener('mouseleave', () => {
        parent.style.backgroundColor = '#3498db'; // Revert to the original color
    });
});
  setInterval(()=>{
    if(document.querySelector("header")){
      document.querySelector("header").remove()
    }
  },10)
  return (
    <Noyaubase className="d-flex justify-content-center allign-items-center">
    <NoyauToggle>
      <RotateButton href="/Base" onClick={goToBasePage} id="btnA">
      
        <button onClick={goToBasePage} className="btn text-light"><RiHome7Fill style={{fontSize: 35}}/></button>
      
      </RotateButton>
      <RotateButton href="#" id="btnB">
        <button className="btn text-light"><VscGithubAlt style={{fontSize: 35}} /></button>
      </RotateButton>
      <RotateButton href="#" id="btnC">
        <button className="btn text-light"><RiInstagramLine style={{fontSize: 35}} /></button>
      </RotateButton>
      <RotateButton href="#" id="btnD">
        <button className="btn text-light"><RxDiscordLogo style={{fontSize: 35}} /></button>
      </RotateButton>
     

    <NoyauRotate>
      <img className="rounded-circle" src="../images/noyau.jpeg" alt="" width={300} />
    </NoyauRotate>
    
    </NoyauToggle>
    </Noyaubase>
  )
}
const RotateButton = styled.a`
position: absolute;
border-top-right-radius: 15%;
border-top-left-radius: 15%;
text-align: center;
background-color: #1f1e25;
height: 200px;
width: 100px;
transform-origin: bottom;
border: 1px solid white;

`;
const NoyauToggle = styled.div`
border: 1px solid black;
border-radius: 50%;
color: white;
background-color: #1f1e25;
width: 400px;
height: 400px;
display: flex;
justify-content: center;


/* align-items: center; */
#btnA{
  z-index: 1;
  animation: heA .9s linear .5s;
}
#btnB{
  transform: rotateZ(35deg);
  animation: heB .9s linear .5s;
}
#btnC{
  transform: rotateZ(65deg);
  animation: heC .9s linear .5s;
}
#btnD{
  transform: rotateZ(95deg);
  animation: heD .9s linear .5s;
}
@keyframes heA {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@keyframes heB {
  from{
    opacity: 0;
    transform: rotateZ(0deg);

  }
  to{
    opacity: 1;
    transform: rotateZ(35deg);
  }
}
@keyframes heC {
  from{
    transform: rotateZ(0deg);
    opacity: 0;
  }
  to{
    opacity: 1;
    transform: rotateZ(65deg);
  }
}
@keyframes heD {
  from{
    opacity: 0;
    transform: rotateZ(0deg);
  }
  to{
    opacity: 1;
    transform: rotateZ(95deg);
  }
}



`;


const NoyauRotate = styled.div`
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
width: 300px;
animation: rotate 99s linear infinite;
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const Noyaubase = styled.main`
height: 100vh;
justify-content: center;
align-items: center;

position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(45deg, #000000, #434343);
background-size: 400% 400%;
animation: gradientAnimation 10s ease infinite;

@keyframes gradientAnimation {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}
`;
export default Logo;
