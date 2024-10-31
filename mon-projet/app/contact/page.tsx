'use client';
import React from 'react'
import styled from 'styled-components';
import ContactInfo from './ContactInfo';

const ContactContainer = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 20px;
`;

const ContactButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const contact = () => {
  const contactData = {
    name:"azyz",
    email:"azyzdarraji@gmail.com"
  }
  return (
    <ContactContainer>
           <Title>Contact Page</Title>
           <Paragraph>This is the Contact page.</Paragraph>
           <ContactButton>Send a Message</ContactButton>
           <ContactInfo name={contactData.name}  email={contactData.email}/>
    </ContactContainer>
  )
}

export default contact