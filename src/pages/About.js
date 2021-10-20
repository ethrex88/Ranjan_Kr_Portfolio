import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ranjan Kumar</span>
              </p>
              <h2 className="about__heading">A Software Engineer</h2>
              <div className="about__info">
                <PText>
                  I'm student of Bachelor in computer science and engineering at
                  Siliguri institute of technology 🎓. Ability to learn more &
                  more and solve real world problems. Learning new technology is
                  my passion and very much interest in AI , Ethical Hacking ,
                  Robotics and do competitive programming . keep update ........
                  <br /> <br />
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://docs.google.com/document/d/1jgZ8TrOWaZgI1fIf4muQ-dzrNWrYVE9ZntpD39nV7F4/edit?usp=sharing"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Bihar Govt. Nalanda College, Bihar Sharif']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Siliguri Institute of Technology , Siliguri']}
              />
              {/* <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              /> */}
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Programming Language"
                items={['C|C++', 'Python', 'JavaScript', 'Java']}
              />
              <AboutInfoItem
                title="FullStack"
                // eslint-disable-next-line prettier/prettier
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'Nodejs'
                          ,]}
              />
              <AboutInfoItem
                title="MachineLearning"
                // eslint-disable-next-line prettier/prettier
                items={['Pandas', 'Sklearn', 'Tenserflow',
                    'Pytorch','CoreML']}
              />
              <AboutInfoItem
                title="Tools"
                items={['Git & GitHub', 'VSCode', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021"
                items={['Intern at  Walkover Company']}
              />
              {/* <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              /> */}
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
