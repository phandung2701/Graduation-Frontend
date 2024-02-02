import React, { useEffect, useState } from "react";

// components

import CardTableUser from "components/Cards/CardTableUser";
import { getListUser } from "apis/auth";

export default function Tables() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let data = await getListUser();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableUser users={users} getUsers={getUsers} />
        </div>
      </div>
    </>
  );
}
