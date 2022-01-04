import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  iconUrl: string;
  label: string;
}

export default function TravelType({ iconUrl, label }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center" justify="center">
      <Image src={iconUrl} alt={label} mb="3" w="12" />
      <Text fontWeight={600}>{label}</Text>
    </Flex>
  );
}
