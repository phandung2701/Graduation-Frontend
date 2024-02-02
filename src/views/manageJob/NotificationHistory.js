import React, { useEffect, useState } from "react";

import { notificationHistory } from "apis/notification";
import CardTableNotification from "components/Cards/CardTableNotification";

export default function NotificationHistory() {
  const [notification, setNotification] = useState([]);
  console.log("okla");
  const getNotification = async () => {
    let data = await notificationHistory();
    setNotification(data);
  };
  useEffect(() => {
    getNotification();
  }, []);
  return (
    <>
      <div className="flex flex-wrap pt-3">
        <div className="w-full mb-12 px-4">
          <CardTableNotification
            notification={notification}
            getNotification={getNotification}
          />
        </div>
      </div>
    </>
  );
}
