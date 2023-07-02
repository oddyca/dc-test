const burgerMenuButton = document.querySelector('.header__burger-menu');
const burgerCloseButton = document.querySelector('.burger__close');
const burgerMenuLinks = document.querySelector('.navigation__bullet');

burgerMenuButton.addEventListener('click', () => {
  
});

const form = document.querySelector('.form__inputs');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const textInput = document.querySelector('.input__text');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  nameError.innerText = '';
  emailError.innerText = '';

  // validation
  if (nameInput.value.trim() === '') {
    nameError.innerText = 'Введите ваше имя';
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '') {
    emailError.innerText = 'Введите вашу почту';
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  if (!nameError.innerText && !emailError.innerText) {
    await sendFormToServer();
    form.reset();
  }
});

// mock fetch request
async function sendFormToServer() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };

  try {
    const response = await fetch('https://www.mockwebsite.com', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Form submitted successfully:', data);
    } else {
      console.error('Form submission failed:', response.status);
    }
  } catch (error) {
    console.error('Form submission failed:', error);
  }
}
