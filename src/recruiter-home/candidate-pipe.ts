import { Inject, Pipe, PipeTransform } from "@angular/core";
import { ICandidateView } from "./IcandidateView";

@Pipe({
    name: 'candidateFilter'
})
export class CandidateFilterPipe implements PipeTransform{

    transform(value: ICandidateView[], args: string[]):ICandidateView[] {
        let myresult = args[1]?args[1]: "";
        let candidatesView:ICandidateView[] = []

        if(candidatesView.length==0 && args[0]==='Candidate Id'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateId.indexOf(myresult)!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Name'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateName.indexOf(myresult)!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Role'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateRole.indexOf(myresult)!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Status'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateStatus.indexOf(myresult)!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Email'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateEmail.indexOf(myresult)!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Assessment Status'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.assessmentStatus.indexOf(myresult)!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Qualification'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateQualification.indexOf(myresult)!= -1));
        }
        return myresult ? candidatesView:value;
    }

}