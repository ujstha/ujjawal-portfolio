"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "@components/Icon";
import { useEffect } from "react";
import { isInViewPort } from "@utils/isInViewPort";

import "./style.css";

const Project = (props) => {
  const {
    title,
    text,
    githubLink = "",
    siteLink = "",
    image = "",
    style,
  } = props;

  useEffect(() => {
    isInViewPort(".project-item");
  }, []);

  return (
    <div className="project-item" style={style}>
      <div
        className={classNames({
          overlay: true,
          "overlay--center": true,
          item__overlay: true,
          "item__overlay--dark": image !== "",
        })}
      >
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
      {image !== "" && (
        <Image
          src={`/assets/images/projects-images/${image}`}
          height={500}
          width={600}
          alt={`${title} project image`}
          priority
        />
      )}
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  githubLink: PropTypes.string,
  siteLink: PropTypes.string,
  image: PropTypes.string,
  style: PropTypes.object,
};

export default Project;
