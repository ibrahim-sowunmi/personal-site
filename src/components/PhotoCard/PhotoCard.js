import { Image, Text, Center } from '@chakra-ui/react'
import React from 'react'

function PhotoCard(props) {
  return (
    <>
      <Center>
        <Image
          borderRadius="15px 50px 30px 5px"
          src={props.src}
          alt={props.alt}
        ></Image>
        {/* inherit text size chakra style */}
        <Text>{props.text}</Text>
        {/* optional sub text */}
        <Text>{props.text}</Text>
      </Center>
    </>
  )
}

export default PhotoCard
