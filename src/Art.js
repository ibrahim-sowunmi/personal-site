import React from "react";
import img1 from "./assets/high.gif";
import img2 from "./assets/low.gif";

import { Text, Image, Box } from "@chakra-ui/react";

function Art() {
  return (
    <Box bgGradient="linear(to-b, red.100 0%, orange.100 25%, yellow.100 50%)">
      <div className="art-content">
        <Text
          bgGradient="linear(to-l, white, black)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          align="center"
        >
          Some Artwork
        </Text>
        <p>&nbsp;</p>
        <Text align="center">
          <p>
            This isn't the best. I think literally all of these are unfinished.
            But they're mine so 🙂
          </p>
        </Text>
        <p>&nbsp;</p>
        <Image
          boxShadow="dark-lg"
          p="1"
          boxSize="450px"
          rounded="md"
          bg="white"
          src={img1}
          alt="Some more fleshed out drawings"
        />
        <p>&nbsp;</p>
        <Text align="center">
          <p>Some nearly finished sketches, and me practicing a little.</p>
        </Text>
        <p>&nbsp;</p>
        <Image
          boxShadow="dark-lg"
          boxSize="450px"
          p="1"
          rounded="md"
          bg="white"
          src={img2}
          alt="Some more rudimentary sketches art"
        />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </Box>
  );
}

export default Art;
