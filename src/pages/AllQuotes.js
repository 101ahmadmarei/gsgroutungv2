import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-Http";
import { getAllQuotes } from "../components/lib/api";
import NoQuotesFound from "./NotFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const DummyData = [{ id: 1, text: "ali", author: "ahmad" }];
const AllQuotes = () => {
  return <QuoteList quotes={DummyData} />;
};

export default AllQuotes;
