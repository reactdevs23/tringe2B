import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",

    header: {
      subHeading: "DEVELOPMENT",
      subHeadingColor: "#4E5BA6",
      heading: "Priority Matrix",
      headingColor: "#000",
    },
    lineColor: "#000",
    xAxisTitles: {
      leftTitle: "Low",
      leftTitleColor: "#000",
      middleTitle: "IMPACT",
      middleTitleColor: "#000",
      rightTitle: "High",
      rightTitleColor: "#000",
    },
    yAxisTitles: {
      topTitle: "High",
      topTitleColor: "#000",
      middleTitle: "URGENCY",
      middleTitleColor: "#000",
      bottomTitle: "Low",
      bottomTitleColor: "#000",
    },
    tickets: [
      {
        label: "Ticket A",
        color: "#000",
        bg: "#FFF",
        border: "1px solid #B3B8DB",
        priority: ["p1", "p2"],
      },
      {
        label: "Ticket B",
        color: "#000",
        bg: "#FFF",
        border: "1px solid #B3B8DB",

        priority: ["p1"],
      },
      {
        label: "Ticket C",
        color: "#000",
        bg: "#FFF",
        border: "1px solid #B3B8DB",

        priority: ["p1", "p0"],
      },
      {
        label: "Ticket D",
        color: "#000",
        bg: "#FFF",
        border: "1px solid #B3B8DB",

        priority: ["p1", "p2", "p3"],
      },
      {
        label: "Ticket E",
        color: "#000",
        bg: "#FFF",
        border: "1px solid #B3B8DB",

        priority: ["p1"],
      },
    ],
    allPriority: [
      {
        bg: "#FDA29B",
        label: "p0",
        color: "#D92D20",
      },
      {
        bg: "#FECDCA",
        label: "p1",
        color: "#D92D20",
      },
      {
        bg: "#FEE4E2",
        label: "p2",
        color: "#D92D20",
      },
      {
        bg: "#FEF3F2",
        label: "p3",
        color: "#D92D20",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
