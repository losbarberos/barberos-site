import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import BarLayout from '../components/barLayout';
import BarTextfield from '../components/barTextfield';
import BarTextarea from '../components/barTextarea';
import BarButton from '../components/barButton';
import BarFormErrorContainer from '../components/barFormErrorContainer';
import { contactUs } from '../services/contact';

type Values = {
  fromName: string;
  fromEmail: string;
  subject: string;
  body: string;
};
type Errors = {
  fromName?: string;
  fromEmail?: string;
  subject?: string;
  body?: string;
};

const Contact = () => {
  function validate() {
    return (values: Values): Errors => {
      const errors: Errors = {};

      if (!values.fromName) errors.fromName = `Le nom est obligatoire`;

      if (!values.fromEmail) {
        errors.fromEmail = `L'email est obligatoire`;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.fromEmail)) {
        errors.fromEmail = `L'email saisi n'est pas valide`;
      }

      if (!values.subject) errors.subject = `Le sujet est obligatoire`;

      if (!values.body) errors.body = `Le message est obligatoire`;

      return errors;
    };
  }

  const renderErrorMessage = (errorMessage: string) => <BarFormErrorContainer>{errorMessage}</BarFormErrorContainer>;
  const [resultMessage, setResultMessage] = useState<string>();

  return (
    <BarLayout>
      <h1>Contact</h1>

      <section>
        <div>
          <strong>Barberos SARL</strong>
        </div>
        <div>Siren : 902 205 202</div>
      </section>

      <section className="contact-line">
        <div>
          <img src="/icons/address.svg" alt="Adresse" />
        </div>
        <div>
          21 rue Charles Martel
          <br />
          54250 CHAMPIGNEULLES
        </div>
      </section>
      <section className="contact-line">
        <div>
          <img src="/icons/phone.svg" alt="Téléphone" />
        </div>
        <div>07 80 98 40 00</div>
      </section>

      <section className="contact-line">
        <div>
          <img src="/icons/email.svg" alt="Email" />
        </div>
        <div>contact@barberos.fr</div>
      </section>

      <h4 className="flex flex-row justify-center items-center">
        <img src="/icons/mail.svg" height="24" className="h-6 w-6" />
        Envoyer un message
      </h4>

      <Formik
        initialValues={{ fromName: '', fromEmail: '', subject: '', body: '' }}
        validate={validate()}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          contactUs({
            contactName: values.fromName,
            contactEmail: values.fromEmail,
            subject: values.subject,
            message: values.body,
          }).then(responseStatus => {
            setSubmitting(false);
            setResultMessage(responseStatus.status === 200 ? 'Message envoyé' : 'Échec, veuillez réessayer plus tard');
            resetForm();
          });
        }}
      >
        {({ isSubmitting, handleReset, touched, errors }) => (
          <Form>
            <BarTextfield name="fromName" label="Nom" error={touched.fromName && !!errors.fromName} required />
            <ErrorMessage name="fromName" render={renderErrorMessage} />

            <BarTextfield name="fromEmail" label="Email" type="email" error={touched.fromEmail && !!errors.fromEmail} required />
            <ErrorMessage name="fromEmail" render={renderErrorMessage} />

            <BarTextfield name="subject" label="Sujet" error={touched.subject && !!errors.subject} required />
            <ErrorMessage name="subject" render={renderErrorMessage} />

            <BarTextarea name="body" label="Message" rows={6} error={touched.body && !!errors.body} required />
            <ErrorMessage name="body" render={renderErrorMessage} />

            <div className="form-actions">
              {resultMessage && <span className="form-result-message">{resultMessage}</span>}
              <BarButton type={'submit'} disabled={isSubmitting} label={'Envoyer'} />
            </div>
          </Form>
        )}
      </Formik>
    </BarLayout>
  );
};

export default Contact;
