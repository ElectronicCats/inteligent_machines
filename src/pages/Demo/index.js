import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

import { AppLayout } from '../../components/AppLayout';
import {
  ContainerTitle,
  Container,
  ContainerP,
} from '../../components/UI/Content';
import { HalfContainer } from '../../components/GradientContainer';
import { Panel } from '../../styles/GlobalStyles';
import { useFormTextField } from '../../hooks/useFormFields';
import { TextInput } from '../../components/TextInput';
import { TextArea } from '../../components/TextArea';
import { CardGrids } from '../../components/UI/Cards';
import { ActionButton } from '../../components/Buttons';
import { CenterDiv } from '../../styles/GlobalStyles';
import samResourse from '../../assets/sam/resourse-sam.svg';

const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

export const emailValidation = (values) => {
  let error = null;
  if (!values) {
    error = 'NECESITAMOS UN EMAIL';
  } else if (!/\S+@\S+\.\S+/.test(values)) {
    error = 'FORMATO INVALIDO';
  }
  return error;
};

export const Demo = () => {
  const emailField = useFormTextField('', emailValidation);
  const nameField = useFormTextField('');
  const lastNameField = useFormTextField('');
  const celField = useFormTextField('');
  const messageField = useFormTextField('');

  useEffect(() => {
    emailjs.init(USER_ID);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailField.error) {
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, preparData())
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...SEND EMAIL', error);
        }
      )
      .then(() => {
        ResetData();
      });
  };

  const ResetData = () => {
    emailField.resetValues();
    nameField.resetValues();
    lastNameField.resetValues();
    celField.resetValues();
    messageField.resetValues();
  };

  const preparData = () => {
    let Data = {
      email: emailField.value,
      name: nameField.value,
      lastname: lastNameField.value,
      tel: celField.value,
      message: messageField.value,
    };
    return Data;
  };

  return (
    <AppLayout>
      <HalfContainer>
        <>
          <ContainerTitle color='white' size='3'>
            Envianos un Mensaje
          </ContainerTitle>
          <Panel>
            <Container>
              <ContainerP style={{ textAlign: 'center', padding: '20px' }}>
                {`Tienes alguna duda o te interesa que llevemos este taller a tu escuela u
            organizacion completa el siguente formulario con tus datos
            y nos pondremos en contacto contigo.`}
              </ContainerP>
              <form onSubmit={handleSubmit}>
                <CardGrids>
                  <TextInput
                    label='Nombre'
                    logical={nameField}
                    type={'text'}
                    id={'SU_name'}
                  />
                  <TextInput
                    label='Apellido'
                    logical={lastNameField}
                    type={'text'}
                    id={'SU_lastname'}
                  />
                  <TextInput
                    label='Telefono Celular'
                    logical={celField}
                    type={'text'}
                    id={'SU_cel'}
                  />
                  <TextInput
                    errorMessage={emailField.error}
                    label='Email'
                    logical={emailField}
                    type={'email'}
                    id={'SU_email'}
                  />
                </CardGrids>
                <TextArea
                  id={'SU_message'}
                  label='Mensaje'
                  logical={messageField}
                />
                <CenterDiv>
                  <ActionButton
                    color='white'
                    bgColor={'linear-gradient(var(--gradient));'}
                  >
                    Enviar Mensaje
                  </ActionButton>
                </CenterDiv>
              </form>
            </Container>
          </Panel>
          <CardGrids>
            <ContainerP>
              Deseas,apoyar este proyecto para crear mejor contenido,
              actualizaciones y que llegue a mas personas
              <ActionButton bgColor={'var(--color-orange);'}>
                Boton de paypal
              </ActionButton>
            </ContainerP>
            <img src={samResourse} alt='Sam ' style={{ width: '300px' }} />
          </CardGrids>
        </>
      </HalfContainer>
    </AppLayout>
  );
};
