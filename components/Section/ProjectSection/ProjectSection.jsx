import Container from "@components/Container";
import Project from "./Project";

import "./style.css";

const ProjectSection = () => {
  return (
    <Container id="projects" isSection className="project-section">
      <h2 className="title section__title">Projects</h2>
      <div className="project-list">
        <Project
          title="Tenslam"
          text="A web app to practica and play virtual tennis"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practica and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practica and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practica and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
      </div>
    </Container>
  );
};

export default ProjectSection;
