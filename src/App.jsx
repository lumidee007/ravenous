import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import SearchBar from "./component/SearchBar";

const useStyles = makeStyles({
  headerBackground: {
    backgroundColor: "#cca353;",
    height: 100,
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    width: "100%",
    margin: 0,
    padding: 0,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      className={classes.page}
      sx={{ padding: 0 }}
      disableGutters
    >
      <Typography
        variant="h2"
        color="white"
        align="center"
        sx={{ fontWeight: "bold" }}
        className={classes.headerBackground}
      >
        ravenous
      </Typography>
      <SearchBar />
    </Container>
  );
}

export default App;
