export default function authHeader() {
  const user = localStorage.getItem("UserToken");
  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
