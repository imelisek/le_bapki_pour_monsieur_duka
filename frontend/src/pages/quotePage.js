import React, {useEffect, useState} from "react";
import MainLayout from "../layout/MainLayout";
import Quote from "../components/Quote";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  function getQuote() {
    axios.get('https://api.kanye.rest/').then(resp => setQuote(resp.data.quote))
  }

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <MainLayout>
      <Quote textColor="red" quote={quote} update={() => getQuote()} />
    </MainLayout>
  );
}

export default App;