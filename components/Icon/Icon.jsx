"use client";

import { useState } from "react";
import PropTypes from "prop-types";

import "./style.css";

const Icon = (props) => {
  const [showIcon, setShowIcon] = useState(true);

  const _mergeStyles = (...args) => {
    return Object.assign({}, ...args);
  };

  const renderViewBox = () => {
    const { icon } = props;

    switch (icon) {
      case "facebook":
      case "instagram":
      case "linkedin":
      case "twitter":
      case "google":
      case "github":
      case "external-link":
        return "0 0 24 24";
      default:
        return "0 0 24 24";
    }
  };

  const renderGraphic = () => {
    const { icon } = props;

    switch (icon) {
      case "facebook":
        return (
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
        );
      case "instagram":
        return (
          <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
        );
      case "linkedin":
        return (
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
        );
      case "twitter":
        return (
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
        );
      case "google":
        return (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.04 11.7614C23.04 10.9459 22.9668 10.1618 22.8309 9.40912H12V13.8575H18.1891C17.9225 15.295 17.1123 16.513 15.8943 17.3284V20.2139H19.6109C21.7855 18.2118 23.04 15.2637 23.04 11.7614Z"
              fill="#4285F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0034 22.9998C15.1084 22.9998 17.7116 21.97 19.6143 20.2137L15.8977 17.3282C14.8679 18.0182 13.5507 18.4259 12.0034 18.4259C9.00815 18.4259 6.47293 16.403 5.56861 13.6848H1.72656V16.6644C3.61884 20.4228 7.50793 22.9998 12.0034 22.9998Z"
              fill="#34A853"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56523 13.6851C5.33523 12.9951 5.20455 12.258 5.20455 11.5001C5.20455 10.7421 5.33523 10.0051 5.56523 9.31506V6.33551H1.72318C0.944318 7.88801 0.5 9.64437 0.5 11.5001C0.5 13.3557 0.944318 15.1121 1.72318 16.6646L5.56523 13.6851Z"
              fill="#FBBC05"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0034 4.57386C13.6918 4.57386 15.2077 5.15409 16.3995 6.29364L19.6979 2.99523C17.7063 1.13955 15.1032 0 12.0034 0C7.50793 0 3.61884 2.57705 1.72656 6.33545L5.56861 9.315C6.47293 6.59682 9.00815 4.57386 12.0034 4.57386Z"
              fill="#EA4335"
            />
          </>
        );
      case "github":
        return (
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        );
      case "external-link":
        return (
          <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
        );

      // Add more icons here
      default:
        return (
          <path
            d="M11.0664 1L14.1564 7.26L21.0664 8.27L16.0664 13.14L17.2464 20.02L11.0664 16.77L4.88641 20.02L6.06641 13.14L1.06641 8.27L7.97641 7.26L11.0664 1Z"
            stroke="currentcolor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
    }
  };

  const {
    size,
    icon,
    style,
    width,
    height,
    viewBox,
    className,
    spin,
    beats,
    children,
    role,
    svgFill,
  } = props;

  const iconHeight = height ? height : size;
  const iconWidth = width ? width : size;
  const fill = svgFill ? svgFill : "currentcolor";
  const renderIconWidth = !showIcon ? "2rem" : iconWidth;
  const renderIconHeight = !showIcon ? "2rem" : iconHeight;
  const renderVisibility = !showIcon ? "hidden" : "visible";
  const styles = {
    fill: fill,
    verticalAlign: "middle",
    width: renderIconWidth,
    height: renderIconHeight,
    visibility: renderVisibility,
  };
  const extraClassName = className ? className : "";
  const iconViewBox = viewBox ? viewBox : renderViewBox();
  const iconVisibleClass = !showIcon ? "" : "icon--rendered";
  const spinClass =
    (spin && "icon--spinning") || (beats && "icon--beats") || "";

  return (
    <svg
      viewBox={iconViewBox}
      className={`icon icon-${icon} ${iconVisibleClass} ${spinClass} ${extraClassName}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style={_mergeStyles(styles, style)}
      role={role}
    >
      {renderGraphic()}
      {children}
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  spin: PropTypes.bool,
  beats: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.node,
  ]),
  svgFill: PropTypes.string,
};

export default Icon;
