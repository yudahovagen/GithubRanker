import * as mock from "./mock";
//in case we are provided with a list of user names from github we can replace the mock with github as the source of our data
import * as github from "./github";

export const getAllUsersData = async function (numOfUsers, depth) {
  let data;
  try {
    data = await mock.getAllUsersData(numOfUsers, depth);
  } catch (e) {
    console.error("getAllUsersData", e);
  }
  return { data };
};
