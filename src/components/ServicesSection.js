import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="FullStack"
            desc="I'm Fullstack developer . I can develop both frontend and Backend"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Coding"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          {/* <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          /> */}
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
