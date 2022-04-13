import mockUsers from "../../data/users";
import { sumUserFollowers } from "./common";

const getUserData = function (user) {
  try {
    const response = { data: mockUsers[user] };
    if (response) {
      return {
        loginName: response.data.login,
        name: response.data.name,
        avatarUrl: response.data.avatar_url,
        profileUrl: response.data.html_url,
        creationDate: response.data.created_at,
        followersUrl: response.data.followers_url,
        followers: [],
        rank: 0,
      };
    }
  } catch (e) {
    console.error("failed in getUserData:", user, e);
  }
};

const buildUserFollowersTree = function (user, depth) {
  let tree;
  try {
    //tree will have all the user data that are mapped to the name, avatarUrl, followersUrl and so on
    tree = getUserData(user);
    //this is our recursion base case. when we dont need to go anymore deeper
    if (depth < 1) {
      return tree;
    }
    depth--;
    //as long as our user has followers we can keep on going deeper
    if (tree && tree.followersUrl.length) {
      if (tree.followersUrl.length) {
        //build user data for each follower 
        tree.followers = 
          tree.followersUrl.map((follower) =>
          buildUserFollowersTree(follower, depth)
        );
      } else {
        //no more followers in the tree so we giving an empty array
        tree.followers = [];
      }
    }
  } catch (e) {
    console.error("failed in buildUserFollowersTree:", user, e);
  }
  return tree;
};

export const getAllUsersData =  function (numOfUsers, depth) {
  let data;
  try {
    data = 
      Object.keys(mockUsers)
        .filter((user, index) => index < numOfUsers)
        .map((user) => {
          //firstly we build the followers tree that will look like this user0:{..., follower:[follower1Tree,follower2Tree]...}
          const userTree =  buildUserFollowersTree(user, depth);
          //now that we have the tree we can calculate the rank for each userTree
          userTree.rank = sumUserFollowers(userTree);
          return userTree;
        });
  } catch (e) {
    console.error("getAllUsersData", e);
  }
  return  data ;
};
