import React from 'react';

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
import { useEmail } from '../../hooks/useEmail';
import {
  IconFaceBgColor,
  IconYoutubeBgColor,
  IconGithubBgColor,
  IconInstagramColor,
} from '../../components/UI/Icons';
import { IconLink } from '../../components/UI/Header';

export const requiredValidation = (values) => {
  let error = null;
  if (!values) {
    error = 'NECESITAMOS ESTE CAMPO';
  }
  return error;
};
export const emailValidation = (values) => {
  let error = null;
  if (!values) {
    error = 'NECESITAMOS UN EMAIL';
  } else if (!/\S+@\S+\.\S+/.test(values)) {
    error = 'FORMATO INVALIDO';
  }
  return error;
};

export const ContactUs = () => {
  const emailField = useFormTextField('', emailValidation);
  const nameField = useFormTextField('', requiredValidation);
  const lastNameField = useFormTextField('');
  const celField = useFormTextField('');
  const messageField = useFormTextField('', requiredValidation);
  const { messageStatus, messageLoadin, sendEmail } = useEmail();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailField.error || nameField.error || messageField.error) {
      ResetData();
      return;
    }
    sendEmail(preparData(), ResetData);
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
                    required
                  />
                  <TextInput
                    label='Apellido'
                    logical={lastNameField}
                    type={'text'}
                    id={'SU_lastname'}
                    required
                  />
                  <TextInput
                    label='Telefono Celular'
                    logical={celField}
                    type={'text'}
                    id={'SU_cel'}
                    required
                  />
                  <TextInput
                    errorMessage={emailField.error}
                    label='Email'
                    logical={emailField}
                    type={'email'}
                    id={'SU_email'}
                    required
                  />
                </CardGrids>
                <TextArea
                  id={'SU_message'}
                  label='Mensaje'
                  logical={messageField}
                  required
                />
                <CenterDiv>
                  <span>{messageStatus.message}</span>
                  <ActionButton
                    color='white'
                    bgColor={'linear-gradient(var(--gradient));'}
                    disabled={messageLoadin}
                  >
                    {messageLoadin ? 'Enviando...' : 'Enviar Mensaje'}
                  </ActionButton>
                </CenterDiv>
              </form>
            </Container>
          </Panel>
          <CardGrids>
            <div style={{ zIndex: 10 }}>
              <ContainerP size='1.5'>
                Deseas,apoyar este proyecto para crear mejor contenido,
                actualizaciones y que llegue a mas personas
              </ContainerP>
              <form
                action='https://www.paypal.com/donate'
                method='post'
                target='_top'
              >
                <input
                  type='hidden'
                  name='hosted_button_id'
                  value='X29Y7VGRDU2KJ'
                />
                <input
                  type='image'
                  src='https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif'
                  border='0'
                  name='submit'
                  title='PayPal - The safer, easier way to pay online!'
                  alt='Donate with PayPal button'
                />
                <img
                  alt=''
                  border='0'
                  src='https://www.paypal.com/es_MX/i/scr/pixel.gif'
                  width='1'
                  height='1'
                />
              </form>
              <ContainerTitle size='1.5'>
                Siguenos en:
                <IconLink
                  href='https://www.facebook.com/electroniccats'
                  target='_blank'
                >
                  <IconFaceBgColor />
                </IconLink>
                <IconLink
                  href='https://www.youtube.com/channel/UCA9pODMFvrLEAB9vYWiLebg'
                  target='_blank'
                >
                  <IconYoutubeBgColor />
                </IconLink>
                <IconLink
                  href='https://github.com/ElectronicCats'
                  target='_blank'
                >
                  <IconGithubBgColor />
                </IconLink>
                <IconLink
                  href='https://www.instagram.com/electroniccats/'
                  target='_blank'
                >
                  <IconInstagramColor />
                </IconLink>
              </ContainerTitle>
            </div>
            <img
              src={samResourse}
              alt='Sam '
              style={{
                width: '300px',
                position: 'relative',
                left: '100px',
                bottom: '100px',
              }}
            />
          </CardGrids>
        </>
      </HalfContainer>
    </AppLayout>
  );
};
