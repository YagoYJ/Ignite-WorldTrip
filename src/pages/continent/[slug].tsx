import { Box, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import CountryCard from "../../components/CountryCard";
import Header from "../../components/Header";

interface ContinentProps {
  slug: string;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function Continent({ slug }: ContinentProps) {
  return (
    <>
      <Header goBack />
      <Flex
        backgroundImage={`/images/continent-${slug}.png`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        h="500px"
        mb="20"
        pb="20"
        pl="50"
        justify="flex-start"
        align="flex-end"
      >
        <Heading
          color="gray.200"
          fontSize="3xl"
          fontFamily="Poppins"
          fontWeight={600}
        >
          Europa
        </Heading>
      </Flex>

      <Box px="50">
        <Flex
          align="center"
          justify={["center", "space-between"]}
          direction={["column", "column", "row"]}
        >
          <Text
            fontFamily="Poppins"
            fontWeight={400}
            w={["100%", "100%", "50%"]}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex
            w={["100%", "100%", "40%"]}
            align="center"
            justify="space-between"
            mt={["10", "0"]}
          >
            <Flex
              direction="column"
              align={["flex-start", "center"]}
              justify="center"
            >
              <Text
                color="yellow.900"
                fontFamily="Poppins"
                fontSize={["3xl", "4xl"]}
                fontWeight={600}
              >
                50
              </Text>
              <Text
                fontFamily="Poppins"
                fontSize={["md", "lg"]}
                fontWeight={600}
              >
                países
              </Text>
            </Flex>
            <Flex
              direction="column"
              align={["flex-start", "center"]}
              justify="center"
            >
              <Text
                color="yellow.900"
                fontFamily="Poppins"
                fontSize={["3xl", "4xl"]}
                fontWeight={600}
              >
                60
              </Text>
              <Text
                fontFamily="Poppins"
                fontSize={["md", "lg"]}
                fontWeight={600}
              >
                línguas
              </Text>
            </Flex>
            <Flex
              direction="column"
              align={["flex-start", "center"]}
              justify="center"
            >
              <Text
                color="yellow.900"
                fontFamily="Poppins"
                fontSize={["3xl", "4xl"]}
                fontWeight={600}
              >
                27
              </Text>
              <Text
                fontFamily="Poppins"
                fontSize={["md", "lg"]}
                fontWeight={600}
              >
                cidades +100 o
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Heading mt="20" mb="10">
          Cidades +100
        </Heading>

        <Flex w="100%" gap="12" mb="10" justify="space-around" wrap="wrap">
          <CountryCard
            bannerUrl="https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"
            title="Londres"
            subtitle="Reino unido"
            countryUrl="https://t2yn28t0dw-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/Bandeira-do-Reino-Unido.jpg"
          />
          <CountryCard
            bannerUrl="https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"
            title="Londres"
            subtitle="Reino unido"
            countryUrl="https://t2yn28t0dw-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/Bandeira-do-Reino-Unido.jpg"
          />
          <CountryCard
            bannerUrl="https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"
            title="Londres"
            subtitle="Reino unido"
            countryUrl="https://t2yn28t0dw-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/Bandeira-do-Reino-Unido.jpg"
          />
          <CountryCard
            bannerUrl="https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"
            title="Londres"
            subtitle="Reino unido"
            countryUrl="https://t2yn28t0dw-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/Bandeira-do-Reino-Unido.jpg"
          />
        </Flex>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["europa", "america", "asia", "oceania", "antartida", "africa"];
  return {
    paths: [
      {
        params: { slug: paths[0] },
      },
      {
        params: { slug: paths[1] },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  return {
    props: { slug, id: "id" },
  };
};
