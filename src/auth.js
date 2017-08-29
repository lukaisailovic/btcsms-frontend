import config from "./config"
export default  {
    isAuthenticated(){
      let token = localStorage.getItem("token");
      if (token == null) {
        return false;
      } else {
        return true
      }
    },
    Authenticate(token){
      return  new Promise(function(resolve, reject) {
        localStorage.setItem('token', token);
        resolve();
      });
    },
    getUser(){
      return new Promise(function(resolve, reject) {
        let cfg = {'Authorization': localStorage.getItem("token")};
        axios.get(config.backend+'/auth/user', {headers: cfg})
        .then((response) => {
            resolve(response.data.user)
        }).catch((err)=>{
          reject(err)
        })

      });

    },
    signOut(){
      localStorage.removeItem("token");      
    },

}
