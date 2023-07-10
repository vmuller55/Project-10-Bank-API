/**
 * 
 * @param {string} token
 * @returns 
 */
const login = async (token) => {
    return await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      });
  };
  
  export default login;