import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DummyData = [{ id: 1, text: "ali", author: "ahmad" }];
const AllQuotes = () => {
  return <QuoteList quotes={DummyData} />;
};

export default AllQuotes;
