import about1 from '../../assets/images/about-1.png';
import about2 from '../../assets/images/about-2.png';
import './about.scss';
import React from 'react';
const About = () => {
  return (
    <section className="about">
      <div className="about__row">
        <div className="about__text-container">
          <h2 className="about__title">Lorem ipsum dolor sit amet consectetur</h2>
          <p className="about__text">Quisque tincidunt neque orci, a condimentum dolor viverra sed. In hac habitasse
            platea dictumst. Aliquam
            ullamcorper, tellus vehicula rutrum cursus, ex dolor sagittis sapien, ac pulvinar enim dolor sed nibh.
            Nullam in ex efficitur, pellentesque felis at, gravida orci. Nunc iaculis porttitor elit feugiat tempor.
            Nullam venenatis, quam eget tincidunt sodales, risus leo venenatis erat, non faucibus mi nunc quis ex.
            Mauris quis molestie metus.</p>
        </div>
        <img
          className="about__image"
          src={about1}
          alt="наш логотип"
        />
      </div>
      <div className="about__row about__row_reversed">
        <div className="about__text-container">
          <h2 className="about__title">Proin convallis diam nulla vestibulum</h2>
          <p className="about__text">Quisque tincidunt neque orci, a condimentum dolor viverra sed. In hac habitasse
            platea dictumst. Aliquam
            ullamcorper, tellus vehicula rutrum cursus, ex dolor sagittis sapien, ac pulvinar enim dolor sed nibh.
            Nullam
            in ex efficitur, pellentesque felis at, gravida orci. Nunc iaculis porttitor elit feugiat tempor. Nullam
            venenatis, quam eget tincidunt sodales, risus leo venenatis erat, non faucibus mi nunc quis ex. Mauris quis
            molestie metus.</p>
        </div>
        <img
          className="about__image"
          src={about2}
          alt="наша команда"
        />
      </div>
    </section>
  );
};

export default About;
