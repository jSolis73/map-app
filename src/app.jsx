import React, { useState } from "react";
import Header from "./components/header";
import TravelList from "./components/travelList";
import * as TravelApi from "./api/travel.api";

const App = () => {
  const [travellings, setTravellings] = useState(TravelApi.fetchAll());

  return (
    <div>
      <Header />
      <TravelList data={travellings} />
    </div>
  );
};

export default App;
