import {
  FormControl,
  FormLabel,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Modal,
  Button,
} from "@chakra-ui/react";
import { applyJob } from "apis/job";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ModalApplyJob = (props) => {
  const [dataSubmit, setDataSubmit] = useState({});
  const handleApply = async () => {
    if (!Number(dataSubmit.requestOffer) || !Number(dataSubmit.requestEstTime))
      return toast.error("wrong data type");
    let req = await applyJob({ ...dataSubmit, jobId: props.job._id });

    if (req?.err === 200) {
      toast.success("Apply successfully!");
      setDataSubmit({});
      props.onClose();
    } else {
      toast.error(req?.msg || "error !!");
      setDataSubmit({});
      props.onClose();
    }
    return;
  };
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Apply Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Offer</FormLabel>
              <Input
                placeholder={props.job.expectedOffer}
                value={dataSubmit.requestOffer || ""}
                type="number"
                onChange={(e) =>
                  setDataSubmit({ ...dataSubmit, requestOffer: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Time</FormLabel>
              <Input
                placeholder={props.job.estComplete}
                value={dataSubmit.requestEstTime || ""}
                type="number"
                onChange={(e) =>
                  setDataSubmit({
                    ...dataSubmit,
                    requestEstTime: e.target.value,
                  })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleApply()}>
              Apply
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalApplyJob;
