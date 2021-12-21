import React from 'react'
import { useHistory } from "react-router-dom";

import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import PageNotFoundImg from "../../assets/404.png"

const PageNotFound = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  return (
    <div className="content">
      <Box w="110%" color="white">
        <Image src={PageNotFoundImg} alt="Lockness, Big foot and my Girlfriend" />
      </Box>
      <Text textAlign="center">
        This item, page or person cannot be found!
        <p onClick={goBack}>Click HERE to Go back</p>
    </Text>
    </div >
  )
}

export default PageNotFound