import React from "react";
import styled from "styled-components";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ContentCard = styled.div`
  flex: 1;
  min-width: 300px;
  background: ${({ theme }) => theme.card_light || "#f8fafc"};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2); /* 3D-style shadow */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightSection = styled.div`
  flex: 1;
  min-height: 400px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || "#0f172a"};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: #0ea5e9;
  margin-top: 2px;
`;

const ContactText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary || "#475569"};
  margin: 0;
  line-height: 1.5;
`;

const MailButton = styled.a`
  background-color: #0ea5e9;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0284c7;
  }
`;

const Contact = () => {
  return (
    <Container id="Contact">
      <Wrapper>
        <ContentCard>
          <Heading>Contact Info</Heading>

          <ContactItem>
            <IconWrapper>
              <FiMail />
            </IconWrapper>
            <ContactText>admin@zephyrapps.in</ContactText>
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

          <MailButton
            href="mailto:admin@zephyrapps.in?subject=Inquiry&body=Hi, I’d like to know more about your services."
          >
            Send Mail
          </MailButton>
        </ContentCard>

        <RightSection>
          <iframe
            title="Google Maps"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5324.672647867027!2d78.46385964326504!3d17.31932915152722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd00600ec421%3A0x25c75cb36f14ad6f!2sPalace%20view%20colony!5e0!3m2!1sen!2sin!4v1753272461913!5m2!1sen!2sin"
          ></iframe>
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default Contact;
