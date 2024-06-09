import React from "react";
import { Box, Flex, Text, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      mt="auto"
      py={6}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Text fontSize="sm">
          Connect with me:
        </Text>
        <Flex mt={2} justify="center">
          <Link href="https://github.com/siddheshhr" isExternal mx={2}>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://www.linkedin.com/in/siddhesh-r-357957256/" isExternal mx={2}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        </Flex>
      </Flex>
      <Box mt={4}>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
          &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
