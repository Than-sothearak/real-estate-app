import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Text, Button, Flex } from "@chakra-ui/react";

export const Banner = ({
  imageUrl,
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkname,
  buttonText,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center" m={5}>
      <Image src={imageUrl} width={800} height={300} alt='banner'/>
      <Box p="30">
        <Text color="gray.700" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button size="lg" colorScheme="blue" cursor='pointer'>
          <Link href={linkname}>
            {buttonText}
          </Link>
        </Button>
      </Box>
    </Flex>

  );
};
