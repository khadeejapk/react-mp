import axios from "axios";

const commonApi=async(reqmethod,apiUrl,body)=>{
    const reqconfig={
        method:reqmethod,
        url:apiUrl,
        data:body,
        Headers:{'Content-type':'application/json'}
    }

    return await axios(reqconfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonApi