import React from "react";
import styled from "styled-components";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const SectionContainer = styled.section`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

const ContentCard = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 32px;

  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.7;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 22px;
  color: #0ea5e9;
  margin-top: 2px;
`;

const ContactText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary || "#4b5563"};
  margin: 0;
  line-height: 1.6;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary || "#6b7280"};
  margin-top: 30px;
`;

const TextSplitSection = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <ContentCard>
          <Heading>About ZephyrApps</Heading>
          <SubText>
            We help startups and businesses turn ideas into reality by
            delivering clean, scalable software. Our mission is to empower
            companies with fast, secure, and modern digital experiences.
          </SubText>
        </ContentCard>

        <ContentCard>
          <Heading>Contact Info</Heading>

          <ContactItem>
            <IconWrapper>
              <FiMail />
            </IconWrapper>
            <ContactText>contact@zephyrapps.in</ContactText>
          </ContactItem>

          <ContactItem>
            <IconWrapper>
              <FiPhone />
            </IconWrapper>
            <ContactText>+91 9676080303</ContactText>
          </ContactItem>

          <ContactItem>
            <IconWrapper>
              <FiMapPin />
            </IconWrapper>
            <ContactText>
              Pl.No.35, Sy No.207, Palace View Colony, <br />
              Ali Nagar, Bandlaguda, Hyderabad
            </ContactText>
          </ContactItem>

          <Copyright>© 2025 ZephyrApps. All rights reserved.</Copyright>
        </ContentCard>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default TextSplitSection;
