import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { recharge } from "apis/auth";
import { validUser } from "apis/auth";

const PocketDropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const [amount, setAmount] = useState(0);
  const handleRecharge = async () => {
    if (!Number(amount)) return toast.error("Amount must be greater than 0");
    let req = await recharge({ money: amount });

    if (req?.err === 200) {
      toast.success(req.msg);
      setAmount({});
      props.isValid();
      onClose();
    } else {
      toast.error(req?.msg || "error !!");
      setAmount({});
      onClose();
    }
    return;
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Recharge</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input
                placeholder="Money"
                value={amount}
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleRecharge()}>
              Apply
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="text-blueGray-400 fas fa-money-check-alt text-lg leading-lg mr-2" />{" "}
        {props.balance} $
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={onOpen}
          className="hover:bg-blueGray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Recharge
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="hover:bg-blueGray-100 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Withdraw Money
        </div>
      </div>
    </>
  );
};

export default PocketDropdown;
