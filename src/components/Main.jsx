import React, { useState, useEffect } from "react";
import { MainStyled } from "./styles/Main.styled";
import FetchError from "./FetchError";
import TableForm from "./form/TableForm";
import RankingTable from "./RankingTable";
import * as userAPI from "../api/users";
import LoadingData from "./LoadingData";

const Main = () => {
  //usersNum - the amount of users we want to generate, only relevente for mock data
  const [usersNum, setUsersNum] = useState(15);
  //depth is relevent to the followers rank
  const [depth, setDepth] = useState(3);
  //users will hold our fetched users array
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //incase we get an error while fetching the users data
  const [errorFetching, setErrorFetching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData(usersNum, depth);
  };
  //only on first render to make the user life easier
  useEffect(() => {
    getUserData(15, 3);
  }, []);

  const getUserData = async (users, depth) => {
    //users here is usersNum the amount of users we want to generate from our mock data
    setIsLoading(true);
    try {
      //getAllusersData will generate our users array depending on the usersNum and depth
      const response = await userAPI.getAllUsersData(users, depth);
      if (response && response.data && response.data.length > 0) {
        setUsers(response.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setErrorFetching(true);
        setTimeout(() => {
          setErrorFetching(false);
        }, 4000);
      }
    } catch (e) {
      console.error("failed in getUserData:", users, e);
    }
  };
  

  return (
    <MainStyled>
      {errorFetching ? <FetchError /> : null}
      <TableForm
        handleSubmit={handleSubmit}
        usersNum={usersNum}
        setUsersNum={setUsersNum}
        depth={depth}
        setDepth={setDepth}
      />
      {isLoading ? (
        <LoadingData />
      ) : (
        <RankingTable users={users} setUsers={setUsers} />
      )}
    </MainStyled>
  );
};

export default Main;
