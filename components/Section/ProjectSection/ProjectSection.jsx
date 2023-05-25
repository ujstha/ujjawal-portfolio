import Container from "@components/Container";
import Project from "./Project";

import "./style.css";

const ProjectSection = () => {
  return (
    <Container id="projects" isSection className="project-section">
      <h2 className="section__title">Projects</h2>
      <div id="project-list" className="project-list">
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          siteLink="https://tenslam.ai/"
          image="tenslam.png"
        />
        <Project
          title="Eventti.net"
          text="Web app for adding and listing events and purchase tickets"
          siteLink="https://eventti.net/"
          image="eventti.png"
        />
        <Project
          title="TMDbCine"
          text="Get information about movies, TV shows, and celebrities"
          githubLink="https://github.com/ujstha/tmdb-cine"
          siteLink="https://tmdb-cine.netlify.app/"
          image="tmdb-cine.png"
        />
      </div>
    </Container>
  );
};

export default ProjectSection;
