import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Details = () => {
  const { id } = useParams();
  const [state, setState] = useState("");
  console.log(id);
  useEffect(() => {
    let url = `https://www.omdbapi.com/?apikey=eac592da&i=${id}`;

    fetching(url);
  }, []);

  const fetching = (url) => {
    axios
      .get(url)
      .then((resp) => {
        setState(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const addToFavourite = () => {
    console.log("yes")
    const arr = JSON.parse(localStorage.getItem("fav")) || [];
    const fav=[...arr,state]
    localStorage.setItem("fav", JSON.stringify(fav))

  };

  return (
    <Box
      border={"1px solid"}
      mt={"100px"}
      backgroundColor={"#181d23"}
      color={"white"}
    >
      <Box className="detail-Box">
        <Box w={"100%"} bg={"white"}>
          <Image
            width={"80%"}
            h={"max-content"}
            m={"auto"}
            src={state.Poster}
          />
        </Box>
        <Box className="detail-Box2">
          <Heading>New Episodes</Heading>
          <Heading mt={"2%"} size={"2xl"}>
            {state.Title}
          </Heading>
          <Box
            fontWeight={"500"}
            color={"gray.400"}
            className="mini-details"
            mt={"2%"}
          >
            <Button size={"sm"}>HD</Button>
            <Text>{state.Genre}</Text>
            <Text>
              <i class="fa-solid fa-calendar-days"></i>&nbsp;{state.Year}
            </Text>
            <Text>{state.Runtime}</Text>
            <Text>Rating: {state.imdbRating}</Text>
          </Box>

          <Text fontWeight={"500"} color={"gray.400"} w={"70%"} mt={"2%"}>
            {state.Plot}further classifies into horizontal and vertical. Other
            types of lines are parallel lines, intersecting lines and
            perpendicular movie.
          </Text>

          <Box mt={"3%"} className="last-button">
            <Button>WATCH NOW</Button>
            <Button onClick={addToFavourite}>FAVOURITE</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
