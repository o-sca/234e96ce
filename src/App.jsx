import React, { useEffect, useState } from "react";

import Header from "./Header.jsx";
import { getActivities, archiveAllActivities } from "./api/index.mjs";
import ArchiveAllButton from "./components/archive-all-button.jsx";
import ActivityFeed from "./pages/Feed.jsx";

const App = () => {
  /**
   * @type {[Array<import("./api/activity-schema.mjs").Activity>, useState]}
   */
  const [activities, setActivities] = useState([]);

  /** @type {[number, useState]} */
  const [via, setVia] = useState(-1);

  useEffect(() => {
    getActivities()
      .then((data) => {
        if (data.length < 1) return;

        const filtered = [];
        data.forEach((activity) => {
          if (!activity.is_archived) filtered.push(activity);
        });

        setActivities(filtered);
        setVia(1);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onArchiveAllCalls = () => {
    archiveAllActivities(via)
      .then(() => {
        setActivities([]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div className="flex flex-col gap-y-2">
          <ArchiveAllButton onClick={() => onArchiveAllCalls()} />
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default App;
