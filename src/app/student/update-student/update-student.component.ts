import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
 
  constructor(public serv:StudentService,router:Router) { }
 
  studentId=JSON.parse(sessionStorage.getItem("student")!)._id;
  studentEmail=JSON.parse(sessionStorage.getItem("student")!).email;
  studentPassword=JSON.parse(sessionStorage.getItem("student")!).password;
  std:Student=new Student(this.studentId,this.studentEmail,this.studentPassword);
//for the errors
  error="";
  success="";
  editStudent()
  {
    this.error="";
    this.success="";
    this.serv.updateStudent(this.std).subscribe(s=>{
      this.success="Student Updated Successfully"
      

    }
    ,e=>{
      this.error=e.error;
    }
    )
  }
  ngOnInit(): void {
  }

}
