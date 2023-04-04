var newUser = {
  name: "Jane",
  id: "1",
  isAdmin: false,
};
function addUser(user) {
  return user.name + " added successfully";
}
var ans = addUser(newUser);
console.log(ans);
