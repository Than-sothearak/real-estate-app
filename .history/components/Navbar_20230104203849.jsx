import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
const Navbar = () => {
  return (
    <Flex m={0} p="0" borderBottom="0" borderColor="gray.100">
      <Box p='5'fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Flex color="blue.500" p='0'>
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link href="/" passHref>
            <Button
              paddingLeft="5"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </Link>
          <Link href="/search" passHref>
            <Button
              paddingLeft="5"
              variant="ghost"
              aria-label="Search"
              my={5}
              w="100%"
            >
              Search
            </Button>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <Button
              paddingLeft="5"
              variant="ghost"
              aria-label="Buy Property"
              my={5}
              w="100%"
            >
              Buy Property
            </Button>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <Button
              paddingLeft="5"
              variant="ghost"
              aria-label="Rent Property"
              my={5}
              w="100%"
            >
              Rent Property
            </Button>
          </Link>
        </Flex>
        <Box   p='90' display={["flex", "flex", "none", "none"]}>
          <Menu
          
            aria-label="Open menu"
          >
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outline"
              color="blue.500"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
