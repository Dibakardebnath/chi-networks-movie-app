import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "./Silder";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState("");
  const [sorting, setSorting] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let url = "https://www.omdbapi.com/?apikey=b72d4412&s=all";

   
    if (sorting) {
      url += `&type=${sorting}`;
    }
    if (currentPage) {
      url += `&page=${currentPage}`;
    }

    fetching(url);
  }, [currentPage,sorting]);

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

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
    // sortData(data)
  };

  const sortData = (data) => {
    if (sorting === "latest") {
      return data.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (sorting === "old") {
      return data.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else {
      return data;
    }
  };

  return (
    <Box mt={"80px"} backgroundColor={"#181d23"}>
      <Slider />
      <Box>
        <Heading color={'white'}>ALL <span style={{color:"#e3d804"}}>MOVIES</span></Heading>
      </Box>

      <Box className="filter-sort">
        <Box className="sort">
          <select id="genreFilter" onChange={handleSortingChange}>
            <option value="">Select Year</option>
            <option value="latest">Latest</option>
            <option value="old">Old</option>
            <option value="">All</option>
          </select>
        </Box>
        <Box className="filter">
          <Button colorScheme="yellow" color={'white'} size="md" borderRadius={"50px"}>
            Movie
          </Button>
          <Button colorScheme="yellow" color={'white'} size="md" borderRadius={"50px"}>
            Series
          </Button>
          <Button colorScheme="yellow"  color={'white'} size="md" borderRadius={"50px"}>
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

              <Flex color={'gray.200'} justifyContent={"space-between"} padding={"10px 10px"}>
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
      <Box className="pagination" mb={'10px'}>
        <Button colorScheme="yellow" color={'white'} size="md" onClick={handleButtonClick(-1)}>
          Prev
        </Button>
        <Text color={'white'}>{currentPage}</Text>
        <Button colorScheme="yellow" color={'white'} size="md" onClick={handleButtonClick(1)}>
          Next
        </Button>
      </Box>
    </Box>
  );
};
