import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
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
