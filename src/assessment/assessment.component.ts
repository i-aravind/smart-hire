import { Component } from '@angular/core';
import { IQuestion } from './IQuestion';
import { AssessmentService } from './assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {

  pageTitle:string = "Assessment"
  selectedAssessment:string = ''
  candidateId:string = ''
  isProceeded:boolean = false
  questions:IQuestion[] = []
  currQuestion:number = 0
  timeLeft: number = 600;
  selectedCount:number = 0
  isfinishedAssesment:boolean = false;

  constructor(private _assessmentService:AssessmentService){
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
    console.log(this.questions.filter(ques=>ques.selected!=''))
    this.selectedCount = this.questions.filter(ques=>ques.selected!=undefined).length
  }

  previous(){
    this.currQuestion = this.currQuestion-1
  }

  next(){
    this.currQuestion = this.currQuestion+1
  }

  submit(){
    if(window.confirm("Are you sure want to submit?")){
      this.isfinishedAssesment = true;
    }
  }

  close(){
    window. self. close();
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
