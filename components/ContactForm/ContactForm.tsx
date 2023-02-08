import React, { useRef, useState } from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
interface Props {
  animatedItem: any;
}

export default function ContactForm({ animatedItem }: Props) {
  const formRef = useRef(null);

  const [user, setUser] = useState({
    name: '',
    mail: '',
    message: '',
  });

  const onChange = (event: { target: { value: any; name: any } }) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const { name, mail, message } = user;

  const onReset = () => {
    setUser({
      name: '',
      mail: '',
      message: '',
    });
  };

  function sendEmail(event: { preventDefault: () => void; target: any }) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_42hcel8',
        'template_0uo0w22',
        event.target,
        'user_D6z421r4zHZohDueHvFoS'
      )
      .then(result => {
        alert('메일이 발송되었습니다!');
      })
      .then(() => {
        onReset();
      })
      .catch(error => {
        console.log(error.text);
      });
  }

  return (
    <Form ref={formRef} onSubmit={sendEmail} {...animatedItem[0]}>
      <Label htmlFor='name'>
        <Text>name</Text>
        <Input
          id='name'
          type='text'
          name='name'
          value={name}
          placeholder='Your Name'
          onChange={onChange}
        />
      </Label>
      <Label htmlFor='mail'>
        <Text>Mail</Text>
        <Input
          id='mail'
          type='mail'
          name='mail'
          value={mail}
          placeholder='Your Mail'
          onChange={onChange}
        />
      </Label>
      <Label htmlFor='message'>
        <Text>Message</Text>
        <TextArea
          id='message'
          name='message'
          value={message}
          placeholder='Your Message'
          onChange={onChange}
        />
      </Label>
      <Button type='submit'>Send Message</Button>
    </Form>
  );
}

const Form = styled.form`
  width: 500px;
  margin-bottom: 25px;

  ${media.mobile} {
    width: 300px;
    margin-bottom: 25px;
  }
`;

const Label = styled.label``;
const Text = styled.p`
  font-size: 16px;
  padding-bottom: 10px;

  ${media.mobile} {
    font-size: 12px;
    padding-bottom: 1rem;
  }
`;

const Input = styled.input`
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: 0;
  border: 0;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 40px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
    font-size: 14px;
    font-weight: 300;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

const TextArea = styled.textarea`
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: 0;
  border: 0;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 150px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
    font-size: 14px;
    font-weight: 300;

    ${media.mobile} {
      font-size: 12px;
    }
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: ${props => props.theme.colors.main};
  color: #fff;
  border-radius: 5px;
  padding: 15px 20px;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  ${media.mobile} {
    font-size: 14px;
    padding: 10px 0;
    margin-top: 10px;
  }
`;
