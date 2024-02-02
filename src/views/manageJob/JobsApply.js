import React, { useEffect, useState } from "react";

import CardTableJobApply from "components/Cards/CardTableJobApply";
import { listMyJobApply } from "apis/job";

export default function MyJobs() {
  const [jobApply, setJobApply] = useState([]);
  const getListMyJobApply = async () => {
    let data = await listMyJobApply();
    setJobApply(data);
  };
  useEffect(() => {
    getListMyJobApply();
  }, []);
  return (
    <>
      <div className="flex flex-wrap pt-3">
        <div className="w-full mb-12 px-4">
          <CardTableJobApply
            jobApply={jobApply}
            getListMyJobApply={getListMyJobApply}
          />
        </div>
      </div>
    </>
  );
}
