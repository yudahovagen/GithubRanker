const { promisify } = require("util");
const writeFileAsync = promisify(require("fs").writeFile);

const MAX_FOLLOWERS = 7;
const GITHUB_USERS = [
  {
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  },
  {
    login: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    html_url: "https://github.com/defunkt",
  },
  {
    login: "pjhyett",
    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    html_url: "https://github.com/pjhyett",
  },
  {
    login: "wycats",
    avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
    html_url: "https://github.com/wycats",
  },
  {
    login: "ezmobius",
    avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
    html_url: "https://github.com/ezmobius",
  },
  {
    login: "ivey",
    avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
    html_url: "https://github.com/ivey",
  },
  {
    login: "evanphx",
    avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
    html_url: "https://github.com/evanphx",
  },
  {
    login: "vanpelt",
    avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
    html_url: "https://github.com/vanpelt",
  },
  {
    login: "wayneeseguin",
    avatar_url: "https://avatars.githubusercontent.com/u/18?v=4",
    html_url: "https://github.com/wayneeseguin",
  },
  {
    login: "brynary",
    avatar_url: "https://avatars.githubusercontent.com/u/19?v=4",
    html_url: "https://github.com/brynary",
  },
  {
    login: "kevinclark",
    avatar_url: "https://avatars.githubusercontent.com/u/20?v=4",
    html_url: "https://github.com/kevinclark",
  },
  {
    login: "technoweenie",
    avatar_url: "https://avatars.githubusercontent.com/u/21?v=4",
    html_url: "https://github.com/technoweenie",
  },
  {
    login: "macournoyer",
    avatar_url: "https://avatars.githubusercontent.com/u/22?v=4",
    html_url: "https://github.com/macournoyer",
  },
  {
    login: "takeo",
    avatar_url: "https://avatars.githubusercontent.com/u/23?v=4",
    html_url: "https://github.com/takeo",
  },
  {
    login: "caged",
    avatar_url: "https://avatars.githubusercontent.com/u/25?v=4",
    html_url: "https://github.com/caged",
  },
  {
    login: "topfunky",
    avatar_url: "https://avatars.githubusercontent.com/u/26?v=4",
    html_url: "https://github.com/topfunky",
  },
  {
    login: "anotherjesse",
    avatar_url: "https://avatars.githubusercontent.com/u/27?v=4",
    html_url: "https://github.com/anotherjesse",
  },
  {
    login: "roland",
    avatar_url: "https://avatars.githubusercontent.com/u/28?v=4",
    html_url: "https://github.com/roland",
  },
  {
    login: "lukas",
    avatar_url: "https://avatars.githubusercontent.com/u/29?v=4",
    html_url: "https://github.com/lukas",
  },
  {
    login: "fanvsfan",
    avatar_url: "https://avatars.githubusercontent.com/u/30?v=4",
    html_url: "https://github.com/fanvsfan",
  },
  {
    login: "tomtt",
    avatar_url: "https://avatars.githubusercontent.com/u/31?v=4",
    html_url: "https://github.com/tomtt",
  },
  {
    login: "railsjitsu",
    avatar_url: "https://avatars.githubusercontent.com/u/32?v=4",
    html_url: "https://github.com/railsjitsu",
  },
  {
    login: "nitay",
    avatar_url: "https://avatars.githubusercontent.com/u/34?v=4",
    html_url: "https://github.com/nitay",
  },
  {
    login: "kevwil",
    avatar_url: "https://avatars.githubusercontent.com/u/35?v=4",
    html_url: "https://github.com/kevwil",
  },
  {
    login: "KirinDave",
    avatar_url: "https://avatars.githubusercontent.com/u/36?v=4",
    html_url: "https://github.com/KirinDave",
  },
  {
    login: "jamesgolick",
    avatar_url: "https://avatars.githubusercontent.com/u/37?v=4",
    html_url: "https://github.com/jamesgolick",
  },
  {
    login: "atmos",
    avatar_url: "https://avatars.githubusercontent.com/u/38?v=4",
    html_url: "https://github.com/atmos",
  },
  {
    login: "errfree",
    avatar_url: "https://avatars.githubusercontent.com/u/44?v=4",
    html_url: "https://github.com/errfree",
  },
  {
    login: "mojodna",
    avatar_url: "https://avatars.githubusercontent.com/u/45?v=4",
    html_url: "https://github.com/mojodna",
  },
  {
    login: "bmizerany",
    avatar_url: "https://avatars.githubusercontent.com/u/46?v=4",
    html_url: "https://github.com/bmizerany",
  },
];

const generateUsers = async function () {
  let users = {};

  function randomNum(max) {
    return Math.floor(Math.random() * max);
  }

  function createFollowers(user) {
    let followers = {};
    for (let i = 0; i < randomNum(MAX_FOLLOWERS); i++) {
      const follower = GITHUB_USERS[randomNum(GITHUB_USERS.length)].login;
      if (follower !== user) {
        followers[follower] = 1;
      }
    }
    return Object.keys(followers);
  }

  for (let i = 0; i < GITHUB_USERS.length; i++) {
    const currentUser = GITHUB_USERS[i];
    users[currentUser.login] = {
      login: currentUser.login,
      name: currentUser.login,
      avatar_url: currentUser.avatar_url,
      html_url: currentUser.html_url,
      created_at: "",
      followers_url: createFollowers(currentUser.login),
    };
  }
  const fileDir = __dirname + "/../data/users.js";
  console.log("fileDir", fileDir);

  await writeFileAsync(
    fileDir,
    "const users = " + JSON.stringify(users) + "; export default users;"
  );
  return users;
};

generateUsers();

