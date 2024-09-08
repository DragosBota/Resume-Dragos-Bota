import "./AboutMe.css"

const template = () => {
  return `
  <h1>About me</h1>
  <section>
    <p id="my_description_text">
      I was born in Romania and moved to a small town near Valencia, Spain, when I was 6 years old. I've always loved spending time outdoors, which led to my passion for extreme sports and the thrill of adrenaline. I initially pursued a degree in chemistry at university but decided to leave after two years to work in a lab.
    </p>
    <p id="my_description_text">
      I stumbled upon coding by chance, and it sparked something within me. Since then, I've dedicated myself to learning and coding every day to continuously improve.
    </p>
    <p id="my_description_text">
      Let's code together!
    </p>
  </section>

  <section id="about_grid">
    <div id="img_div"></div>
    <section id="contact_container">
      <p id="contact_title">role</p>
      <p id="contact_text">Frontend Developer</p>
      <p id="contact_title">email</p>
      <p id="contact_text">dragosbota0@gmail.com</p>
      <p id="contact_title">phone</p>
      <p id="contact_text">+34 642 372 235</p>
    </section>
  </section>
  `
}

const AboutMe = () => {
  const about = document.createElement("section");
  about.id = "About";
  about.innerHTML = template();

  document.querySelector("#app").appendChild(about);
}

export default AboutMe;