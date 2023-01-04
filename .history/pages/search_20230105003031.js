import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";
import { Box, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { SearchFilter } from "../components/SearchFilter";
import { Property } from "../components/Property";
import noResult from '../assets/no-result.jpg';
const Search = ({ properties }) => {
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
          {properties.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
        {properties.length === 0 && (
          <Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'>
            <Image src={noResult} alt='No result'/>
            <Text fontSize='2xl' marginTop='2'>No result</Text>
          </Flex>
        )}
    </Box>
  );
};
export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomMin = query.roomMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000'
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';
  
  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  // Pass data to the page via props
  return { 
    props: { properties: data?.hits } }
}