import { Box, Button, Input, Text, Image } from '@chakra-ui/react';
import React from 'react';


const Footer = () => {
  return (
   
    <div>
      <Box
        className='footer-fst'
        display={['block','flex']}
       
        justifyContent='space-around'
        backgroundColor='#e3d804'
        padding='40px'
      >
        <Box w={['100%','50%']} textAlign='start'>
          <Text fontSize='3xl' fontWeight='700'>
            TRIAL START FIRST 30 DAYS.
          </Text>
          <p>Enter your email to create or restart your membership.</p>
        </Box>

        <Box
       w={['100%','50%']}
          h='max-content'
          p='3px'
          display='flex'
          backgroundColor='white'
          alignItems='center'
          borderRadius='5px'
        >
          <Input outline='none' placeholder='Enter your email' border='none' />
          <Button size='lg' bg='black' color='#e3d804' p='0px 50px'>
            Get Started
          </Button>
        </Box>
      </Box>

      <Box
        bg='black'
        color='white'
        alignItems='center'
        p='40px'
        display={['block','flex']}
        justifyContent='space-between'
      >
        <Box     display={['block','flex']}    w={['100%','50%']} gap={['0px','30px']}>
          {['FAQ', 'HELP CENTER', 'TERMS OF USE', 'PRIVACY'].map((item) => (
            <Text   mt={['10px','0px']} key={item}  style={{ color: 'gray', fontWeight: '500'}}>
              {item}
            </Text>
          ))}
        </Box>

        <Box w={['100%','15%']}  mt={['20px','0px']}justifyContent={['center','end']} gap={['20px','30px']} display='flex'>
          {['facebook', 'twitter', 'pinterest', 'linkedin'].map((social) => (
            <p key={social}>
              <i className={`fa-brands fa-${social} fa-xl`}></i>
            </p>
          ))}
        </Box>
      </Box>

      <Box
        display={['block','flex']}
        justifyContent='space-between'
        bg='#171b22'
        color='white'
        p='40px'
        fontWeight='500'
      >
        <Box >
          <p>
            Copyright © 2022. All Rights Reserved By{' '}
            <span style={{ color: '#e3d804' }}>Movifix</span>
          </p>
        </Box>
        <Box  mt={['10px','0px']}>
          <Image
            src='https://movflxx.netlify.app/img/images/card_img.png'
            alt='payments'
          />
        </Box>
      </Box>
    </div>
  
  )
};

export default Footer;