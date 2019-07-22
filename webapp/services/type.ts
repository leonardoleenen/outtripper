

export interface IUser {
    cn : string, 
    email: string 
    id?: string 
    photoCover: string
}

export interface IDataBaseService {
    getUser():Promise<IUser>
    setUser(user:IUser):void
}


export class User implements IUser {
    cn: string;    email: string;
    id?: string;
    photoCover: string;


    constructor(_id:string, _cn:string,_photoCover:string ) {
        this.cn=_cn
        this.id = _id
        this.photoCover = _photoCover

    }
}



