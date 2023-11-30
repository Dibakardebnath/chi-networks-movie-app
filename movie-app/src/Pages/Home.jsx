import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "./Silder";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState("");
  const [sorting, setsorting] = useState("");
  const [btn, setbtn] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let url = "https://www.omdbapi.com/?apikey=b72d4412&s=all";

    //  sorting || btn ||
    if (currentPage) {
      url += `&page=${currentPage}`;
    }

    fetching(url);
  }, [currentPage]);

  const fetching = (url) => {
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data.Search);
        console.log(resp.data.Search);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleButtonClick = (value) => () => {
    setCurrentPage((currentPage) => currentPage + value);
  };

  return (
    <Box mt={"100px"} backgroundColor={"#181d23"}>
      <Slider />
      <Box>
        <Heading>ALL MOVIES</Heading>
      </Box>

      <Box className="filter-sort">
        <Box className="sort">
          <select id="genreFilter">
            <option value="">Select Year</option>
            <option value="latest">Latest</option>
            <option value="old">Old</option>
            <option value="">All</option>
          </select>
        </Box>
        <Box className="filter">
          <Button colorScheme="teal" size="md" borderRadius={"50px"}>
            Movie
          </Button>
          <Button colorScheme="teal" size="md" borderRadius={"50px"}>
            Series
          </Button>
          <Button colorScheme="teal" size="md" borderRadius={"50px"}>
            Episod
          </Button>
        </Box>
      </Box>
      <Box className="movie-box">
        {data &&
          data.map((ele) => (
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
      <Box className="pagination">
        <Button colorScheme="teal" size="md" onClick={handleButtonClick(-1)}>
          Prev
        </Button>
        <Text>{currentPage}</Text>
        <Button colorScheme="teal" size="md" onClick={handleButtonClick(1)}>
          Next
        </Button>
      </Box>
    </Box>
  );
};
