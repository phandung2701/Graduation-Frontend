import React, { useState } from "react";
import PropTypes from "prop-types";

import MyJobDropdown from "components/Dropdowns/MyJobDropdown.js";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import { getApplicationList } from "apis/job";
import TableApplications from "./TableApplications";
import { doneJob } from "apis/job";
import { toast } from "react-toastify";

export default function CardListMyJobs({ myJob, color, getListMyJob }) {
  const [jobApplys, setJobApplys] = useState([]);
  const [selectJob, setSelectJob] = useState({});
  const HEADER = [
    {
      id: 1,
      header: "Code",
      accessor: "title",
    },
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
    {
      id: 11,
      header: "Complete Job",
      accessor: "complete",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleGetJobApply = async (data) => {
    setSelectJob(data);
    let req = await getApplicationList({ jobId: data._id });
    if (req) {
      setJobApplys(req);
      onOpen();
    }
  };
  const handleDoneJob = async (data) => {
    let req = await doneJob({ jobId: data._id });
    if (req && req.err === 200) {
      toast.success(req.msg);
      getListMyJob();
    } else {
      toast.error(req.msg);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Submit</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Applications</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <TableApplications
              jobApply={jobApplys}
              onClose={onClose}
              getListMyJob={getListMyJob}
              handleGetJobApply={handleGetJobApply}
              selectJob={selectJob}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
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
                      {data.sid}
                    </td>
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
                      <i
                        className={`fas fa-circle  text-${
                          data.status === "inactive" ? "red" : "emerald"
                        }-500 mr-2`}
                      ></i>{" "}
                      {data.status}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.status === "inProgress" ? (
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          size={"sm"}
                          onClick={() => handleDoneJob(data)}
                        >
                          done
                        </Button>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <MyJobDropdown
                        handleGetJobApply={() => handleGetJobApply(data)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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
