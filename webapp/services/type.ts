
export enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday" 
}

export enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December"
}

export enum ProgramKind {
  forLodge = 'FORLODGE',
  forGuide = 'FORGUIDE'
}



export interface IUser {
  cn: string,
  email: string
  id?: string
  photoCover: string
}

export interface IDestination {
  id: string
  name: string
  maxPax: number
}


export interface IProgramForLodge {
  kind: string 
  months: string[]
  monthForService: Month[],
  startingDay:  Day,
  fixedDay : boolean    
}

export interface IProgramForGuide {
  kind: string 
}

export interface IProgram {
  id: string 
  name: string 
  maxPax: number
  particularSetting : IProgramForLodge | IProgramForGuide
}

export interface ISession {
  userid: string 
  started_at: Date
  token: string 
}

export interface IDateAvailable {
  id: string 
  program_id: string 
  date: Date 
  programLimit: number 
  reserved: number 
}




export interface IDataBaseService {
  getUser(): Promise<IUser>
  setUser(user: IUser): void
  getDestinationInfo(): Promise<IDestination>
  insertDestinationInfo(info: IDestination): void
  setSession(data: ISession): void
  cleanSession(): void
  getToken(): Promise<string>
  insertProgram(program:IProgram): void
  insertDateAvailable(IDateAvailable): void
}


export class Session implements ISession {
  userid: string;  
  started_at: Date;
  token: string;

  constructor(_userid: string, _started_at: Date, _token: string) {
    this.userid = _userid
    this.started_at = _started_at
    this.token = _token
  }
}

export class DateAvailable implements IDateAvailable {
  id: string 
  program_id: 
  string;  date: Date;
  programLimit: number;
  reserved: number;

  constructor(_id: string, _program_id: string, _date: Date, _programLimit: number, _reserved: number){
    this.id = _id
    this.date = _date
    this.program_id = _program_id
    this.programLimit = _programLimit
    this.reserved = _reserved
  }
}

export class Destination implements IDestination {
  id: string;  name: string;
  maxPax: number;
  monthForService: string[];
  constructor(_id: string, _name: string) {
    this.id = _id
    this.name = _name
  }
}

export class Program implements  IProgram {
  id: string;  
  name: string;
  maxPax: number;
  particularSetting: IProgramForLodge | IProgramForGuide;

  constructor(_id: string, _maxPax: number, _particularSetting:IProgramForLodge | IProgramForGuide ) {
    this.id = _id
    this.maxPax = _maxPax
    this.particularSetting = _particularSetting
  }
}

export class User implements IUser {
  cn: string; email: string;
  id?: string;
  photoCover: string;
  constructor(_id: string, _cn: string, _photoCover: string) {
    this.cn = _cn
    this.id = _id
    this.photoCover = _photoCover
  }
}



