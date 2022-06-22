const formContactComponent = (el) => {
  const formContact = document.createElement("form");
  formContact.classList.add("form-contact__container");
  formContact.innerHTML = `
        <div class="form-contact__container__title">
            <h2>Escribime</h2>
        </div>
        <div class="form-contact__container__inputs">
            <div class="form-contact__container__inputs__input">
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name">
            </div>
            <div class="form-contact__container__inputs__input">
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
            </div>
            <div class="form-contact__container__inputs__input">
                <label for="message">Mensaje</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <div class="form-contact__container__inputs__input">
                <button type="submit">Enviar</button>
            </div>
        </div>
    `;

  el.appendChild(formContact);
};
