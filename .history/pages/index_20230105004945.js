import { Banner } from "../components/Banner";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { Property } from "../components/Property";
import { Navbar } from "../components/Navbar";

export default function Home({ propertyForRent, propertyForSale }) {
  return (
    <Box>
      <Banner
        purpose="For Rent"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="villas and more"
        buttonText="Explore Renting"
        linkname="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent='center'>
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore from Apartments, land, builder floors,"
        desc2="villas and more"
        buttonText="Explore Buying"
        linkname="/search?purpose=for-salesdsdsd"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />  <Flex flexWrap="wrap">
      {propertyForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    }, // will be passed to the page component as props
  };
}
