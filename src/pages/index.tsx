import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import ContinentsSwiper from "../components/ContinentsSwiper";
import Header from "../components/Header";
import TravelType from "../components/TravelType";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Header />
      <Box bgImage="./images/home-banner-background.png" bgRepeat="no-repeat">
        <Flex
          maxWidth="1160px"
          mx="auto"
          align="center"
          justify="space-between"
          py="46"
          px="7"
        >
          <Flex direction="column" maxWidth="525px">
            <Heading color="gray.200" fontSize="2xl" fontWeight={500}>
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Text color="gray.200" fontSize="md" fontWeight="normal" mt="2">
              Chegou a hora de tirar do papel a viagem que você
              <br />
              sempre sonhou.
            </Text>
          </Flex>

          {isWideVersion && (
            <Image
              src="./images/home-banner-airplane.svg"
              alt="Airplane"
              mt="6"
            />
          )}
        </Flex>
      </Box>
      <Flex
        maxWidth="1160px"
        align="center"
        justify={["space-around", "space-between"]}
        mx="auto"
        wrap="wrap"
        mt="10"
        p="7"
      >
        <TravelType
          iconUrl="./images/night-life-icon.svg"
          label="vida noturna"
        />

        <TravelType iconUrl="./images/beach-icon.svg" label="praia" />

        <TravelType iconUrl="./images/modern-icon.svg" label="moderno" />

        <TravelType iconUrl="./images/classic-icon.svg" label="clássico" />

        <TravelType iconUrl="./images/more-icon.svg" label="e mais..." />
      </Flex>
      <Divider
        orientation="horizontal"
        w="20"
        h="2px"
        my="10"
        mx="auto"
        bg="gray.800"
      />
      <Heading textAlign="center" fontWeight={500} fontSize="2xl" mb="10">
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <ContinentsSwiper />
    </>
  );
}
