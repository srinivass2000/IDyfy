export default function authHeader() {
  const user = localStorage.getItem("AdminToken");
  if (user) {
    return { Authorization: "AdminBearer " + user };
  } else {
    return {};
  }
}
