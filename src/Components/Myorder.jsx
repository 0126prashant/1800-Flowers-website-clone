import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const MyOrder = ({ order }) => {
  return (
    <Box
      bg="white"
      border="2px solid"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      m={4}
      boxShadow="md"
    >
      <Flex align="center">
        <Image
          src={order.avatar}
          alt={order.title}
          boxSize={20}
          objectFit="cover"
          mr={4}
        />
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            {order.title}
          </Text>
          <Text fontWeight="bold" color="gray.500">
            ${order.price / 100}
          </Text>
        </Box>
        <Box ml="auto">
          <FaTimes color="red" cursor="pointer" />
        </Box>
      </Flex>
    </Box>
  );
};

export default MyOrder;