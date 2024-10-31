'use client';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 50px;
  background-color: #f0f0f0;
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

interface Props {
  params: {
    id: string;
  };
}

export default function ContactDynamic({ params }: Props) {
  const { id } = params; 

  return (
    <ContactContainer>
      <Title>Contact Information</Title>
      <Paragraph>This is the contact page for ID: {id}</Paragraph>
    </ContactContainer>
  );
}
