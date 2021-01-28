import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Liverpool wins UCL", "Top news -8888 readers")}
      {newsArticle("CoronaVirus India update", "corona -3000 readers")}
      {newsArticle("BTC ATH", "crypto -1111 readers")}
      {newsArticle(
        "Biden to sworn as US president",
        "US politics -5555 readers"
      )}
    </div>
  );
};

export default Widgets;
