import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";

import classes from "./MainComponent.module.css";

const MainComponent = ({
  header,
  lineColor,
  tickets,
  allPriority,
  xAxisTitles,
  yAxisTitles,
}) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.mainWrapper}>
        <div className={classes.header}>
          <h5
            className={classes.subHeading}
            style={{ "--color": header.subHeadingColor }}
          >
            {header.subHeading}
          </h5>
          <h2
            className={classes.heading}
            style={{
              "--color": header.headingColor,
            }}
          >
            {header.heading}
          </h2>
        </div>
        <div className={classes.wrapper} style={{ "--lineColor": lineColor }}>
          <MdKeyboardArrowUp className={classes.arrowUp} />{" "}
          <MdKeyboardArrowRight className={classes.arrowRight} />
          {allPriority.map((priority, i) => (
            <div
              className={classes.priorityBox}
              key={i}
              style={{ "--bg": priority.bg }}
            >
              <p
                className={classes.title}
                style={{ "--color": priority.color }}
              >
                {priority.label}
              </p>
              <div className={classes.tickets}>
                {tickets
                  .filter((ticket) => ticket.priority.includes(priority.label))
                  .map((ticket, j) => (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": ticket.bg,
                        "--border": ticket.border,
                      }}
                      key={j}
                    >
                      <p
                        className={classes.ticket}
                        style={{ "--color": ticket.color }}
                      >
                        {ticket.label}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}{" "}
          <div className={classes.leftInfo}>
            {" "}
            <p
              className={classes.info}
              style={{ "--color": yAxisTitles.topTitleColor }}
            >
              {yAxisTitles.topTitle}
            </p>{" "}
            <p
              className={classes.middleInfo}
              style={{ "--color": yAxisTitles.middleTitleColor }}
            >
              {yAxisTitles.middleTitle}
            </p>
            <p
              className={classes.info}
              style={{ "--color": yAxisTitles.bottomTitleColor }}
            >
              {yAxisTitles.bottomTitle}
            </p>
          </div>
          <div className={classes.bottomInfo}>
            {" "}
            <p
              className={classes.info}
              style={{ "--color": xAxisTitles.leftTitleColor }}
            >
              {xAxisTitles.leftTitle}
            </p>{" "}
            <p
              className={classes.middleInfo}
              style={{ "--color": xAxisTitles.middleTitleColor }}
            >
              {xAxisTitles.middleTitle}
            </p>
            <p
              className={classes.info}
              style={{ "--color": xAxisTitles.rightTitleColor }}
            >
              {xAxisTitles.rightTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
