import './Work.css'

const template = () => {
  return `
  <h1>Work</h1>

  <section id="work1">
  <div id="place-date-div">
    <h4>Alfarben </h4>
    <h5>Technical Support</h5>
    <h6>May 2023 - Present</h6>
  </div>
  <div id="experience-div">
    <p>
      · Conduct market research focused on analyzing competitor pigments, providing key insights for innovation.
    </p>
    <p>
      · Develop new products and color shades tailored to specific customer needs, opening up new business opportunities.
    </p>
  </div>
  </section>
  
  <section id="work2">
    <div id="place-date-div">
      <h4>Alfarben</h4>
      <h5>Quality Control</h5>
      <h6>Novembre 2021 - May 2023</h6>
    </div>
    <div id="experience-div">
      <p>
        · Oversaw production processes, ensuring compliance with quality standards across all operations.
      </p>
      <p>
        · Managed post-sales services and effectively resolved claims, enhancing customer satisfaction.
      </p>
    </div>
  </section>
  
  <section id="work3">
    <div id="place-date-div">
      <h4>CarpeVitae </h4>
      <h5>Camp Counselor, Director and Training Instructor</h5>
      <h6>April 2020 - November 2021</h6>
    </div>
    <div id="experience-div">
      <p>
        · Started as a summer camp counselor, leading activities and ensuring the safety and well-being of participants.
      </p>
      <p>
        · Promoted to Camp Director, managing teams and coordinating successful programs for youth.
      </p>
      <p>
        · Instructor at the Monitor Training School, delivering courses and developing skills in future counselors and directors.
      </p>
    </div>
  </section>
  `
};  

const Work = () => {
  const work = document.createElement("section");
  work.id = "Work";
  work.innerHTML = template();
  document.querySelector("#app").appendChild(work);
}


export default Work;
