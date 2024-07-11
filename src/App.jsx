import React, { useEffect, useState } from "react";

import Header from "./Header.jsx";
import { getActivities } from "./api/index.mjs";
import ActivityCard from "./components/activity-card.jsx";
import Toast from "./components/Toast.jsx";

const App = () => {
  /**
   * @type {[Array<import("./api/activity-schema.mjs").Activity>, useState]}
   */
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities()
      .then((data) => {
        setActivities(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div className="flex flex-col gap-y-2">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>

      <Toast />
    </div>
  );
};

export default App;
