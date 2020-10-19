import React, {useEffect, useState} from "react";
import AceEditor from "react-ace";
import Timer from 'react-compound-timer'

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

// Import components
import Stars from "./../components/stars";

// Fake Data
const name = "Bubble Sort";
const difficulty = 2;
const attempts = 1;
const description = "Iterative Sorting Algorithm";
const longDescription = "Bubble Sort is an Iterative Sorting Algorithm. It has best case scenario of nLogN time.";
const bigO = "nlogn";
const category = "Sorting";

const AlgorithmDetail = (props) => {
  
  let [hasStarted, updateHasStarted] = useState(false);

  let handleStartClick = (event) => {
    event.preventDefault();

    updateHasStarted(true);
    console.log("Starting Time");
  }



  return (
    <div className="algo-detail-wrapper">
      <div className="algo-detail-header-wrapper">
        <div className="algo-detail-title-row-wrapper">
          <div className="d-flex justify-content-left">
            <div className="algo-detail-title-wrapper">
              <h2 className="algo-detail-title">{name}</h2>
            </div>
            <div className="algo-detail-difficulty-wrapper">
              <Stars numStars={difficulty}></Stars>
            </div>
          </div>
        </div>
        <div className="algo-detail-attributes-row-wrapper">
          <div className="d-flex justify-content-left">
            <div className="algo-detail-big-o-wrapper">
              <div className="algo-detail-big-o">{bigO}</div>
            </div>
            <div className="algo-detail-category-wrapper">
              <div className="algo-detail-category">{category}</div>
            </div>
          </div>
        </div>
        <div className="algo-detail-description-row-wrapper">
          <div className="algo-detail-description-wrapper">
            <p className="algo-detail-description">{longDescription}</p>
          </div>
        </div>
      </div>
      <div className="algo-detail-input-wrapper">
        <div className="algo-detail-input">
          <div className="algo-detail-input-header-wrapper">
            <div className="algo-detail-input-header">
              <div className="d-flex justify-content-between">
                <div className="algo-detail-language-type-wrapper">
                  <div className="algo-detail-language-type">
                    Python <span className="fas fa-angle-down"></span>
                  </div>
                </div>
                <div className="algo-detail-timer-wrapper">
                    {hasStarted && (
                        <div className="algo-detail-timer">
                            <Timer startImmediately={true}>
                                <Timer.Minutes />:<Timer.Seconds/>
                            </Timer>
                        </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          {!hasStarted ? (
            <div className="start-button-wrapper" id="start-button">
              <button onClick={handleStartClick} className="start-button">
                Start
              </button>
            </div>
          ) : (
            <div className="algo-detail-input-text-wrapper">
              <div className="algo-detail-input-text">
                <AceEditor
                    mode="python"
                    theme="github"
                    height="400px"
                    width="100%"
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                    }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetail;
