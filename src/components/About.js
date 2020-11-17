import React from 'react';
import ahmed from '../img/ahmed.jpg';
// style
import styled from 'styled-components';

const About = () => {
  return (
    <StyledAbout>
      <StyleContent>

        <div className="title">
  
          <Hide>
            <h2>we work to make</h2>
          </Hide>

          <Hide>
            <h2><span>Dreams</span> come</h2>
          </Hide>

          <Hide>
            <h2>True</h2>
          </Hide>

        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum quia consequatur quidem maiores harum.</p>
        <button>Lorem, ipsum.</button>
      </StyleContent>

      <StyleImg>
        <StyleImage src={ahmed} alt="ahmed"/>
      </StyleImg>
      
    </StyledAbout>
  )
}


// styled 

const StyledAbout=  styled.div`
min-height:90vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:5rem 10rem;
color:#Fff;
`
const StyleImg=styled.div`
flex:1;
overflow:hidden;
border-radius:10px;
`
const StyleImage=styled.img`

height:80vh;
object-fit:cover;
`

const StyleContent=styled.div`
flex:1;
padding-right:5rem;

h2 {
  font-weight:lighter;
}

`
const Hide=styled.div`
overflow:hidden;
`

export default About
