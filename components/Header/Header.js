import './Header.css'

const template = () => {
  return `
<nav>
  <ul>
    <li><a href="#Projects">Projects</a></li>
    <li><a href="#Work">Work</a></li>
    <li><a href="#About">About me</a></li>
  </ul>
</nav>


<article>
  <section id="textBG"></section>
  <section id="name">
    <p>Hello, I'm Dragos Bota</p>
  </section>
  <section id="description">
    <p>
      I am a frontend designer, living and working in Spain. I am passionate about working with all kinds of code, from designing simple HTML pages to tackling complex problems. I'm always striving to deliver the best UX/UI experience, which is why I love spending time in Figma, perfecting designs ready to be brought to life in code!
    </p>
    
    <section id="software">
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Vite</li>
        <li>Figma</li>
      </ul>
    </section>
  </section>
  <button id="downloadBtn">Download CV</button>
</article>
  `
};

const Header = () => {
  const header = document.createElement("header");
  header.innerHTML = template();
  document.querySelector("#app").appendChild(header);
}

export default Header;
