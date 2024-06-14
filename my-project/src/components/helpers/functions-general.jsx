export const baseImgUrl = "../../img";

// get the url id parameter
export const getUrlParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
  };
  
  export const checkLocalStorage = () => {
    let glatoken = null;
    try {
      glatoken = JSON.parse(localStorage.getItem("glatoken"));
    } catch (error) {
      glatoken = null;
    }
  
    return glatoken;
  };
  
  export function setStorageRoute(jwt) {
    localStorage.setItem("glatoken", JSON.stringify({ token: jwt }));
  }