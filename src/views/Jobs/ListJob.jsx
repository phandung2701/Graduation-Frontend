import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
  Heading,
  Box,
  Text,
  Stack,
  StackDivider,
  CardBody,
  Card,
  Grid,
  GridItem,
  Flex,
  Badge,
} from "@chakra-ui/react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import DetailJob from "./DetailJob";
import { listAllJob } from "apis/job";
import moment from "moment";

function ListJob() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [listJobs, setListJobs] = useState([]);
  const [selectJob, setSelectJob] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const getListMyJob = async () => {
    let data = await listAllJob();
    setListJobs(data);
  };
  useEffect(() => {
    getListMyJob();
  }, []);

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  console.log(listJobs);
  const handleSelectJob = (data = {}) => {
    setSelectJob(data);
    setShowDetail(true);
  };
  return (
    <div className="" style={{ background: "grey", minHeight: "100vh" }}>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* --------------- */}
      <IndexNavbar />

      {showDetail ? (
        <DetailJob selectJob={selectJob} />
      ) : (
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  `}
          gridTemplateRows={"0px 1fr 0px"}
          gridTemplateColumns={"300px 1fr"}
          gap="4"
          color="blackAlpha.700"
          // fontWeight="bold"
          style={{ width: "1200px", margin: "70px auto 0 auto" }}
        >
          <GridItem pl="2" bg="orange.300" area={"header"}></GridItem>
          <GridItem pl="2" area={"nav"}>
            <Card maxH={"800px"} minH={"520px"}>
              <CardBody>Filter: Coming soon ...</CardBody>
            </Card>
          </GridItem>
          <GridItem pl="2" area={"main"}>
            <Card>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4" minH={"480px"}>
                  {listJobs.length > 0 ? (
                    listJobs.map(
                      (ele) =>
                        moment(ele.expireDate).diff(
                          moment(new Date()),
                          "days"
                        ) >= 0 && (
                          <Box
                            minH={"190px"}
                            key={ele._id}
                            className="hover:text-blueGray-500"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleSelectJob(ele)}
                          >
                            <Flex align={"center"}>
                              <Heading
                                size="sm"
                                textTransform="uppercase"
                                noOfLines={1}
                              >
                                {ele.title}
                              </Heading>
                              <Text size={"xs"}>
                                -{" "}
                                {moment(ele.expireDate).diff(
                                  moment(new Date()),
                                  "days"
                                ) === 0
                                  ? moment(ele.expireDate).diff(
                                      moment(new Date()),
                                      "hours"
                                    )
                                  : moment(ele.expireDate).diff(
                                      moment(new Date()),
                                      "days"
                                    )}{" "}
                                {moment(ele.expireDate).diff(
                                  moment(new Date()),
                                  "days"
                                ) === 0
                                  ? "hours left"
                                  : "days left"}
                              </Text>
                            </Flex>
                            <Text noOfLines={5} pt="2">
                              {ele.description}
                            </Text>
                            <Stack direction="row" mt="3">
                              <Badge
                                variant="subtle"
                                colorScheme="green"
                                p={"1"}
                                borderRadius="4"
                                color={"black"}
                              >
                                Java
                              </Badge>
                              <Badge
                                variant="subtle"
                                colorScheme="green"
                                p={"1"}
                                borderRadius="4"
                                color={"black"}
                              >
                                Web
                              </Badge>
                              <Badge
                                variant="subtle"
                                colorScheme="green"
                                p={"1"}
                                borderRadius="4"
                                color={"black"}
                              >
                                HTML
                              </Badge>
                            </Stack>
                          </Box>
                        )
                    )
                  ) : (
                    <div>
                      <img
                        alt="..."
                        className="w-full rounded-full align-middle border-none shadow-lg"
                        src={require("assets/img/nojob.jpg")}
                      />
                    </div>
                  )}
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      )}
    </div>
  );
}

export default ListJob;
