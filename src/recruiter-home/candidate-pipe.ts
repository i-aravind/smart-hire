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
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateId.toLocaleLowerCase().indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Name'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateName.toLocaleLowerCase().indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Role'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateRole.toLocaleLowerCase().indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Status'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateStatus.toLocaleLowerCase().indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Email'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateEmail.toLocaleLowerCase().indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Assessment Status'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.assessmentStatus.indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Candidate Qualification'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.candidateQualification.indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        if(candidatesView.length==0 && args[0]==='Score'){
            candidatesView = candidatesView.concat(value.filter((cand:ICandidateView)=>cand.score.indexOf(myresult.toLocaleLowerCase())!= -1));
        }
        return myresult ? candidatesView:value;
    }

}