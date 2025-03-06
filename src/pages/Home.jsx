import { Box, Button, Flex, Heading, Image, Stack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" minH="100vh">
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/pizza-background')"
        bgSize="cover"
        bgPos="center"
        h={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
      >
        <Box p={6} bg="rgba(0, 0, 0, 0.6)" borderRadius="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
            Welcome to Mario's Pizza Northampton
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} mt={4}>
            Authentic, delicious pizza made fresh daily.
          </Text>
          <Button
            as={RouterLink}
            to="/menu"
            mt={6}
            colorScheme="red"
            size="lg"
          >
            View Menu
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={8}
        gap={6}
      >
        <Image
          src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/pizza-chef"
          alt="Pizza Chef"
          w={{ base: "100%", md: "50%" }}
          h="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="3xl" color="red.600">
            Our Story
          </Heading>
          <Text fontSize="lg" mt={4}>
            At Mario's Pizza, we take pride in serving the best pizza in Northampton, PA.
            Using only the freshest ingredients, our recipes have been passed down for generations.
          </Text>
          <Button as={RouterLink} to="/about" mt={4} colorScheme="red">
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Menu Preview */}
      <Box bg="gray.100" py={12}>
        <Heading textAlign="center" fontSize="3xl" color="red.600">
          Our Bestsellers
        </Heading>
        <Flex
          wrap="wrap"
          justify="center"
          gap={6}
          mt={6}
          px={6}
        >
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/pepperoni-pizza"
              alt="Pepperoni Pizza"
              w="250px"
              h="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text fontSize="lg" mt={2}>Pepperoni Pizza</Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/cheese-pizza"
              alt="Cheese Pizza"
              w="250px"
              h="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text fontSize="lg" mt={2}>Cheese Pizza</Text>
          </Box>
          <Box textAlign="center">
            <Image
              src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/veggie-pizza"
              alt="Veggie Pizza"
              w="250px"
              h="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text fontSize="lg" mt={2}>Veggie Pizza</Text>
          </Box>
        </Flex>
        <Flex justify="center" mt={6}>
          <Button as={RouterLink} to="/menu" colorScheme="red">
            View Full Menu
          </Button>
        </Flex>
      </Box>

      {/* Visit Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={8}
        gap={6}
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="3xl" color="red.600">
            Visit Us
          </Heading>
          <Text fontSize="lg" mt={4}>
            851 Main St, Northampton, PA 18067, USA
          </Text>
          <Text fontSize="lg">(610) 262-0550</Text>
          <Button as={RouterLink} to="/visit" mt={4} colorScheme="red">
            Get Directions
          </Button>
        </Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/pizza-shop"
          alt="Pizza Shop"
          w={{ base: "100%", md: "50%" }}
          h="300px"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>
    </Box>
  );
};

export default Home;