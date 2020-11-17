import React from 'react';
import hosting from '../img/hosting.svg';
import icon1 from '../img/icon1.svg';
import icon2 from '../img/icon2.svg';
import idea from '../img/idea.svg';
import photo from '../img/photo.jpg';

const Services = () => {
  return (
    <div className='services'>
      <div className="content">
        <h2>High <span>quality</span> services</h2>
        <div className="cards">

          <div className="card">
            <div className="icon">
              <img src={hosting} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={idea} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={icon1} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={icon2} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

        </div>
      </div>
      <div className="image">
        <img src={photo} alt="photo"/>
      </div>
    </div>
  )
}

export default Services
