// About.jsx
import { Center } from "@react-three/drei";
import React from "react";
import styled from "styled-components";

// ====== DATA ======
const timelineData = [
  {
    label: "2021",
    title:
      "Founded in 2021, ZephyrApps Tech is redefining the software landscape with innovative applications.",
  },
];

// ====== STYLED COMPONENTS ======

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  gap: 20px;
`;

const Heading = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #0ea5e9;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Logo = styled.div`
  margin-top: 10px;
  img {
    width: 60px;
    animation: twinkle 1.5s infinite alternate ease-in-out;
  }

  @keyframes twinkle {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(1.2);
      opacity: 0.6;
    }
  }
`;

const Paragraph = styled.p`
  max-width: 600px;
  font-size: 16px;
  color: #334155;
  line-height: 1.6;
`;

const Paragraph1 = styled.p`
  max-width: 600px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  line-height: 1.6;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 60px 20px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
`;

const SectionImage = styled.img`
  width: 45%;
  max-width: 500px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const SectionText = styled.div`
  flex: 1;
  color: ${({ light }) => (light ? "#fff" : "#334155")};
  font-size: 16px;
  line-height: 1.6;
  max-width: 600px;
`;

const Button= styled.a`
  background-color: #0ea5e9;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0284c7;
  }
`;

const Button1= styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  gap: 8px;
  margin-top:40px;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1200px;
  padding: 20px 20px;
  margin: auto;
`;

const SubTextBox = styled.div`
  background-color: #f8fafc;
  padding: 20px;
  border-left: 4px solid #0ea5e9;
  border-radius: 8px;
  color: #334155;
`;

// ====== 3D CARD SECTION STYLES ======
const CardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 20px;
  gap: 30px;
`;

const Card = styled.div`
    color:white;
  background-color:white;
  width: 300px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: black;
    text-align:center;
    margin-bottom: 10px;
  }

  p {
    color: #475569;
    font-size: 15px;
    line-height: 1.6;
  }
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 60px 20px;
  margin: 40px auto;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transform: perspective(1000px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 1000px;

  &:hover {
    transform: perspective(1000px) translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  }
`;

const ProductHeading = styled.h2`
  color: blue;
  font-size: 28px;
  text-align: center;
`;

const ProductParagraph = styled.p`
  color: black ;
  font-size: 16px;
  max-width: 800px;
  text-align: center;
  margin: auto;
`;

const FeatureList = styled.ul`
  max-width: 800px;
  margin: 20px auto;
  color: #334155;
  font-size: 16px;
  list-style-type: disc;
  padding-left: 20px;
  line-height: 1.8;
`;

const DownloadButton = styled.a`
  margin-top: 20px;
  display: inline-block;
  background-color: black;
  color: white;
  padding: 12px 24px;
  text-align:center;
  border-radius: 8px;
  width:300px;
  margin:auto;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: white;
    color:black;
  }
`;



// ====== COMPONENT ======

const About = () => {
  return (
    <>
      {/* ========== Section 0: Original Skills/About Block ========== */}
      <Wrapper id="About">
        <Heading>The Inspiring Journey Behind ZephyrApps Tech</Heading>

        <Logo>
          <img src="/icon2.png" style={{borderRadius:"50%"}} alt="ZephyrApps Logo" />
        </Logo>

        <Paragraph>{timelineData[0].title}</Paragraph>
        <Paragraph1>Our Company History</Paragraph1>
        <Paragraph>
          Since our inception in 2024, ZephyrApps Tech has been dedicated to
          providing innovative software solutions, driven by a passion for
          technology and a commitment to customer satisfaction. Our commitment
          to quality and innovation has positioned us as a trusted partner for
          individuals seeking effective tech solutions.
        </Paragraph>
      </Wrapper>

      {/* ========== Section 1: Image + Text Side-by-Side ========== */}
      <Section>
        <SectionImage src="https://zephyrapps.in/wp-content/uploads/2024/10/pexels-photo-15555858.jpeg" alt="About Us" />
        <SectionText>
          <h2 style={{color:"black", margin:"10px"}}>Our Vision</h2>
          <p>
            At ZephyrApps Technologies Pvt. Ltd, we are passionate about creating next-gen mobile applications that transform the way businesses interact with their customers. With expertise in custom mobile app development, UI/UX design, and seamless digital integration, we help businesses grow in the digital age.
          </p>
        </SectionText>
      </Section>

      {/* ========== Section 2: Centered Text + Button ========== */}
      <Section
        style={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <SectionText>
          <h2 style={{color:"black"}}>Ready to Transform Your Ideas?</h2>
          <p>
            We collaborate with forward-thinkers to turn ideas into scalable,
            elegant applications. Let’s build the future together.
          </p>
          <Button1 href="#Contact" >Get in Touch</Button1>
        </SectionText>
      </Section>

      {/* ========== Section 3: Image + Main Text + Sub Boxes ========== */}
      <Section style={{ flexDirection: "column" }}>
        {/* <SectionImage
          src="https://zephyrapps.in/wp-content/uploads/2024/10/pexels-photo-6502328.jpeg"
          alt="Growth Journey"
          style={{ marginBottom: "20px" }}
        /> */}
        <SectionText>
          <h2 style={{textAlign:"center",color:"black"}}>Why Choose Us?</h2>
          <p>
Discover What Sets ZephyrApps Tech Apart from the Rest              </p>
        </SectionText>
        
      </Section>

      {/* ========== Section 4: 3D Card Styled History ========== */}
      <CardsSection>
        <Card>
          <h3>User-Centric Design</h3>
          <p>
            Our applications are meticulously crafted to prioritize user experience and satisfaction.
          </p>
        </Card>
        <Card>
          <h3>Innovative Solutions</h3>
          <p>
            We leverage cutting-edge technology to develop unique software solutions tailored to market demands.
          </p>
        </Card>
        <Card>
          <h3>Expert Team</h3>
          <p>
            Our dedicated team of professionals brings a wealth of experience and knowledge to every project.
          </p>
        </Card>
        <Card>
          <h3>Customer Satisfaction</h3>
          <p>
            We prioritize our clients’ needs and work relentlessly to exceed their expectations.
          </p>
        </Card>
         <Card>
          <h3>Agile Development</h3>
          <p>
            Our agile approach allows for flexibility and adaptability in project management.
          </p>
        </Card>
         <Card>
          <h3>Proven Results</h3>
          <p>
            We have a track record of delivering successful projects that drive real impact for our clients.
          </p>
        </Card>
        
      </CardsSection>
      {/* ========== Section 3.5: Flagship Product - Offersholic ========== */}
<ProductSection>
  <h2 style={{ color: "black" ,textAlign:"center"}}>Our Products</h2>

  <ProductHeading>Flagship Product: Offersholic</ProductHeading>

  <ProductParagraph>
    <strong style={{ color: "black" }}>Offersholic</strong> is a pioneering mobile application developed under the ZephyrApps banner. It is a pan-India platform designed to showcase <em>real-time offers and discounts</em> across various retail categories.
  </ProductParagraph>

  <FeatureList>
    <li>📍 Geo-targeted offers and GPS navigation</li>
    <li>🛍️ Merchant dashboard with free and premium listing options</li>
    <li>👍 User-friendly interface for saving, liking, and sharing offers</li>
    <li>🔗 No affiliate marketing – direct-to-customer discovery</li>
    <li>💸 Free for end users, with optional merchant subscriptions</li>
  </FeatureList>

  <ProductParagraph>
    Offersholic reflects our commitment to building <strong>impact-driven</strong>, <strong>consumer-focused</strong>, and <strong>scalable</strong> digital products.
  </ProductParagraph>

  <DownloadButton href="https://play.google.com/store/apps/details?id=com.zephyr.offersholic" target="_blank" rel="noopener noreferrer">
    Download on Google Play
  </DownloadButton>
</ProductSection>

    </>
  );
};

export default About;
