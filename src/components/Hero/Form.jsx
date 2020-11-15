import React, { useCallback, useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

export default function App() {
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = useCallback((data) => {
    emailjs.send('service_t0eo26r', 'template_q354m64', data, 'user_6T2eoE7P4prltPXYZiNCR').then(
      () => setIsSent(true),
      (error) => {
        console.log(error.text);
      }
    );
  });

  return isSent ? (
    <Alert variant="success">
      Your message was successfully sent! Our manager will contact you in short time.
    </Alert>
  ) : (
    <Form className="about-wrapper__info-text">
      <Form.Group>
        <br />
        <Form.Label className="hero-subtitle">
          <h3 className="hero-subtitle">Need Help with Development?</h3>
        </Form.Label>
        <Form.Control
          style={{ fontSize: '2rem' }}
          type="email"
          name="email"
          placeholder="Your email*"
          ref={register({ required: true })}
        />
        <br />
        <Form.Control
          as="textarea"
          rows={3}
          style={{ fontSize: '2rem' }}
          type="text"
          name="message"
          placeholder="Your message*"
          ref={register({ required: true })}
        />
        <br />
        {(errors.email || errors.message) && (
          <span className="h4 text-danger">This field is required</span>
        )}

        <button
          type="submit"
          style={{ fontSize: '3rem', width: '100%', justifyContent: 'center' }}
          className="hero-cta cta-btn cta-btn--hero"
          onClick={handleSubmit(onSubmit)}
        >
          Get in Touch
        </button>
      </Form.Group>
    </Form>
  );
}
