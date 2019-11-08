
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

export interface IUserRol {
  kind: string 
  id: string
}

export interface IUser {
  cn: string,
  email: string
  id?: string
  photoCover: string
  rol: IUserRol
  
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
  durationInDays: number
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

export interface IPricingGrid {
  program_id: string
  price: number
}

export interface ISession {
  userid: string 
  started_at: Date
  token: string 
}

export interface IDateAvailable {
  program_id: string 
  start_date: Date 
  end_date: Date
  program_limit: number 
  reserved: number 
  price: number
  is_on_sale: boolean
}

export interface IContact {
  _id: string
  cn : string
  first_name: string 
  last_name: string 
  email: string 
  country: string 
  address1: string 
  address2: string 
  tags: string[] 
  created_by: IUser
  created_at: Date
  tenant: string 
  kindOf: string
  domain: string
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
  getProgram(id:string): Promise<IProgram>
  getPrograms(): Promise<IProgram[]>
  insertDateAvailable(IDateAvailable): void
  getDatesAvailables(): Promise<IDateAvailable[]>

  insertContact(contact:IContact) : void
  getContacts(): Promise<IContact[]>
  insertContact(contact: IContact) : void

  getClientTrip(bookId: string) : Promise<any>
  
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
  rol: IUserRol;
  cn: string; email: string;
  id?: string;
  photoCover: string;
  constructor(_id: string, _cn: string, _photoCover: string) {
    this.cn = _cn
    this.id = _id
    this.photoCover = _photoCover
  }
}

interface MyTripProgram {
  thumbnail: string
  lodge: string
  title: string
  subtitle: string
  from: number
  to: number
}


interface MyTripManageAction {
  title: string
  text: string
}

interface MyTripPaymentCharge {
  text: string
  amount: number
}

interface MyTripPayment {
  title: string
  reservation: string
  invoice_date: number
  received_amount: number
  received_date: number
  received_card: string
  charges: Array<MyTripPaymentCharge>
}

export interface MyTripFlightData {
  code: string
  type: string
  flight_number?: string
  flight_status?: string
  flight_gate?: string
  departure_data?: MyTripFlightDataDetail
  arrival_data?: MyTripFlightDataDetail
}

interface MyTripFlightDataDetail {
  airport_code: string
  time?: string
}

interface MyTripCharterData {
  code: string
  type: string
  title: string
  date: string
  items?: Array<string>
}

interface MyTripTransferData {
  code: string
  type: string
  from: string
  to: string
  pickup_time: string
  driver?: MyTripDriver
}

interface MyTripDriver {
  firstname: string
  lastname: string
  photo: string
  phone: string
  live: string
}

interface MyTripLodgeActivitiesData {
  code: string
  type: string
  text: string
  service_included?: Array<string>
}

interface MyTripItinerary {
  date: number
  items: Array<MyTripFlightData | MyTripCharterData | MyTripTransferData | MyTripLodgeActivitiesData>
}

export interface MyTrip {
  booking_id: string
  reservation_holder: string
  program: MyTripProgram
  manage: Array<MyTripManageAction>
  payment: MyTripPayment
  itinerary: MyTripItinerary
}



