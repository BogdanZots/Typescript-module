

type exckudeFact<T> = T extends 'factId' ? never : T;

interface IFact {
    factId : number;
    user : any;
    value : string;
}
const value : exckudeFact<keyof IFact> = "user" 


const oldV = 5115;
const newApi = 'new api'