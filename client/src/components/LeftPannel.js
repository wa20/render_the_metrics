import React from "react";
import EpochTimeStamp from "./EpochTimeStamp";
import EpochTimeDiff from "./EpochTimeDiff";

export default function LeftPanel() {


  return (
    <>
      <div className="p-2">
        <EpochTimeDiff />
      </div>
      <div className="p-2">
        <EpochTimeStamp />
      </div>
    </>
  );
}
