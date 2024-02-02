import React, { useEffect, useState } from "react";

import { getListTxns } from "apis/job";
import CardTransaction from "components/Cards/CardTransaction";

export default function AllTransaction() {
  const [txn, setTxn] = useState([]);
  const getListTxn = async () => {
    let data = await getListTxns();
    setTxn(data);
  };
  useEffect(() => {
    getListTxn();
  }, []);
  return (
    <>
      <div className="flex flex-wrap pt-3">
        <div className="w-full mb-12 px-4">
          <CardTransaction txn={txn} getListTxn={getListTxn} />
        </div>
      </div>
    </>
  );
}
