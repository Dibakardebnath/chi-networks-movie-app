import { Box, Flex, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";



export const Favourite=()=>{
    const arr = JSON.parse(localStorage.getItem("fav")) || [];
    console.log(arr)
    return (
        <Box mt={'70px'}  backgroundColor={"#181d23"} color={'gray.500'}>
            <Box className="movie-box">
        {arr &&
          arr.map((ele) => (
            <Box className="main-Box">
              <Box className="img-Box">
                <Link to={`/details/${ele.imdbID}`}>
                  <Image
                    borderRadius={"10px"}
                    w={"100%"}
                    h={"500px"}
                    src={ele.Poster}
                  />
                </Link>
              </Box>

              <Flex justifyContent={"space-between"} padding={"10px 10px"}>
                <Text>{ele.Title}</Text>
                <Text>{ele.Year}</Text>
              </Flex>
              {/* <Box>
                <Text>{ele.Type}</Text>
                    <Text>{ele.imdbID}</Text>
                </Box> */}
            </Box>
          ))}
      </Box>
        </Box>
    )
}