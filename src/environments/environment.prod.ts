const apiUrl = 'http://49.0.80.15:9440/utcc-mini-project-mobile';
const apiAuthenticationUrl = '/token/authenticate';

export const environment = {
  production: false,
  api_url: apiUrl,
  api_authentication_url: apiUrl + apiAuthenticationUrl,
};
