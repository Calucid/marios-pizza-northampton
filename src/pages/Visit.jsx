import { Box, Heading, Text, Image, VStack, HStack, Link, Divider } from "@chakra-ui/react";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="red.600">
          Visit Mario's Pizza Northampton
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/pizza-shop-exterior"
          alt="Mario's Pizza Exterior"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="lg">
            Come visit us at our convenient location in Northampton, PA. Enjoy our delicious pizzas, friendly atmosphere, and great service!
          </Text>
        </Box>

        <Divider />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" color="red.600">
            Our Location
          </Heading>

          <Text fontSize="md">
            <strong>Mario's Pizza Shop</strong>
            <br />
            851 Main St, Northampton, PA 18067, USA
            <br />
            Phone: <Link href="tel:+16102620550" color="blue.500">(610) 262-0550</Link>
          </Text>

          <Box w="100%" h={{ base: "300px", md: "400px" }} borderRadius="md" overflow="hidden">
            <iframe
              title="Mario's Pizza Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=851+Main+St,Northampton,PA+18067,USA`}
            ></iframe>
          </Box>
        </VStack>

        <Divider />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" color="red.600">
            Our Hours
          </Heading>

          <Text fontSize="md">
            <strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM
            <br />
            <strong>Friday - Saturday:</strong> 11:00 AM - 10:00 PM
            <br />
            <strong>Sunday:</strong> 12:00 PM - 8:00 PM
          </Text>
        </VStack>

        <Divider />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" color="red.600">
            Why Visit Us?
          </Heading>

          <HStack spacing={4} wrap="wrap" justify="center">
            <VStack maxW="300px" textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/delicious-pizza"
                alt="Delicious Pizza"
                width="100%"
                height="200px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text fontSize="md">Freshly made pizza with the finest ingredients.</Text>
            </VStack>

            <VStack maxW="300px" textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/friendly-staff"
                alt="Friendly Staff"
                width="100%"
                height="200px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text fontSize="md">Friendly staff that makes you feel at home.</Text>
            </VStack>

            <VStack maxW="300px" textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/cozy-dining"
                alt="Cozy Dining"
                width="100%"
                height="200px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text fontSize="md">A warm and inviting atmosphere for all.</Text>
            </VStack>
          </HStack>
        </VStack>

        <Divider />

        <VStack spacing={4} align="stretch" textAlign="center">
          <Heading as="h2" size="lg" color="red.600">
            Explore More
          </Heading>

          <HStack spacing={4} justify="center">
            <Link href="/" color="blue.500" fontSize="lg">
              Home
            </Link>
            <Link href="/menu" color="blue.500" fontSize="lg">
              Menu
            </Link>
            <Link href="/about" color="blue.500" fontSize="lg">
              About Us
            </Link>
            <Link href="/contact" color="blue.500" fontSize="lg">
              Contact
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Visit;