import { Box, Button, Container, Divider, Flex, Heading, IconButton, Stack, Text, Textarea, useDisclosure, VStack } from "@chakra-ui/react";
import { FaCheck, FaFileArchive, FaShippingFast, FaWarehouse } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments, setComments] = useState("");
  const [complianceChecked, setComplianceChecked] = useState(false);

  // Mock data for the sections
  const warehouseData = ["Stone A", "Stone B", "Stone C"];
  const shipmentArchiveData = ["Shipment 1", "Shipment 2", "Shipment 3"];

  // Handlers
  const handleComplianceCheck = () => {
    setComplianceChecked(true);
    // In a real-world scenario, you would also update the database here
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  // Mock function to change the classification of the stone
  const handleChangeClassification = (stone) => {
    // In a real-world scenario, you would implement change logic here
    console.log(`Changing classification of ${stone}`);
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} my={10}>
        {/* A. Inner warehouse section */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" mb={4}>
            <FaWarehouse /> Inner Warehouse
          </Heading>
          {warehouseData.map((stone, index) => (
            <Flex key={index} justify="space-between" align="center">
              <Text>{stone}</Text>
              <IconButton icon={<FaCheck />} aria-label="Change classification" onClick={() => handleChangeClassification(stone)} />
            </Flex>
          ))}
        </Box>

        {/* B. Shipment Archive section */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" mb={4}>
            <FaFileArchive /> Shipment Archive
          </Heading>
          {shipmentArchiveData.map((shipment, index) => (
            <Text key={index}>{shipment}</Text>
          ))}
        </Box>

        {/* C. Shipment authorization request button */}
        <Button leftIcon={<FaShippingFast />} colorScheme="blue" onClick={onOpen}>
          Shipment Authorization Request
        </Button>

        {/* D. Compliance check section */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" mb={4}>
            Compliance Check
          </Heading>
          <Text>{complianceChecked ? "Compliance has been checked." : "Compliance needs to be checked."}</Text>
          <Button mt={4} onClick={handleComplianceCheck} isDisabled={complianceChecked}>
            Check Compliance
          </Button>
          <Divider my={4} />
          <Textarea value={comments} onChange={handleCommentChange} placeholder="Add a comment if something does not correspond" size="sm" />
        </Box>
      </VStack>

      {/* Modal for Shipment Authorization Request */}
      {/* This would be a modal component in a real-world scenario */}
      {isOpen && (
        <Stack position="fixed" top="20%" left="50%" transform="translateX(-50%)" p={5} shadow="lg" bg="white" zIndex={10} spacing={4}>
          <Heading fontSize="lg">Shipment Authorization Request</Heading>
          {/* Form fields would go here */}
          <Button colorScheme="blue" onClick={onClose}>
            Submit Request
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default Index;
