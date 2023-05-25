import Icon from "@components/Icon";
import Button from "@components/Button";
import { EMAIL } from "@constants/url";

import "./style.css";

const HireMeButton = () => {
  return (
    <div className="btn-hire">
      <div>
        <Icon icon="circular" className="spin-infinite" />
        <Button
          href={`mailto:${EMAIL}`}
          className="btn-hire-me btn"
          isFilled
          text="Hire Me"
        />
      </div>
    </div>
  );
};

export default HireMeButton;
