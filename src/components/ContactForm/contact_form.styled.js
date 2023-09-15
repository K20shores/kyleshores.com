import styled from 'styled-components';

const ContactFormWrapper = styled.div`
  max-width: 500px;
  margin: 1em auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 10px;
      font-size: 16px;

      input[type='text'],
      input[type='email'],
      textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
      }

      textarea {
        resize: vertical;
        min-height: 150px;
      }
    }
  }
`;

export {
  ContactFormWrapper,
}