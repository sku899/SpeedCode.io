import React, { useEffect, useState } from "react";
import LinksNavbar from "./../components/linksNavbar";
import Navbar from "./../components/navbar";
import Stars from "./../components/stars";

// Import Components
import LineGraph from "./../components/lineGraph";

// Import Utils
import { formatLineGraphData } from "./../utils/graphUtils";

const Statistics = (props) => {
  let { statsObject, problemObject, userObject } = props.location.state;

  const [timeTakenData, setTimeTakenData] = useState();
  const [mistakesMadeData, setMistakesMadeData] = useState([]);
  const [wordsPerMinuteData, setWordsPerMinuteData] = useState([]);

  //   [
  //     {
  //       "id": "japan",
  //       "color": "hsl(259, 70%, 50%)",
  //       "data": [
  //         {
  //           "x": "plane",
  //           "y": 195
  //         },
  //         {
  //           "x": "helicopter",
  //           "y": 58
  //         },
  //         {
  //           "x": "boat",
  //           "y": 21
  //         },
  //         {
  //           "x": "train",
  //           "y": 165
  //         },
  //         {
  //           "x": "subway",
  //           "y": 120
  //         },
  //         {
  //           "x": "bus",
  //           "y": 159
  //         },
  //         {
  //           "x": "car",
  //           "y": 192
  //         },
  //         {
  //           "x": "moto",
  //           "y": 202
  //         },
  //         {
  //           "x": "bicycle",
  //           "y": 70
  //         },
  //         {
  //           "x": "horse",
  //           "y": 112
  //         },
  //         {
  //           "x": "skateboard",
  //           "y": 64
  //         },
  //         {
  //           "x": "others",
  //           "y": 233
  //         }
  //       ]
  //     }
  //   ]

  useEffect(() => {
    console.log(`Stats Object: `, statsObject);
    console.log("User Object:", userObject);

    setTimeTakenData(formatLineGraphData("Time Spent", "#d85b6a", statsObject.time_spent, true));
    setMistakesMadeData(formatLineGraphData("Mistakes Made", "#4e3769", statsObject.mistakes_made, false));
    setWordsPerMinuteData(formatLineGraphData("Words Per Minute", "", statsObject.words_per_minute), false);
  }, []);

  useEffect(() => {
    console.log("Update time taken data:", timeTakenData);
  }, [timeTakenData]);

  return (
    <div>
      <Navbar userObject={userObject} />
      <LinksNavbar userObject={userObject} />
      <div className="statistics-page-wrapper">
        <div className="statistics-page-header-wrapper">
          <div className="statistics-page-header">{problemObject.name} Statistics</div>
        </div>
        <div className="statistics-page-subheader-wrapper">
          <div className="statistics-page-subheader">
            <div className="d-flex justify-content-left">
              <div className="algo-detail-badge-wrapper">
                <div className="algo-detail-difficuly algo-badge-card">
                  <Stars numStars={problemObject.difficulty}></Stars>
                </div>
              </div>
              <div className="algo-detail-badge-wrapper">
                <div className="algo-detail-attempts algo-badge-card">{problemObject.attempts} attempts</div>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-summary-wrapper">
          <div className="statistics-summary-header-wrapper">
            <div className="statistics-summary-header">Performance Overview</div>
          </div>
          <div className="statistics-summary-cards-wrapper d-flex justify-content-left">
            <div className="statistics-stat-card text-center">
              <div className="finished-blueprint-stat-card-title">Minimum Time Taken</div>
              <div className="finished-blueprint-stat-card-value">{"1:14"}</div>
            </div>
            <div className="statistics-stat-card text-center">
              <div className="finished-blueprint-stat-card-title">Average Time Spent</div>
              <div className="finished-blueprint-stat-card-value">{"2:23"}</div>
            </div>
            <div className="statistics-stat-card text-center">
              <div className="finished-blueprint-stat-card-title">Average Words Per Minute</div>
              <div className="finished-blueprint-stat-card-value">{"4"}</div>
            </div>
            <div className="statistics-stat-card text-center">
              <div className="finished-blueprint-stat-card-title">Average Mistakes Made</div>
              <div className="finished-blueprint-stat-card-value">{"10"}</div>
            </div>
          </div>
        </div>

        <div className="statistics-graphs-wrapper">
          <div className="row">
            <div className="col-xl-6">
              <div className="statistics-graph-wrapper">
                <div className="statistics-graph-header-wrapper">
                  <div className="statistics-graph-header">
                    <span className="far fa-clock"></span>
                    {"  "}Time Spent
                  </div>
                </div>
                <div className="statistics-graph">
                  {timeTakenData && (
                    <LineGraph
                      data={timeTakenData}
                      scheme={"category10"}
                      xAxisName={"Implementation #"}
                      yAxisName={"Minutes Spent"}
                    ></LineGraph>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="statistics-graph-wrapper">
                <div className="statistics-graph-header-wrapper">
                  <div className="statistics-graph-header">
                    <span className="fas fa-exclamation-circle"></span>
                    {"  "}Mistakes Made
                  </div>
                </div>
                <div className="statistics-graph">
                  {mistakesMadeData && (
                    <LineGraph
                      data={mistakesMadeData}
                      scheme={"set1"}
                      xAxisName={"Implementation #"}
                      yAxisName={"# Mistakes"}
                    ></LineGraph>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="statistics-graph-wrapper">
                <div className="statistics-graph-header-wrapper">
                  <div className="statistics-graph-header">
                    <span className="fas fa-signature"></span> Words per Minute
                  </div>
                </div>
                <div className="statistics-graph">
                  {wordsPerMinuteData && (
                    <LineGraph
                      data={wordsPerMinuteData}
                      scheme={"pink_yellowGreen"}
                      xAxisName={"Implementation #"}
                      yAxisName={"Words Per Minute"}
                    ></LineGraph>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
