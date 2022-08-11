import { useToast } from '@chakra-ui/react'

function Toast() {
    const toast = useToast()
    let auth = JSON.parse(localStorage.getItem('auth')) || false;
    const statuses = auth ? 'Success' : 'Error';
  
    return (
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  position: 'top',
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }

  export default Toast;