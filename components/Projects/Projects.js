import './Projects.css'

const template = () => {
  return `
  <h1>Projects</h1>

<section id="project1">
  <img src="./public/photos/photo1.avif" alt="" id="img1">
  <div>
    <h3>Plantify - eCommerce</h3>
    <h4>Project 1</h4>
  </div>
  <p>Plantify is an e-commerce project specialized in selling plants, flowers, pots, and related products. The website is developed exclusively using HTML for structure and CSS for styling. Plantify stands out for its minimalist approach to development, prioritizing efficiency and simplicity in the user experience. It is an example of how a website can be fully functional without additional technological complexities.</p>
</section>

<section id="project2">
  <img src="./public/photos/photo2.avif" alt="" id="img2">
  <div>
    <h3>Pinterest - API desployment</h3>
    <h4>Project 2</h4>
  </div>
  <p>This project is a Pinterest clone that allows users to search for images using an external API, developed using HTML, CSS, and JavaScript. The platform replicates the core functionality of Pinterest, enabling users to input keywords which are then processed by the API to retrieve relevant photos from a large database. The frontend handles user interactions and displays the results in a responsive, grid-based layout. This project demonstrates how HTML, CSS, and JavaScript can be combined to create a dynamic, user-driven application with rich visual content.</p>
</section>

<section id="project3">
  <img src="./public/photos/photo3.avif" alt="" id="img3">
  <div>
    <h3>My resume</h3>
    <h4>Project 3</h4>
  </div>
  <p>The entire structure and content of this resume are dynamically generated and managed through JavaScript, using the Document Object Model (DOM) to insert and modify elements on the page and event listeners to enable a responsive and engaging user experience. CSS is applied to style the resume, ensuring a clean and professional layout. By relying solely on JavaScript and CSS, this project highlights the power of DOM manipulation for building and maintaining a fully interactive and customizable resume without the need for additional HTML. It exemplifies how a webpage can be crafted with a focus on efficiency and dynamic content generation.</p>
</section>
  `
};


const Projects = () => {
  const projects = document.createElement("section");
  projects.id = 'Projects';
  projects.innerHTML = template();

  document.querySelector("#app").appendChild(projects);
};

export default Projects;