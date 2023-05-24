"use client";
import Container from "@components/Container";
import Project from "./Project";

import "./style.css";
import { useEffect } from "react";

const ProjectSection = () => {
  useEffect(() => {
    let projectList = document.getElementById("project-list");
    // projectList?.children.map((child) => console.log({ child }));

    console.log({
      projectList: Object.values(projectList?.childNodes).map(
        (c) => c.children
      ),
    });
  });
  return (
    <Container id="projects" isSection className="project-section">
      <h2 className="title section__title">Projects</h2>
      <div id="project-list" className="project-list">
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
        <Project
          title="Tenslam"
          text="A web app to practice and play virtual tennis"
          githubLink="https://github.com/ujstha"
          siteLink="https://tenslam.ai/"
        />
      </div>
    </Container>
  );
};

export default ProjectSection;
