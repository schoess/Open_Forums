import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useForumContext } from "../../contexts/ForumContext";
import forumApi from "../../utils/forum.api";
import { FormControl, InputLabel, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    color: "inherit",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(2em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
}));

const Search = () => {
  const classes = useStyles();
  const { setForum } = useForumContext();
  const [category, setCategory] = React.useState({});

  const handleCategoryChange = (event) => {
    const name = event.target.name;
    setCategory({
      ...category,
      [name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    searchForum(event.target.value);
  };

  function searchForum(searchTerm) {
    forumApi
      .getAllForum()
      .then((res) => {
        const filtered = res.data.filter(
          (forum) =>
            forum.forum_title.toLowerCase().includes(searchTerm) ||
            forum.forum_description.toLowerCase().includes(searchTerm)
        );
        setForum(filtered);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div>
        <FormControl>
          <InputLabel htmlFor="age-native-simple" className={classes.category}>
            Categories
          </InputLabel>
          <Select
            native
            value={category.categoryName}
            onChange={handleCategoryChange}
            className={classes.category}
            inputProps={{
              name: "categoryName",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option>All</option>
            <option>General</option>
            <option>Sports</option>
            <option>Food</option>
            <option>Technology</option>
            <option>Kids</option>
            <option>Health/Fitness</option>
            <option>Art</option>
            <option>Business</option>
            <option>Entertainment</option>
          </Select>
        </FormControl>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Search;
