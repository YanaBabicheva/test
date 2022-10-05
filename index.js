

const button = document.querySelector('button');

const getInfo = () => {

   const getName = document.querySelector('.form__input-name');
   const getSurname = document.querySelector('.form__input-surname');
   const getPatronymic = document.querySelector('.form__input-patronymic');
   const getEmail = document.querySelector('.form__input-email');
   const getEmailRepeat = document.querySelector('.form__input-email-repeat');
   const getPassword = document.querySelector('.form__input-password');
   const getPasswordRepeat = document.querySelector('.form__input-password-repeat');

   const arrElements = [getName, getSurname, getPatronymic, getEmail, getEmailRepeat, getPassword, getPasswordRepeat];
   const check = arrElements.filter(item => item.value.trim());

   const regExpEmail = /^\S+@\S+\.\S+$/g;
   let errors = 0;


   if (check.length !== 7) {
      console.log('Все поля дожны быть заполнены');
      errors += 1;
   }
   if (!regExpEmail.test(getEmail.value)) {
       console.log('Проверьте Email');
       errors += 1;
   }
   if (getPassword.value.length < 6) {
       console.log('Пароль должен состоять из 7 или более символов');
       errors += 1;
   }
   if (getEmail.value !== getEmailRepeat.value) {
       console.log('поля Email не одинаковые');
       errors += 1;
   }

   if (getPassword.value !== getPasswordRepeat.value) {
       console.log('Пол] пороля не одинаковые');
       errors += 1;
   }

   if (errors === 0) {
       const name = `Имя - ${getName.value}, `;
       const surname = `Фамилия - ${getSurname.value}, `;
       const patronymic = `Отчество - ${getPatronymic.value}, `;
       const email = `Email - ${getEmail.value}, `;
       const emailRepeat = `Подтверждение Email* - ${getEmailRepeat.value}, `;
       const password = `Пароль - ${getPassword.value}, `;
       const passwordRepeat = `Повтор пароль - ${getPasswordRepeat.value}, `;
      console.log(name + surname + patronymic + email + emailRepeat + password + passwordRepeat);
   }
};

button.addEventListener('click', (e) => {
    getInfo()
});

const name= [] ;