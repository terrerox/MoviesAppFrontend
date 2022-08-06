import { httpAccount } from "../helpers";


const accountService={}

accountService.Auth = (user)=>{
    return httpAccount.post('authenticate',user)
        .then(response=>response)
        .catch(error=>console.log(error));
}

export default accountService;