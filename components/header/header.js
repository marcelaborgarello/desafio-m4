const headerComponent = (el) => {
  const header = document.createElement("header");
  header.classList.add("header-component");
  header.innerHTML = `
    <div class="header-component__container">
      <a href="./index.html" class="header-component__logo">MARCE</a>

      <nav class="header-component-nav">
        <ul>
          <li><a href="./portfolio.html">Portfolio</a></li>
          <li><a href="./services.html">Servicios</a></li>
          <li><a href="./contact.html">Contacto</a></li>
        </ul>
      </nav>
      <div class="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    `;

  el.appendChild(header);

  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    document.querySelector(".header-component-nav").classList.toggle("active");
    menu.classList.toggle("active");
  });
};
