'use client';
import styled from 'styled-components';

interface ContactInfoProp {
    name: string,
    email: string;
}

const InfoContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const InfoTitle = styled.h2`
  font-size: 1.8rem;
  color: #444;
`;


const InfoParagraph = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
`;

export default function ContactInfo({name, email}:ContactInfoProp ) {
    return (
  <InfoContainer>
    <InfoTitle> Name:  {name}</InfoTitle>
    <InfoParagraph>Email: {email}</InfoParagraph>
  </InfoContainer>
    )
}