import {store} from '../store'
import auth from '../auth'
export default (to,from,next)=>{
  
  if (!auth.isAuthenticated()) {
    next('/auth/signin')
  } else {
    next();
  }
}
