import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFilter } from 'react/icons/bs';
import { Box, Text, Button, Flex } from "@chakra-ui/react";

const Search = () => {
  const [searchFilter, setSearchFilter ] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex cursor='pointer'></Flex>
    </Box>
  )
}
export default Search;