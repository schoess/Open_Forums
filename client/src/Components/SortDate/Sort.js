import React from "react";
import {
    FormControl,
    InputLabel,
    Select
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },

    date: {
        color: "inherit",
    },
}));
export default function SortByDate(props) {
    const classes = useStyles();
    const [dateSort, setDateSort] = React.useState({
        date: "Newest",
        text: "",
    });

    const onDateChange = (event) => {
        setDateSort({ date: event.target.value });
        //handleSearch(event.target.value, dateSort.text);
    };

    return (
        <div>
            <FormControl >
                <InputLabel htmlFor="age-native-simple" className={classes.date} >
                    Sort By Date<
        /InputLabel>
    <Select
                        native
                        value={dateSort.date}
                        onChange={onDateChange}
                        className={classes.date}
                        inputProps={{
                            name: "date",
                            id: "age-native-simple",
                        }}>
                        <option >Newest</option>
                        <option >Oldest</option>

                    </Select>
  </FormControl>
    </div>
  )
  }