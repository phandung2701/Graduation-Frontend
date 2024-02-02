import React from "react";
import {
  Button,
  useDisclosure,
  Heading,
  Box,
  Text,
  Stack,
  CardBody,
  Card,
  Grid,
  GridItem,
  Flex,
  Badge,
} from "@chakra-ui/react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import moment from "moment";
import { acessCreate } from "apis/chat";
import { useDispatch } from "react-redux";
import { fetchChats } from "../../redux/chatsSlice";
import { useHistory } from "react-router-dom";
import ModalApplyJob from "components/Modal/ModalApplyJob";

const DetailJob = (props) => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("userToken");
  const history = useHistory();
  const handleClick = async (e) => {
    await acessCreate({ userId: e._id });
    dispatch(fetchChats());
    history.push("/chats");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(props.selectJob);
  return (
    <div className="" style={{ background: "grey" }}>
      <ModalApplyJob
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        job={props.selectJob}
      />
      <IndexNavbar />
      <Grid
        templateAreas={`"header header" "nav main"`}
        gridTemplateColumns={"850px 1fr"}
        gap="4"
        color="blackAlpha.700"
        style={{ width: "1200px", margin: "70px auto 0 auto" }}
      >
        <GridItem pl="2" area={"main"}>
          <Card maxH={"400px"} minH={"320px"}>
            <CardBody>
              <div className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
                <div className="relative h-10"></div>
                <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                  <img
                    alt="f"
                    className="object-cover w-full h-full"
                    src={props.selectJob.user.profilePic}
                  />
                </div>
                <div className="mt-16">
                  <h1 className="text-lg text-center font-semibold">
                    {props.selectJob.user.name}
                  </h1>
                  <p className="text-sm text-gray-600 text-center">
                    {props.selectJob.user.email}
                  </p>
                </div>
                <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                  <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                    User experience
                  </div>
                  <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                    VueJS
                  </div>
                  <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                    TailwindCSS
                  </div>
                  <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                    React
                  </div>
                  <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                    Painting
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          <Card mb={3}>
            <CardBody>
              <Flex justify={"space-between"}>
                <Box>
                  <Heading size="sm" textTransform="uppercase" mb={2}>
                    {props.selectJob.title}
                  </Heading>
                  <Badge
                    variant="subtle"
                    p={"1"}
                    borderRadius="4"
                    color={"black"}
                    mt={4}
                    mb={4}
                  >
                    <i className="text-blueGray-400 far fa-clock px-2" />
                    {moment(props.selectJob.expireDate).format(
                      "DD-MM-YYYY HH:mm"
                    )}
                  </Badge>
                </Box>
                <Text size={"xl"} fontWeight="bold">
                  {props.selectJob.expectedOffer}$
                </Text>
              </Flex>
              {token && (
                <Stack direction="row" spacing={4} align="center" mt={4}>
                  <Button colorScheme="teal" variant="solid" onClick={onOpen}>
                    <i className=" fab fa-twitter px-2" />
                    Apply
                  </Button>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    onClick={() => handleClick(props.selectJob.user)}
                  >
                    <i className="text-blueGray-400 fab fa-rocketchat px-2" />
                    Send message
                  </Button>
                </Stack>
              )}
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Heading size="sm" textTransform="uppercase" mb={2}>
                Detail
              </Heading>
              <Text>{props.selectJob.description}</Text>
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
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};

export default DetailJob;
