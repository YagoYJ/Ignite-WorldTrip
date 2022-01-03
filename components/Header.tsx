import { Flex, Image, Link } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  goBack?: boolean;
}

export default function Header({ goBack = false }: HeaderProps) {
  return (
    <Flex
      align="center"
      justify={goBack ? "space-between" : "center"}
      maxWidth="1160px"
      mx="auto"
      pt="7"
    >
      {goBack && (
        <Link
          href="/"
          passHref
          borderRadius="50%"
          _hover={{ bg: "gray.300", transitionDuration: 0.2 }}
        >
          <FiChevronLeft size={25} />
        </Link>
      )}

      <Image src="./images/logo.svg" alt="World Trip" />

      {goBack && <div />}
    </Flex>
  );
}
