import React, { useEffect, useState } from "react";

import Header from "./Header.jsx";
import { getActivities, activitySchema } from "./api/index.mjs";
import ActivityCard from "./components/activity-card.jsx";

const App = () => {
  /**
   * @type {[Array<z.infer<typeof activitySchema>>, useState]}
   */
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities()
      .then((data) => {
        setActivities(data);
        return;
      })
      .catch((err) => {
        console.error(err);
        return;
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default App;
