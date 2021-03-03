import jwtUtils from '../common/jwtUtils';
import { User, extractJwt } from '../../configs/common/types';

export default {

    extractJwt: (jwtToken:string):extractJwt => {
        const data:any = jwtUtils.extractJwt(jwtToken);
        const response:extractJwt = [
            jwtToken,
            data.userName
        ]
        console.log(`[userService][extractJwt()] - output = ${JSON.stringify(response)}`);
        return response;
    }
}
