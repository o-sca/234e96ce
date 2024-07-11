import React, { useEffect, useState } from "react";

import Header from "./components/layouts/header.jsx";
import Footer from "./components/layouts/footer.jsx";
import { getActivities, archiveAllActivities } from "./api/index.mjs";
import ArchiveAllButton from "./components/archive-all-button.jsx";
import ActivityFeed from "./pages/Feed.jsx";
import { toast, ToastContainer } from "react-toastify";

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
      .catch(() => {
        toast.error("Failed to fetch activities");
      });
  }, []);

  const onArchiveAllCalls = () => {
    if (activities.length < 1) return;
    archiveAllActivities(via)
      .then(() => {
        setActivities([]);
      })
      .catch(() => {
        toast.error("Failed to archive activities");
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div className="flex flex-col gap-y-2">
          <ArchiveAllButton
            onClick={() => onArchiveAllCalls()}
            disabled={activities.length < 1}
          />
          <ActivityFeed activities={activities} />
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
