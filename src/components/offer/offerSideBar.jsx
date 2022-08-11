import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Box
} from '@chakra-ui/react'

const OfferBar = ({ handleOffer }) => {

  const [offerApplied, setOfferApplied] = React.useState(false)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button style={{ borderRedius: '10px' }} bgColor='#b3ad05' color='white' mt='10vh' ref={btnRef} onClick={onOpen}>
        OFFERS
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Offers


          </DrawerHeader>

          <DrawerBody>
            <Box m="auto" style={{ borderRadius: "10px", textAlign: "center", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} >
              <p style={{ backgroundColor: '#959696', fontWeight: "700", marginTop: "30px", marginBottom: "30px" }} >15% OFF</p>
              <span>Get 15% off on your first flight</span>
              <Button disabled={offerApplied} onClick={() => {
                setOfferApplied(true);
                handleOffer(15)}}   style={{ width: "700", borderRadius: "20px" }} mb='10px' colorScheme='teal' variant='outline' mt="10px" >FLIGHT15</Button>
            </Box>
            <Box m="auto" style={{ borderRadius: "10px", textAlign: "center", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} >
              <p style={{ backgroundColor: '#959696', fontWeight: "700", marginTop: "30px", marginBottom: "30px" }} >5% OFF</p>
              <span>Get 5% off on your next flight</span>
              <Button disabled={offerApplied} onClick={() => {
                setOfferApplied(true);
                handleOffer(5)}}  style={{ width: "700", borderRadius: "20px" }} mb='10px' colorScheme='teal' variant='outline' mt="10px" >NEXT5</Button>
            </Box>
            <Box m="auto" style={{ borderRadius: "10px", textAlign: "center", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} >
              <p style={{ backgroundColor: '#959696', fontWeight: "700", marginTop: "30px", marginBottom: "30px" }} >FREE MEAL</p>
              <span>Get a free happy meal  </span>
              <Button disabled={offerApplied} onClick={() => {
                setOfferApplied(true);
                handleOffer("FREEMEAL")
                }} style={{ width: "700", borderRadius: "20px" }} mb='10px' colorScheme='teal' variant='outline' mt="10px" >HAPPYMEAL</Button>
            </Box>
            <Box m="auto" style={{ borderRadius: "10px", textAlign: "center", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} >
              <p style={{ backgroundColor: '#959696', fontWeight: "700", marginTop: "30px", marginBottom: "30px" }} >3% OFF</p>
              <span>Get 3% off on your flight ticket</span>
              <Button disabled={offerApplied} onClick={()=> {
                setOfferApplied(true);
                handleOffer(3)
                }} style={{ width: "700", borderRadius: "20px" }} mb='10px' colorScheme='teal' variant='outline' mt="10px" >OFF3</Button>
            </Box>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default OfferBar;