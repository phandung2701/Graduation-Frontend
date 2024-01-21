import React from "react";
import PropTypes from "prop-types";

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { Button, HStack } from "@chakra-ui/react";
import moment from "moment";

export default function CardListMyJobs({ myJob, color, getListMyJob }) {
  console.log(myJob);
  const HEADER = [
    {
      id: 2,
      header: "Job Name",
      accessor: "title",
    },
    {
      id: 7,
      header: "Description",
      accessor: "desc",
    },
    {
      id: 3,
      header: "Expected Offer",
      accessor: "expectedOffer",
    },
    {
      id: 4,
      header: "Expire Date",
      accessor: "expireDate",
    },
    {
      id: 5,
      header: "Estimate Complete",
      accessor: "estComplete",
    },
    {
      id: 6,
      header: "Status",
      accessor: "status",
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
                My Job
              </h3>
              <HStack className="flex">
                <Button colorScheme="teal" size="sm">
                  Create
                </Button>
                <Button
                  colorScheme="red"
                  size="sm"
                  variant="outline"
                  onClick={() => getListMyJob()}
                >
                  refresh
                </Button>
              </HStack>
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
          style={{ minHeight: "350px" }}
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
              {myJob.map((data, idx) => {
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
                      {data.title}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4 ">
                      <p className="line-clamp-2">{data.description}</p>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.expectedOffer}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {moment(data.expireDate).format("DD-MM-YYYY HH:mm")}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.estComplete}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                      {data.status}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <TableDropdown />
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

CardListMyJobs.defaultProps = {
  color: "light",
};

CardListMyJobs.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
