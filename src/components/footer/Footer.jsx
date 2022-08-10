import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterSection>
      <p>&copy; 2022 - Made With ❤️. by Agil Alatas.</p>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: "Roboto";
  font-size: 14px;
  text-align: center;
  background-color: #c8d6f8;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export default Footer;
