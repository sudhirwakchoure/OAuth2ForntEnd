import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: "SudhirFoodApp",
  url: "http://127.0.0.1:8086/",
  clientId: "frontend",
  pkceMethod: "S256",
});
export default keycloak;

