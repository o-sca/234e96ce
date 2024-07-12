import React, { useEffect, useState } from "react";

import Header from "./components/layouts/header.jsx";
import Footer from "./components/layouts/footer.jsx";
import {
  getActivities,
  archiveAllActivities,
  resetActivities,
} from "./api/index.mjs";
import ArchiveAllButton from "./components/archive-all-button.jsx";
import ActivityFeed from "./pages/feed.jsx";
import ArchivedFeed from "./pages/archived.jsx";
import { toast, ToastContainer } from "react-toastify";
import ArchivedPortal from "./components/archived-portal.jsx";
import FeedPortal from "./components/feed-portal.jsx";
import ResetAllButton from "./components/reset-all-button.jsx";

const App = () => {
  /**
   * @type {[Array<import("./api/activity-schema.mjs").Activity>, useState]}
   */
  const [activities, setActivities] = useState([]);
  /**
   * @type {[Array<import("./api/activity-schema.mjs").Activity>, useState]}
   */
  const [archived, setArchived] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    getActivities()
      .then((data) => {
        if (data.length < 1) return;

        const notArchived = [];
        const isArchived = [];
        data.forEach((activity) => {
          if (!activity.is_archived) notArchived.push(activity);
          else isArchived.push(activity);
        });

        setArchived(isArchived);
        setActivities(notArchived);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch activities");
      });
  }, []);

  const onArchiveAllCalls = () => {
    if (activities.length < 1) return;
    archiveAllActivities()
      .then(() => {
        setActivities([]);
        setArchived([...activities, ...archived]);
      })
      .catch(() => {
        toast.error("Failed to archive activities");
      });
  };

  const onResetAllCalls = () => {
    if (archived.length < 1) return;
    resetActivities()
      .then(() => {
        setActivities([...activities, ...archived]);
        setArchived([]);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to reset activities");
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view overflow-y-auto">
        <div className="flex flex-col gap-y-2">
          {showArchived ? (
            <>
              <ResetAllButton
                onClick={() => onResetAllCalls()}
                disabled={archived.length < 1}
              />
              <span onClick={() => setShowArchived(!showArchived)}>
                <FeedPortal />
              </span>
              <ArchivedFeed activities={archived} setActivities={setArchived} />
            </>
          ) : (
            <>
              <ArchiveAllButton
                onClick={() => onArchiveAllCalls()}
                disabled={activities.length < 1}
              />
              <span onClick={() => setShowArchived(!showArchived)}>
                <ArchivedPortal archivedCount={archived.length} />
              </span>
              <ActivityFeed
                activities={activities}
                setActivities={setActivities}
                setArchived={setArchived}
              />
            </>
          )}
        </div>
      </div>
      <ToastContainer />
      <Footer calls={activities.length} />
    </div>
  );
};

export default App;
