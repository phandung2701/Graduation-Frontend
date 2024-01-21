import React from "react";
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
  ButtonGroup,
} from "@chakra-ui/react";
import IndexNavbar from "../../components/Navbars/IndexNavbar";

const DetailJob = () => {
  return (
    <div className="" style={{ background: "grey" }}>
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
            <CardBody>Filter: Coming soon ...</CardBody>
          </Card>
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          <Card mb={3}>
            <CardBody>
              <Flex justify={"space-between"}>
                <Box>
                  <Heading size="sm" textTransform="uppercase" mb={2}>
                    E-commerce Page Display & URL Customization
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
                    11/11/2024
                  </Badge>
                </Box>
                <Text size={"xl"} fontWeight="bold">
                  $250
                </Text>
              </Flex>
              <Stack direction="row" spacing={4} align="center" mt={4}>
                <Button colorScheme="teal" variant="solid">
                  <i className=" fab fa-twitter px-2" />
                  Apply
                </Button>
                <Button colorScheme="teal" variant="outline">
                  <i className="text-blueGray-400 fab fa-rocketchat px-2" />
                  Send message
                </Button>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Heading size="sm" textTransform="uppercase" mb={2}>
                Detail
              </Heading>
              <Text>
                {`I am looking for a skilled and experienced web developer who can
                swiftly address a few issues on my e-commerce website,
                particularly on the new order and checkout pages. Here are the
                specifics: 
                - First, both the delivery date and gift message are
                not correctly displaying on the said pages. Your task would be
                to diagnose and rectify this issue, ensuring that both elements
                appear as intended on all orders and during the checkout
                process. 
                - Secondly, I require a slight alteration to the
                structure of our URLs. The current format is "[login to view
                URL]"; however, I want the "/pages/" segment removed, to
                simplify the URL for a better customer experience. The end goal
                is to have URLs that look like this: "[login to view URL]".
                Ideal candidates should have a deep understanding of web
                development, particularly in troubleshooting display issues and
                modifying URL structures. Prior experience handling similar
                e-commerce project will be considered a plus. 
                You have to complete the project in 2 days after creation of milestone. I am
                looking for a skilled and experienced web developer who can
                swiftly address a few issues on my e-commerce website,
                particularly on the new order and checkout pages. Here are the
                specifics: 
                - First, both the delivery date and gift message are
                not correctly displaying on the said pages. Your task would be
                to diagnose and rectify this issue, ensuring that both elements
                appear as intended on all orders and during the checkout
                process.
                 - Secondly, I require a slight alteration to the
                structure of our URLs. The current format is "[login to view
                URL]"; however, I want the "/pages/" segment removed, to
                simplify the URL for a better customer experience. The end goal
                is to have URLs that look like this: "[login to view URL]".
                Ideal candidates should have a deep understanding of web
                development, particularly in troubleshooting display issues and
                modifying URL structures. Prior experience handling similar
                e-commerce project will be considered a plus. You have to
                complete the project in 2 days after creation of milestone.`}
              </Text>
              <Stack direction="row" mt="3">
                <Badge
                  variant="subtle"
                  colorScheme="green"
                  p={"1"}
                  borderRadius="4"
                  color={"black"}
                >
                  Removed
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
