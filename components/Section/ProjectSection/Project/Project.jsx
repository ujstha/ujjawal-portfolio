import Image from "next/image";
import PropTypes from "prop-types";
import Icon from "@components/Icon";

import "./style.css";

const Project = (props) => {
  const { title, text, githubLink = "", siteLink = "" } = props;

  return (
    <div className="project-item">
      <div className="overlay overlay--center item__overlay">
        {githubLink !== "" && (
          <a
            href={githubLink}
            className="item__link item__link-github"
            title={githubLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon icon="github" svgFill="currentcolor" />
          </a>
        )}
        {siteLink !== "" && (
          <a
            href={siteLink}
            className="item__link item__link-url"
            title={siteLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon icon="external-link" svgFill="currentcolor" />
          </a>
        )}
      </div>
      <h3 className="item__title">{title}</h3>
      <p className="item__desc">{text}</p>
      {/* <Image
        src="/assets/images/projects-images/tenslam.png"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Project Image"
      /> */}
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  githubLink: PropTypes.string,
  siteLink: PropTypes.string,
};

export default Project;
