import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";
import { Box, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { SearchFilter } from "../components/SearchFilter";
import { Property } from "../components/Property";

const Search = () => {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();
  
  const onToggle = () => {
    setSearchFilter((prevFilter) => !prevFilter)
  }
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.100"
        p="2"
        fontWeight="1g"
        justifyContent="center"
        alignItems="center"
        onClick={() => onToggle()}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilter && <SearchFilter />}
      <Text fontSize='2x1' p='4' fontWeight='bold'>
        Property {router.query.purpose} </Text>
        <Flex flexWrap='wrap'>
          {[].map((property) => <Property property={property} key={property.id} />)}
        </Flex>
        {[].length === 0 && (
          <Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'></Flex>
        )}
    </Box>
  );
};
export default Search;
