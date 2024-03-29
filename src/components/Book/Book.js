import React from 'react'
import './Book.css'

import {
  Box,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ButtonGroup,
  Wrap,
  Text,
  Flex,
} from '@chakra-ui/react'

function Book(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className="book">
        <Flex
          direction="column"
          align="center"
          justify="center"
          as="button"
          m="10px"
          marginTop="15px"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          _hover={{ bg: '#ebedf0' }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
          onClick={onOpen}
          textAlign="center"
        >
          <img className="book-img" src={props.img} alt={props.title} />
          <Text w="12em">{props.title}</Text>
          <Text w="12em">{props.author}</Text>
          <Box p={2}>
            <ButtonGroup variant="outline">
              <Wrap justify="center">
                {props.topPick ? (
                  <Button
                    color="white"
                    bgGradient={'linear(to-l, #7928CA,#FF0080)'}
                    size="xs"
                  >
                    Top Pick
                  </Button>
                ) : null}
                {props.genre.map((genre, index) => (
                  <Button size="xs">{genre}</Button>
                ))}
              </Wrap>
            </ButtonGroup>
          </Box>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <img className="book-img" src={props.img} alt={props.title} />
              <div className="book-info">
                <p>{props.author}</p>
                <p>&nbsp;</p>
                <p>{props.description}</p>
                <p>&nbsp;</p>
                <p>
                  I gave it a <b>{props.rating} out of 10</b> rating
                </p>
                <p>&nbsp;</p>
                <p>{props.review}</p>
                <p>&nbsp;</p>
                <p>Read: {props.dateCompleted}</p>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost">
                <a href={props.link} rel="noreferrer" target="_blank">
                  Link
                </a>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}

export default Book
