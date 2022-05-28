import * as React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from '@apollo/client';
// import { QUERY_CHARACTERS } from "../utils/queries";
// Styling Imports
import { CssBaseline, Box, Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Paper, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/UWbackdrop.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));

// const WhiteTextTypography = withStyles({
//   root: {
//     color: "#FFFFFF"
//   }
// })(Typography);

export default function Home(props) {
  const classes = useStyles();

  // const { loading, data } = useQuery(QUERY_CHARACTERS);
  // const savedCharacter = data?.savedCharacter || [];
  return (
    <React.Fragment>
      <Header style={{backgroundColor: 'hsla(0, 100%, 90%, 0.8'}} sx={{ mt: 5 }} />
      <div className={classes.root}>
      <Typography color="white">
        <CssBaseline />
        {/* User Info Section */}
        <Paper style={{padding: 60, border: "3px solid black", width: '50rem', backgroundColor: 'hsla(0, 100%, 90%, 0.8'}}>
          <Container maxWidth="lg" className="container homepage">
            <Box>
              <Container maxWidth="md" className="userInfo">
                {/* <img></img>  */}
                <h3 align="center">Welcome to Date-A-Base!</h3>
                <p>
                  Data-A-Base is a dating simulator experience that will pull
                  your heartstrings and build new connections as you start your
                  journey to becoming a full-stack web developer.
                </p>
                <p>
                  Here you will meet fellow classmates looking to start study
                  groups for the upcoming course. It will be up to you to decide
                  who you will pair with for a chance at good grades and maybe
                  even a chance at love?
                </p>
                <h3>Your Dating Profile:</h3>
                <ul>
                  <li>Name:</li>
                  <li>Gender: Female</li>
                  <li>
                    Description: A go-getter student looking to take on the
                    challenge of full-stack web development and begin their
                    coding career journey.
                  </li>
                </ul>
              </Container>
              <Container maxWidth="md">
                <h3>Your Teacher</h3>
                <ul>
                  <li>Name: Brian</li>
                  <li>Gender: Male</li>
                  <li>
                    Description: A really cool guy, who cares for his student's
                    growth and impeccable coding skills. Likes getting haircuts
                    regularly, is a dad, and went to Michigan State University.
                  </li>
                </ul>
                {/* Image of Brian */}
              </Container>
              <Container maxWidth="md">
                <h3>Your Classmates</h3>
                {/* Images of all the candidates */}
              </Container>
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
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
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
      <Footer sx={{ mt: 5 }} />
    </React.Fragment>
  );
}