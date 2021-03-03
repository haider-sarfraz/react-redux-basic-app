import jwt from 'jsonwebtoken'

export default {

    extractJwt: (jwtToken:string) => {
        console.log(`[extractJwt()][input => ${JSON.stringify(jwtToken)}]`)

        const response = jwt.decode(jwtToken);

        console.log(`[extractJwt()][output => ${JSON.stringify(jwtToken)}]`)

        return response;
    }
}
