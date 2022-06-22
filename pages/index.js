const addCardTemplate = (params, id) => {
  const template = document.getElementById("card-template");
  const container = document.getElementById(`${id}`);

  const dataCard = params.items;
  dataCard.map((el, i) => {
    template.content.querySelector(".card__img").src =
      params.includes.Asset[0].fields.file.url;

    template.content.querySelector(".card_description__title").textContent =
      el.fields.title;

    template.content.querySelector(".card_description__detail").textContent =
      el.fields.description;

    template.content.querySelector(".card_description__link").href =
      el.fields.url;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  });
};

const getData = (type, id) => {
  fetch(
    `https://cdn.contentful.com/spaces/e9ivrq1o694l/environments/master/entries?access_token=2ZJxLxioa0CXpaYwTFBtCqd5hFgwG5ss0ZM7Lykgkp8&&content_type=${type}`
  )
    .then((response) => response.json())
    .then((data) => addCardTemplate(data, id));
};

const main = () => {
  const headerContainer = document.getElementById("header-container");
  const formContact = document.getElementById("form-contact");
  const footerContainer = document.getElementById("footer-container");

  headerComponent(headerContainer);
  formContactComponent(formContact);
  footerComponent(footerContainer);
  getData("presentation", "my-presentation");
  getData("sevices", "my-services");
};

main();
