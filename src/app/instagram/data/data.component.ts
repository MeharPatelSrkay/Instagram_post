import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  Name = ''
  Age = ''
  Dept = ''
  getName(eve1 : any){
    this.Name = eve1.target.value
  }
  getAge(eve1 : any){
    this.Age = eve1.target.value
  }
  getDept(eve1 : any){
    this.Dept = eve1.target.value
  }
  MyName = ''
  MyAge = ''
  MyDept = ''
  printVal(){
    this.MyName = this.Name
    this.MyAge = this.Age
    this.MyDept = this.Dept
  }
}