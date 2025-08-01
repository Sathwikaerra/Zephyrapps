import React from "react";
import styled from "styled-components";
import { education } from "../../data/information";
import EducationCard from'../cards/EducationCard'
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;

position: relative;
z-index: 1;
align-items: center;
background: linear-gradient(
  38.73deg,
  rgba(204, 0, 187, 0.15) 0%,
  rgba(201, 32, 184, 0) 50%
),
linear-gradient(
  141.27deg,
  rgba(0, 70, 209, 0) 50%,
  rgba(0, 70, 209, 0.15) 100%
);
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }

`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Education = () => {
  return (
    <Container id="About">
      <Wrapper>
        <Title>About </Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
        Company Overview
        </Desc>
         

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard  education={education} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Education;
