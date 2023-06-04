import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storage = window.localStorage;

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };

  storage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const fillFormFields = () => {
  const savedState = storage.getItem('feedback-form-state');

  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  storage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log({
    email: emailInput.value,
    message: messageInput.value
  });
};

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

fillFormFields();