import { Flex, Heading, Img, Text } from "@chakra-ui/react";

interface ContinentCardProps {
  bannerUrl: string;
  title: string;
  subtitle: string;
  countryUrl: string;
}

export default function CountryCard({
  bannerUrl,
  countryUrl,
  subtitle,
  title,
}: ContinentCardProps) {
  return (
    <Flex
      w="256px"
      direction="column"
      align="flex-start"
      justify="center"
      borderWidth="1px"
      borderColor="yellow.500"
      borderRadius="4px"
      bg="white"
    >
      <Img src={bannerUrl} h="44" />
      <Flex
        px="6"
        pb="6"
        mt="5"
        align="center"
        justify="space-between"
        w="100%"
      >
        <Flex direction="column" align="flex-start" justify="center">
          <Heading fontSize="larger" mb="3">
            {title}
          </Heading>
          <Text>{subtitle}</Text>
        </Flex>
        <Img src={countryUrl} alt="Cidade" borderRadius="50%" h="8" w="8" />
      </Flex>
    </Flex>
  );
}
