import { transformUser } from "../transformers/transform-user";

export const getUser = (loginToFind) => 
fetch(`http://localhost:3000/users?login=${loginToFind}`)
.then((loadedUser) => loadedUser.json())
.then(([loadedUser]) => loadedUser && transformUser(loadedUser));


