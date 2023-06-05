import { IQuestion } from "./IQuestion";

export interface IsubmissionRequest{
    candidateId:string,
    assessmentId:string,
    questions:IQuestion[]
}