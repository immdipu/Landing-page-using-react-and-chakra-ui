import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
          <Text
            letterspacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum
            ad optio voluptates tenetur temporibus, cum, ipsum ducimus sit
            necessitatibus, porro nobis? Blanditiis, accusamus. At ratione
            tempore doloribus incidunt quidem. Quam accusamus eligendi et nulla
            aperiam eos veritatis nihil sint obcaecati harum, in dicta
            cupiditate veniam, sequi vero temporibus, ut blanditiis quae error
            aspernatur ex ea soluta dolor. Accusantium, tempore. Provident
            commodi voluptatibus nemo voluptas tempora animi quam odit
            perferendis similique vero deserunt possimus asperiores maiores
            repudiandae laboriosam harum sunt consequatur aspernatur illo ad,
            sed inventore. Porro quo aspernatur maiores! Quia iste maxime eius
            magnam voluptatem nihil! Non iure, placeat voluptas nihil assumenda
            natus impedit aliquam sunt eaque odio ipsa cum, maiores dolor
            obcaecati repellat ab culpa at deleniti! Culpa!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
