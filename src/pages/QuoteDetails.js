import React, { useEffect } from "react";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DummyData = { id: 1, text: "king", author: "123" };
const QuoteDetails = () => {
  return (
    <div>
      <HighlightedQuote text={DummyData.text} author={DummyData.author} />
    </div>
  );
};

export default QuoteDetails;
