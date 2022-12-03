import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes"
import NewQuote from "./pages/NewQuote"
import QuoteDetails from './pages/QuoteDetails'

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route element={<AllQuotes />} path="allQuotes" />
          <Route element={<NewQuote />} path="addQuotes" />
          <Route element={<QuoteDetails />} path="detailQuotes" />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
