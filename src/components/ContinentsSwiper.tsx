import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

type Continent = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

const continents: Continent[] = [
  {
    slug: "europa",
    title: "Europa",
    subtitle: "O continente mais antigo",
    imageUrl: "./images/continent-europa.png",
  },
  {
    slug: "america",
    title: "América",
    subtitle: "O continente mais longo",
    imageUrl: "./images/continent-america.png",
  },
  {
    slug: "africa",
    title: "África",
    subtitle: "O continente mais quente",
    imageUrl: "./images/continent-africa.png",
  },
  {
    slug: "asia",
    title: "Ásia",
    subtitle: "O maior continente",
    imageUrl: "./images/continent-asia.png",
  },
  {
    slug: "antartida",
    title: "Antártida",
    subtitle: "O continente mais frio",
    imageUrl: "./images/continent-antartida.png",
  },
  {
    slug: "oceania",
    title: "Oceania",
    subtitle: "O continente mais diferente",
    imageUrl: "./images/continent-oceania.png",
  },
];

export default function ContinentsSwiper() {
  return (
    <Box maxWidth="1160px" mx="auto" mb="20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              h="450px"
              direction="column"
              align="center"
              justify="center"
              backgroundImage={continent.imageUrl}
              backgroundPosition="center center"
              backgroundSize="cover"
            >
              <Link
                href={`/continent/${continent.slug}`}
                passHref
                cursor="pointer"
                textAlign="center"
                color="gray.200"
                _hover={{
                  color: "yellow.900",
                  textDecoration: "none",
                  transitionDuration: 0.2,
                }}
              >
                <Heading fontWeight={700}>{continent.title}</Heading>
                <Text>{continent.subtitle}</Text>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
