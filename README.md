## `Github Ranker`

### `Scripts:`

### `npm install`

### `npm start`


I am using static data instead of the real API from github, my mock data has a users array.
i only put the relevent element from each user meanning:
login, name, avatar_url, html_url, created_at and followers_url.
all those elements are identical to the real API except the followers_url.
In the github API followers_url is a url for the list of users that follow the current user.
in my static data i just used an array with the names of those users instead of an array of objects.

inside the src/api/users folder we can see an index.js file.
that index.js file run every time the user want to generate new users data.
for the static data i use an array with 30 users that the user can see a portion of them or all of them,
depending on his input.
while i was not asked to use the real github API because of the limiting calls per IP i added in the same folder
a github user data generator.
all you need to do is to use the imported 'github' instead of the 'mock' inside the index.js file.
the github.js file inside src/api/users can get a list of users and generate the relevent users data.
i tested it with 1 user (because of the limitation in the number of calls) but used method that will take into acount if we use more than 1 user name.

Each user object has followers and followersUrl Properties.
the followersUrl Property has an array of the loginNames of all of his followers.
the fllowers Property has an array of user object (thats where we calculte the rank depending on the depth).




