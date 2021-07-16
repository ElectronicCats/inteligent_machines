import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

export const useEmail = () => {
  const [messageStatus, setMessageStatus] = useState({
    status: null,
    message: '',
  });
  const [messageLoadin, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(USER_ID);
  }, []);
  /**
   *
   * @param {*}  data{
    email:string
    name:string
    lastname:string
    tel:string
    message:string
    }
   * @param {*} callback
   */
  const sendEmail = (data, callback = () => {}) => {
    setLoading(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, data)
      .then(
        function (response) {
          setMessageStatus({
            status: response.status,
            message:
              'Mensaje enviado! Pronto nos pondremos en contacto con usted.',
          });
        },
        function (error) {
          setMessageStatus({
            status: error,
            message:
              'Upss! algo salió mal intenta con nuestras redes sociales.',
          });
        }
      )
      .then(() => {
        callback();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { messageStatus, messageLoadin, sendEmail };
};
