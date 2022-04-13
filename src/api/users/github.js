import axios from "axios";
import { sumUserFollowers } from "./common";

const GITHUB_USER_API = `https://api.github.com/users`;
//for testing we will check 1 user api
const GITHUB_USERS = ["nodejs"];
const getUserData = async function (user) {
  try {
    const response = await axios.get(`${GITHUB_USER_API}/${user}`);
    if (response && response.data) {
      return {
        loginName: response.data.login,
        name: response.data.name,
        avatarUrl: response.data.avatar_url,
        profileUrl: response.data.html_url,
        creationDate: response.data.created_at,
        followersUrl: response.data.followers_url,
        followers: [],
      };
    }
  } catch (e) {
    console.error("failed in getUserData:", user, e);
  }
};

const getFollowersData = async function (followersUrl) {
  try {
    const response = await axios.get(followersUrl);
    if (response && response.data) {
      return response.data.map((follower) => follower.login);
    }
  } catch (e) {
    console.error("failed in getFollowersData:", followersUrl, e);
  }
  return [];
};

const buildUserFollowersTree = async function (user, depth) {
  let tree;
  try {
    tree = await getUserData(user);
    if (depth < 1) {
      return tree;
    }
    depth--;
    if (tree) {
      const followers = await getFollowersData(tree.followersUrl);
      // check for followers
      if (followers && followers.length) {
        //build for each follower the user data
        tree.followers = await Promise.all(
          followers.map(
            async (follower) => await buildUserFollowersTree(follower, depth)
          )
        );
      }
    }
  } catch (e) {
    console.error("failed in buildUserFollowersTree:", user, e);
  }
  return tree;
};

export const getAllUsersData = async function (numOfUsers, depth) {
  let data;
  try {
    data = (await Promise.all(
      GITHUB_USERS.filter((user, index) => index < numOfUsers).map(
        async (user) => {
          const userTree = await buildUserFollowersTree(user, depth);
          if (userTree) {
            userTree.rank = sumUserFollowers(userTree);
          }
          return userTree;
        }
      )
    )).filter((u) => u);// filter empty users
  } catch (e) {
    console.error("getAllUsersData", e);
  }
  return data;
};
