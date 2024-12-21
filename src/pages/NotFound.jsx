import React from 'react'
import {Flex, Heading, Text, Button} from "@chakra-ui/react";

export const NotFound = () => {
  return (
    <div>
        <Flex alignItems={"center"} justifyContent={"Center"} flexDirection={"column"}>

            <Heading>
                Error 404 NotFound
            </Heading>

            <Text>La página solicitada no existe.</Text>
            <Button>Volver al HOME</Button>
        </Flex>
    </div>
  )
}

