import { Box, Heading, Text, Link, VStack, HStack, Input, Textarea, Button, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="red.600">
          Contact Mario's Pizza
        </Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/marios-pizza-northampton/location" 
          alt="Mario's Pizza Location" 
          width="100%" 
          height="250px" 
          objectFit="cover" 
          borderRadius="md" 
        />

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Mario's Pizza Shop</Text>
          <Text>851 Main St, Northampton, PA 18067, USA</Text>
          <Text>Phone: <Link href="tel:+16102620550" color="red.500">(610) 262-0550</Link></Text>
          <Text>Email: <Link href="mailto:contact@mariospizza.com" color="red.500">contact@mariospizza.com</Link></Text>
        </Box>

        <HStack justify="center" spacing={4}>
          <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="red" />
          <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="red" />
          <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="red" />
        </HStack>

        <Box as="form" bg="gray.100" p={6} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4} textAlign="center">Send Us a Message</Heading>
          <VStack spacing={4}>
            <Input placeholder="Your Name" size="lg" />
            <Input placeholder="Your Email" type="email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" rows={5} />
            <Button colorScheme="red" size="lg" width="full">Send Message</Button>
          </VStack>
        </Box>

        <HStack justify="center" spacing={6} mt={6}>
          <Link as={RouterLink} to="/" color="red.500" fontSize="lg">Home</Link>
          <Link as={RouterLink} to="/about" color="red.500" fontSize="lg">About</Link>
          <Link as={RouterLink} to="/menu" color="red.500" fontSize="lg">Menu</Link>
          <Link as={RouterLink} to="/visit" color="red.500" fontSize="lg">Visit</Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Contact;