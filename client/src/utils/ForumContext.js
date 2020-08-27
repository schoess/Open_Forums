import React, { useState, useEffect, createContext } from "react";
import forumApi from "../utils/forum.api";
import { filter } from 'lodash';

export const ForumContext = createContext();

export const ForumProvider = (props) => {
    const [data, setData] = useState([]);

    const deleteForum = (forumId) => {
        // Remove matching forum using forumId from data and then set the filteredData to setData
        const filteredData = filter(data => data._id !== forumId);
        setData(filteredData);
    };
    
    useEffect(() => {
        loadAllForum();
    }, []);
      // Loads all forums and sets them to data
    function loadAllForum() {
        forumApi
            .getAllForum()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
        }

    return (
        <ForumContext.Provider value={[data, setData]}>
            {props.children}
        </ForumContext.Provider>
    )
}