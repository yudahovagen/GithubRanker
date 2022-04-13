const createUniqueFollowers = function (followers) {
  //here we will use recursion to sum all the followers in the user tree.
  //our base case in our reduce method will be if we dont have anymore followers to add
  //outerwise we keep adding the followers to our sum
  //we dont mind if user1 and user2 are followers of each other because the depth is what matter to us
  return followers.reduce((acc, f) => {
    if (!f) {
      return acc;
    }    
    acc[f.loginName] = 1;
    return f.followers.length
      ? { ...acc, ...createUniqueFollowers(f.followers) }
      : acc;
  }, {});
};

export const sumUserFollowers = function (userData) {
  //if we dont have user tree we cant sum
  if (!userData) {
    return -1;
  }
  //otherwise we use this helper method to make sure we only add unique followers to our rank
  return Object.keys(createUniqueFollowers(userData.followers)).length;
};
