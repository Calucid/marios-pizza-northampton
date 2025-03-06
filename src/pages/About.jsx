import { Box, Heading, Text, Image, Stack, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <Stack spacing={6} textAlign="center">
        <Image 
          src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/pizza-shop-front" 
          alt="Mario's Pizza Shop Front" 
          width="100%" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md" 
        />
        <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} color="red.600">
          Welcome to Mario's Pizza Northampton
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="800px" mx="auto">
          Located at <strong>851 Main St, Northampton, PA 18067</strong>, Mario's Pizza has been serving 
          the community with delicious, handcrafted pizzas and Italian specialties. With our commitment to 
          quality ingredients and traditional recipes, we bring the authentic taste of Italy to your table.
        </Text>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/fresh-pizza" 
          alt="Fresh Pizza" 
          width="100%" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md" 
        />
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} color="red.500">
          Our Story
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="800px" mx="auto">
          Mario's Pizza was founded with a passion for great food and a love for the Northampton community. 
          Every pizza is made fresh, using only the finest ingredients, ensuring a flavorful and satisfying 
          experience every time. Whether you're dining in, taking out, or ordering for delivery, we are 
          dedicated to making every meal memorable.
        </Text>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/pizza-making" 
          alt="Making Pizza" 
          width="100%" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md" 
        />
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} color="red.500">
          Visit Us
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="800px" mx="auto">
          Stop by our shop today and taste the difference! We’re open daily and ready to serve you the best 
          pizza in Northampton. Have questions? Give us a call at 
          <strong> (610) 262-0550</strong>.
        </Text>
        <VStack spacing={4}>
          <Link as={RouterLink} to="/menu" fontSize="lg" color="red.400" fontWeight="bold">
            View Our Menu
          </Link>
          <Link as={RouterLink} to="/visit" fontSize="lg" color="red.400" fontWeight="bold">
            Get Directions
          </Link>
          <Link as={RouterLink} to="/contact" fontSize="lg" color="red.400" fontWeight="bold">
            Contact Us
          </Link>
        </VStack>
      </Stack>
    </Box>
  );
};

export default About;