import { Component, ErrorHandler } from '@angular/core';
import { IQuestion } from './IQuestion';
import { AssessmentService } from './assessment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent{

  pageTitle:string = "Assessment"
  selectedAssessment:string = ''
  candidateId:string = ''
  isProceeded:boolean = false
  questions:IQuestion[] = []
  currQuestion:number = 0
  timeLeft: number = 600;
  selectedCount:number = 0
  isfinishedAssesment:boolean = false
  score:number = 0
  navigateWarning:number = 0
  isNavigated:boolean = false

  constructor(private _assessmentService:AssessmentService, private _router:Router){
    document.addEventListener('visibilitychange',() =>{
      if(document.hidden){
        this.isNavigated = true
        if(this.navigateWarning<2){
          this.navigateWarning++;
        }
      }
      if(this.navigateWarning==2){
        this.submit()
      }
  })
  }

  ngOnInit():void{
    this.selectedAssessment = JSON.stringify(localStorage.getItem('assessmentId'))
    this.candidateId = JSON.stringify(localStorage.getItem('candidateId'))
    this._assessmentService.getQuestions(this.selectedAssessment).subscribe(result=>this.questions=result)
  }

  changeProceedStatus(){
    this.isProceeded = true
    this.startTimer()
  }

  answerSelected(questionId:number, answerSelected:string){
    this.questions[this.currQuestion].selected=answerSelected
    this.selectedCount = this.questions.filter(ques=>ques.selected!=undefined).length
  }

  previous(){
    this.currQuestion = this.currQuestion-1
  }

  next(){
    this.currQuestion = this.currQuestion+1
  }

  submit(){
      this.isfinishedAssesment = true;
      this._assessmentService.sendSubmission(this.candidateId,this.selectedAssessment,this.questions).subscribe(resp=>{
        this.score = resp
      })
  }

  close(){
    window. self. close();
  }

  resume(){
    this.isNavigated = false
    if(this.navigateWarning==2){
      this.isfinishedAssesment = true
    }
  }

startTimer() {
    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }
}
