import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFilter } from 'react-icons/bs'
import { Box, Text, Button, Flex, Icon} from "@chakra-ui/react";

const Search = () => {
  const [searchFilter, setSearchFilter ] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex cursor='pointer' bg='gray.100' borderBottom='1px' borderColor='gray.100' 
      p='2' fontWeight='1g' justifyContent='center' alignItems='center'>
        <Text>Search Property By Filters</Text>
        <Icon />
      </Flex>
    </Box>
  )
}
export default Search;