import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(searchParams.get("title") || "");

  useEffect(() => {
    setSearchParams({
      title: searchVal,
    });
  }, [searchVal]);

  console.log(searchVal);

  return (
    <div>
      <input
        className="search_input"
        type="search"
        value={searchVal}
        placeholder="search..."
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </div>
  );
};

export default LiveSearch;
