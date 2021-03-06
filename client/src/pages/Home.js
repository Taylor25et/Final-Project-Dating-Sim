import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
// Styling Imports
import {
  Paper,
  Typography,
  Button,
  Grid,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";


// const currentPrompt = promptQuestions.prompts[promptIndex];
// const currentImg = currentPrompt.image

export default function Home(props) {

  const [match, setMatch] = useState([]);

  // setMatch(JSON.parse(localStorage.getItem("yourMatch")))
  // console.log(match.name);

  useEffect(() => {
    const finalMatch = async () => {
      let character = await JSON.parse(localStorage.getItem("yourMatch"));
      console.log(character);
      // let img = await JSON.parse(localStorage.getItem("yourMatch"));
      // console.log(img);
      setMatch(character.name);
      console.log(match, "matchState");
    };
    finalMatch();
  }, [match]);

  // const { loading, data } = useQuery(QUERY_CHARACTERS);
  // const savedCharacter = data?.savedCharacter || [];
  return (
    <React.Fragment>
      <Header
        style={{ backgroundColor: "hsla(0, 100%, 90%, 0.8" }}
        sx={{ mt: 0 }}
      />
      <div
        className="{classes.root}"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "./assets/images/backgrounds/coverbg.jpeg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="white">
          <CssBaseline />
          {/* User Info Section */}
          <Paper
            style={{
              padding: 60,
              border: "3px solid black",
              width: "50rem",
              backgroundColor: "hsla(0, 100%, 90%, 0.8",
            }}
          >
            <Container maxWidth="lg" className="container homepage">
              <Box>
                <Container maxWidth="md" className="userInfo">
                  {/* <img></img>  */}
                  <h3 align="center">Welcome to Date-A-Base!</h3>
                  <p>
                    Data-A-Base is a dating simulator experience that will pull
                    your heartstrings and build new connections as you start
                    your journey to becoming a full-stack web developer.
                  </p>
                  <p>
                    Here you will meet fellow classmates looking to start study
                    groups for the upcoming course. It will be up to you to
                    decide who you will pair with for a chance at good grades
                    and maybe even a chance at love?
                  </p>
                  <h3>Your Dating Profile:</h3>
                  <ul>
                    <li>Name: Brian</li>
                    <li>Gender: Male</li>
                    <li>
                      Description: A go-getter student looking to take on the
                      challenge of full-stack web development and begin their
                      coding career journey.
                    </li>
                  </ul>
                </Container>
                {/* <Container maxWidth="md">
                  <h3>Your Teacher</h3>
                  <ul>
                    <li>Name: Brian</li>
                    <li>Gender: Male</li>
                    <li>
                      Description: A really cool guy, who cares for his
                      student's growth and impeccable coding skills. Likes
                      getting haircuts regularly, is a dad, and went to Michigan
                      State University.
                    </li>
                  </ul>
                  {/* Image of Brian */}
                {/* </Container>  */}
                {/* Saved Character Section */}
                <Container maxWidth="sm" className="matchHistory">
                  <h3>Your Matches</h3>
                  {/* <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <SavedCharacter
                  savedCharacter={savedCharacter}
                  title="Your Matches"
                />
              )}
            </div> */}
                  {/* Seed in matched character description below */}
                  {/* use useState for match or no match and call the yourMatch from local storage on home page */}
                  {/* wrap a turnary statement around p tag of if useState of yourMatch is empty, display no matches yet, if game has been played, display yourMatch information from local storage */}
                  {match ? <p>{match}</p> : <p>No Match History</p>}
                </Container>
                <div>
                  <Grid container justify="center">
                    <Button
                      variant="contained"
                      align="right"
                      className="startGameButton"
                      size="large"
                    >
                      <Link className="startGame" to="/Game">
                        JOIN CLASS
                      </Link>
                    </Button>
                  </Grid>
                </div>
              </Box>
            </Container>
          </Paper>
        </Typography>
      </div>
      {/* <Footer sx={{ mt: 5 }} /> */}
    </React.Fragment>
  );
}
