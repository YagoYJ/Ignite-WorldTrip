import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  iconUrl: string;
  label: string;
}

export default function TravelType({ iconUrl, label }: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      direction={["row", "row", "row", "column"]}
      align="center"
      justify="center"
      w={["50%", "auto"]}
    >
      {isWideVersion ? (
        <Image src={iconUrl} alt={label} mb="3" w="12" />
      ) : (
        <Box w="2" h="2" borderRadius="4" bg="yellow.900" mr="2" />
      )}
      <Text fontWeight={600} fontSize={["23"]}>
        {label}
      </Text>
    </Flex>
  );
}
