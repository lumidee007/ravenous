/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import SearchBar from "./components/SearchBar";
import Business from "./containers/Business";
import Footer from "./components/Footer";
import fetchBusinesses from "./utils/Yelp";
import { useEffect, useState, useCallback } from "react";

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
  const [businesses, setBusinesses] = useState([]);
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  const [sort_by, setSort_by] = useState("best_match");
  const [error, setError] = useState(null);

  const loadBusinesses = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchBusinesses(term, location, sort_by);
      if (Array.isArray(data) && data.length > 0) {
        setBusinesses(data);
      } else {
        setBusinesses([]);
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
      setBusinesses([]);
    }
  }, [term, location, sort_by]);

  useEffect(() => {
    loadBusinesses();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "location":
        setLocation(value);
        break;
      case "term":
        setTerm(value);
        break;
      default:
        console.log(`Unknown field: ${name}`);
    }
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // console.log("Submitting search with:", { term, location, sort_by });
    loadBusinesses();
  };

  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      className={classes.page}
      sx={{ padding: 0, height: "100vh" }}
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
      <SearchBar
        location={location}
        term={term}
        sort_by={sort_by}
        setSort_by={setSort_by}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
      <Business error={error} businesses={businesses} />
      <Footer />
    </Container>
  );
}

export default App;
