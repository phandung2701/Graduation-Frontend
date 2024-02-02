import React from "react";
import PropTypes from "prop-types";

import { Button } from "@chakra-ui/react";
import moment from "moment";
import { approveJob } from "apis/job";
import { toast } from "react-toastify";

const COLOR = {
  pending: "orange",
  done: "emerald",
  reject: "red",
  inProgress: "blue",
};

export default function TableApplications({
  getListMyJob,
  jobApply,
  color,
  onClose,
  handleGetJobApply,
  selectJob,
}) {
  const handleApproveJob = async (data) => {
    let approve = await approveJob({ jobApplyId: data._id });
    console.log(approve);
    if (approve && approve?.err === 200) {
      toast.success(approve?.msg);
      onClose();
      getListMyJob();
    } else {
      toast.error(approve?.msg);
    }
  };
  const HEADER = [
    {
      id: 2,
      header: "Job Name",
      accessor: "title",
    },
    {
      id: 17,
      header: "Apply Date",
      accessor: "applyDate",
    },
    {
      id: 3,
      header: "Offer proposal",
      accessor: "offer",
    },
    {
      id: 4,
      header: "Estimated completion time",
      accessor: "esTime",
    },
    {
      id: 5,
      header: "Status",
      accessor: "status",
    },
    {
      id: 7,
      header: "Approve Date",
      accessor: "approveDate",
    },
    {
      id: 10,
      header: "Assignee",
      accessor: "user",
    },
    {
      id: 15,
      header: "Progress",
      accessor: "progress",
    },
  ];

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative flex w-full px-4 max-w-full flex-grow flex-1 items-center justify-between">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Jobs Apply
              </h3>
              <Button
                colorScheme="red"
                size="sm"
                variant="outline"
                onClick={() => handleGetJobApply(selectJob)}
              >
                refresh
              </Button>
            </div>
          </div>
          {/* <div className="flex flex-wrap items-center">
            <div className="relative flex w-full px-4 max-w-full flex-grow flex-1 items-center">
              search
            </div>
          </div> */}
        </div>
        <div
          className="block w-full overflow-x-auto"
          style={{ minHeight: "300px" }}
        >
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-black-600" : "text-white")
                    }
                  >
                    #
                  </span>
                </th>
                {HEADER.map((head) => (
                  <th
                    key={head.id}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    {head.header}
                  </th>
                ))}
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {jobApply.map((data, idx) => {
                // Object.entries(data).map(([key,val]) => {
                //   let index = POSITION.findIndex((col) => col === key);
                //   if(data.badges){
                //     return (
                //       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                //       <i className={`fas fa-circle ${} mr-2`}></i>{" "}
                //       {data.status}
                //       </td>
                //     )
                //   }
                // })
                // if (data.badges) {
                //   return;
                // }
                return (
                  <tr key={idx}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {idx + 1}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.job?.title}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4 ">
                      <p className="line-clamp-1">
                        {moment(data.requestDate).format("DD-MM-YYYY HH:mm")}
                      </p>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.requestOffer}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.requestEstTime}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i
                        className={`fas fa-circle text-${
                          COLOR[data.status]
                        }-500 mr-2`}
                      ></i>{" "}
                      {data.status}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.approveDate
                        ? moment(data.approveDate).format("DD-MM-YYYY HH:mm")
                        : ""}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.user?.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">{data.progress || "0%"}</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: data.progress || 0 }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.status === "active" ? (
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          size={"sm"}
                          onClick={() => handleApproveJob(data)}
                        >
                          Approve
                        </Button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/*pagination */}

        {/* <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative flex w-full px-4 max-w-full flex-grow flex-1 items-center">
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  <span class="font-medium">1</span>
                  to
                  <span class="font-medium">10</span>
                  of
                  <span class="font-medium">97</span>
                  results
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/*  */}
      </div>
    </>
  );
}

TableApplications.defaultProps = {
  color: "light",
};

TableApplications.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
