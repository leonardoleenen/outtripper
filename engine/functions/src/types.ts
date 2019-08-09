export interface IProgram {
  id: string,
  name: string,
  maxPax: number,
  minPax: number,

  toJSON(): any
}

export interface IAvailability {
  program: IProgram,
  startingAt: Date,
  till: Date,
  freeSpots: number
}

export interface ICustomer {
  id: string
}

export interface IDataService {
  getCustomers(): Promise<ICustomer[]>
}

export interface IAvailabilityService {
  /**
   * Get all availability for a program
   * @param program Program To Filter
   */
  get(program: IProgram): Promise<IAvailability[]>

  /**
   * Set a record for availiability 
   * @param program 
   * @param startingAt 
   * @param till 
   * @param freeSpots 
   */
  set(program: IProgram, startingAt: Date, till: Date, freeSpots: number): Promise<void>

  /**
   * Get All availability 
   */
  getAll(): Promise<IAvailability[]>

  /**
   * Get All availiability given a program, startingdate and paxs
   * @param program 
   * @param startingDate 
   * @param pax 
   */
  getByProgramDateAndPax(idProgram: string, startingDate: Date,pax: number): Promise<IAvailability[]>


  /**
   * get Availability by dates no matters programs and pax
   * @param startingAt 
   */
  getByDates(startingAt: Date): Promise<IAvailability[]>


  /**
   * get Availability by dates and pax, no matters programs 
   * @param startingAt 
   * @param pax 
   */
  getByDatesAndPax(startingAt: Date, pax: number): Promise<IAvailability[]>


  /**
   * Converts an availability list to human text
   * @param availability 
   */
  humanize(): String

  /** Choice a random availability date. This method must be called after any method get */
  choiceRandom(): IAvailability
}


export class Program implements IProgram {
  id: string;
  name: string;
  maxPax: number;
  minPax: number;

  constructor(id: string, name: string, maxPax: number, minPax: number) {
    this.id = id
    this.name = name
    this.maxPax = maxPax
    this.minPax = minPax
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      maxPax: this.maxPax,
      minPax: this.minPax
    }
  }

  static JSONToClass(value: any): Program {
    return new Program(value.id,value.name,value.maxPax,value.minPax)
  }
}

export class Availability implements IAvailability {
  program: IProgram;
  startingAt: Date;
  till: Date;
  freeSpots: number

  constructor(program: IProgram, startingAt: Date, till: Date, freeSpots: number) {
    this.program = program
    this.startingAt = startingAt
    this.till = till
    this.freeSpots = freeSpots
  }

  toJSON() {
    return {
      program: this.program.toJSON(),
      startingAt: this.startingAt,
      till: this.till,
      freeSpots: this.freeSpots
    }
  }

  static JSONToClass(value:any): Availability {
    const _starting = new Date() 
    _starting.setTime(value.startingAt.seconds * 1000)

    const _till = new Date() 
    _till.setTime(value.till.seconds * 1000)

    return new Availability(Program.JSONToClass(value.program),_starting,_till, value.freeSpots)
  }
}