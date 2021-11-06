

type exckudeFact<T> = T extends 'factId' ? never : T;

interface IFact {
    factId : number;
    user : any;
    value : string;
}
const value : exckudeFact<keyof IFact> = "user" 