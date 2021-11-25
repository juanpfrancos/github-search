import React, { useState, useEffect } from "react";
import SearchAppBar from "./SearchBar"
import CardUserMe from './CardUser'

function Main() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(Object);
      
    useEffect(() => {
        getUserData();
    }, [username]);
  
    var gitHubUrl = `https://api.github.com/users/${username}`;
  
    const getUserData = async () => {
        const response = await fetch(gitHubUrl);
        const data = await response.json();
        if (data && data.message !== "Not Found") {
            setUserData(data);
            console.log(data)
        }
        else if (username !== "") {
            console.log('El usuario no existe');
        }
        else {
            setUserData({})
        }
    };
      
    return (
        <>
            <SearchAppBar username={username} setUsername={setUsername}></SearchAppBar>
            <CardUserMe  userData={userData} ></CardUserMe>
        </>
    );
}
  
export default Main;