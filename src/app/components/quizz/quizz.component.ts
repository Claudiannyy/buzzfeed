import { Component,OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"
@Component({
  selector: 'app-quizz',
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit{
  title: string = ""
  questions:any
  questionSelected:any

  answers: string []=[]
  answerSelected:string=""

  questionIndex:number =0
  questionMaxIndex:number = 0

  finished: boolean = false;
  constructor(){}
  ngOnInit():void{}

}
