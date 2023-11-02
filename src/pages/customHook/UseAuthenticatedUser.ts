import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"

export type AuthenticatedUser = {
    username:string;
    userId:string;
}

const UseAuthenticatedUser = () => {

    // hooklar aslında içerisinde kendisi ile alakası state barındıran ve state değerlerine farklı sayfalar üzerinden erişmemizi sağlayan functions.

    // AuthenticatedUser | null union types
    const [user,setUser] = useState<AuthenticatedUser | null>({username:'', userId:''});

    // asenkron kod çağırıları yapabiliriz.
    useEffect(() => {
            const token = localStorage.getItem('accessToken');

            console.log('token', token);

            if(token !== null) {
               const decoded:any = jwtDecode(token as string);
               console.log('decoded', decoded);
               setUser({userId:decoded.sub, username:decoded?.name})
            } else  {
                setUser(null);
            }
    }, []);

    return user;

}

export default UseAuthenticatedUser;