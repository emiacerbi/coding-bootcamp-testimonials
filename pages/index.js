import { Container, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from 'react';

export default function Home() {

  const [profile, setProfile] = useState(0);

  const changeProfile = () => {
    
    
    if(profile === 1) {
      setProfile(0);  
    } else {
      setProfile(prevState => prevState + 1);
    }

    console.log(profile);
    
  };

  return (

    <Container
      // alignItems='center'
      backgroundRepeat='no-repeat'
      bgImage='url(pattern-curve.svg)'
      bgPos='bottom left'
      bgSize={['85%', '85%', '85%', '45%']}
      display='flex'
      flexDirection={['column', 'column', 'column', 'row']}
      gap={[8, 8, 8, 0]}
      maxWidth={['500px', '500px', '500px', '800px']}
      minHeight={['667px', '667px', '667px', '450px']}
      padding={[5, 5, 5, 14]}
      paddingBottom={10}
      shadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    >

      <Stack
        alignItems='center'
        backgroundRepeat='no-repeat'
        backgroundSize='contain'
        bgImage='url(./pattern-bg.svg)'
        bgPos='center'
        bgSize='contain'
        justifyContent='center'
        marginLeft={[0, 0, 0, '-10rem']}
        minH={['315px', '315px', '315px', '315px']}
        minWidth='50%'
        padding={8}
        position='relative'
        spacing={10}
        zIndex='-0'
      >

        <Image
          alt="tanya"
          borderRadius={5}
          h='255px'
          minWidth='255px'
          position='absolute'
          shadow='2xl'
          src={ profile === 0 ? "/image-tanya.jpg" : "/image-john.jpg" }
        />
          
        <Stack 
          bg='white' 
          borderRadius='2rem' 
          bottom={['2%', '2%', '2%', '6%']} 
          direction='row' 
          left={['50%', '50%', '50%', '40%']}
          padding={3}
          paddingX={4}
          position='absolute'
          shadow='xl'
          spacing={8}
          transform='translateX(-50%)'
          width='fit-content'
        >
          <Image 
            _hover={{opacity: '0.7'}} 
            alt='arrow pointing left' 
            borderRadius='50%' 
            cursor='pointer'
            h='40%'
            src="icon-prev.svg"
            w='40%'
            onClick={changeProfile} 
          />

          <Image 
            _hover={{opacity: '0.7'}}
            alt='arrow pointing right' 
            borderRadius='50%' 
            cursor='pointer' 
            h='40%'
            src="icon-next.svg"
            w='40%'
            onClick={changeProfile} 
          />

        </Stack>
        
      </Stack>

      <Stack 
        bgImage='url(pattern-quotes.svg)'
        bgPos={['50% 0%', '50% 0%', '50% 0%', '30% 15%']}
        bgRepeat='no-repeat'
        bgSize='20%'
        justifyContent='center'
        marginRight={['0', '0', '0', '8.5rem']}
        order={[0, 0, 0, -1]}
        padding={[8, 8, 8, 8]}
        paddingLeft={[6, 5, 5, 6]}
        paddingRight={[6, 5, 5, '0 !important']}
        position='static' 
        spacing={[4, 4, 4, 8]}
        textAlign={['center', 'center', 'center', 'left']}
        zIndex='1'
      >
        <Text
          color='primary.100'
          fontWeight={300}
          
        >
          {
            profile === 0 ? (
              `" I've been interested in coding for a while but never taken the jump, until now. I could'nt recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`
            ) :
            (
              `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into this is incredible. I now feel so confident about starting up as a professional developer"`
            )
          }
        </Text>
        <Stack direction={['column', 'column', 'column', 'row']} fontSize={['md', 'md', 'md', 'sm']} spacing={[-1, -1, -1, 2]}>
          <Text color='primary.100' fontWeight={600}>
            {
              profile === 0 ? (
                `Tanya Sinclair`
              ) :
              (
                `John Tarkpor`
              )
            }
          </Text>
          <Text color='primary.200' fontWeight={400}>
          {
              profile === 0 ? (
                `UX Engineer`
              ) :
              (
                `Junior Front-end Developer`
              )
            }
          </Text>
        </Stack>
      </Stack>

    </Container>
  );
}
