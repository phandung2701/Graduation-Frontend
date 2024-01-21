import React, { useEffect, useState } from "react";

import CardListMyJobs from "components/Cards/CardListMyJobs";
import { listMyJob } from "apis/job";

export default function MyJobs() {
  const [myJob, setMyJob] = useState([]);
  const getListMyJob = async () => {
    let data = await listMyJob();
    setMyJob(data);
  };
  useEffect(() => {
    getListMyJob();
  }, []);
  return (
    <>
      <div className="flex flex-wrap pt-3">
        <div className="w-full mb-12 px-4">
          <CardListMyJobs myJob={myJob} getListMyJob={getListMyJob} />
        </div>
      </div>
    </>
  );
}
