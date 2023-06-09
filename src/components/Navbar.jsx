import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Stack,
  useColorMode,
  useColorModeValue as mode,
  MenuItem,
  Menu,
  MenuList,
  MenuButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiWorld } from "react-icons/gi";
import { FaMedium, FaFacebook, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { linkName: "About", path: "/about" },
  { linkName: "Contact", path: "/contact" },
];
const blogLinks = [
  { linkName: "All Blogs", category: "all" },
  { linkName: "Latest Blogs", category: "latest" },
  { linkName: "Europe", category: "europe" },
  { linkName: "America", category: "america" },
  { linkName: "Asia", category: "asia" },
  { linkName: "Oceania", category: "oceania" },
  { linkName: "Africa", category: "africa" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px="2"
    py="2"
    fontWeight="semibold"
    _hover={{ textDecoration: "none", bg: mode("blue.100", "blue.800") }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [logoHover, setLogoHover] = useState(false);

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  return (
    <Box bg={mode("blue.200", "blue.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          bg={mode("blue.200", "blue.900")}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link
            as={ReactLink}
            to="/"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <Flex alignItems="center">
              <Icon as={GiWorld} mr="2" h="10" w="10" color={logoHover ? "gray.200" : mode("gray.600", "gray.400")} />
              <Text fontWeight="extrabold" color={mode("gray.600", "gray.400")}>
                TravelLenzo
              </Text>
            </Flex>
          </Link>
          <HStack display={{ base: "none", md: "flex" }} pl="10">
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <Menu>
              <MenuButton fontWeight="semibold" p="2" _hover={{ bg: mode("blue.100", "blue.800") }}>
                Blog
              </MenuButton>
              <MenuList>
                {blogLinks.map((link) => (
                  <MenuItem key={link.linkName} as={ReactLink} to={`/blog/${link.category}`}>
                    {link.linkName}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {userInfo && (
              <Link as={ReactLink} to="/admin-console">
                <MdAdminPanelSettings size="30" />
              </Link>
            )}
          </HStack>
        </HStack>
        <HStack>
          <ButtonGroup spacing="0" variant="ghost" mr="3" display={{ base: "none", md: "flex" }}>
            <IconButton as="a" href="https://github.com/lan-yin" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton
              as="a"
              href="https://www.facebook.com/LanYinLu?mibextid=LQQJ4d"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
            <IconButton as="a" href="https://lanyinmade.medium.com/" icon={<FaMedium fontSize="1.25rem" />} />
            <IconButton as="a" href="https://lenzolu.netlify.app/" icon={<SiNetlify fontSize="1.25rem" />} />
          </ButtonGroup>
          <Icon
            cursor="pointer"
            as={colorMode === "light" ? MoonIcon : SunIcon}
            onClick={() => toggleColorMode()}
            w="40px"
          />
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pd="4" display={{ md: "none" }}>
          <Stack as="nav" spacing="4">
            {links.map((link) => (
              <NavLink hey={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </Stack>
          <Menu>
            <MenuButton
              textAlign="left"
              w="full"
              fontWeight="semibold"
              mt="3"
              p="2"
              _hover={{ bg: mode("blue.100", "blue.800") }}
            >
              Blog
            </MenuButton>
            <MenuList>
              {blogLinks.map((link) => (
                <MenuItem key={link.linkName} as={ReactLink} to={`/blog/${link.category}`}>
                  {link.linkName}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          {userInfo && (
            <Link as={ReactLink} to="/admin-console">
              <MdAdminPanelSettings size="30" />
            </Link>
          )}
          <ButtonGroup spacing="0" variant="ghost" mb="3" mt="5">
            <IconButton as="a" href="https://github.com/lan-yin" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton
              as="a"
              href="https://www.facebook.com/LanYinLu?mibextid=LQQJ4d"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
            <IconButton as="a" href="https://lanyinmade.medium.com/" icon={<FaMedium fontSize="1.25rem" />} />
            <IconButton as="a" href="https://lenzolu.netlify.app/" icon={<SiNetlify fontSize="1.25rem" />} />
          </ButtonGroup>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
