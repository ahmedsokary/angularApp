import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Student } from 'src/app/_model/student';
import { StudentTest } from 'src/app/_model/student-test';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html', 
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public serv:AdminService,public route:Router) { }
  students:StudentTest[]=[];
  std:Student= new Student(0,"","");
  error=""

  showItemList=0;
  showStudentList=0;

  editStudentButton(s:StudentTest)
  {
    this.error=""
    this.showItemList=1;
    this.showStudentList=1;


    this.std.id=s._id;
    this.std.email=s.email;
    this.std.password=s.password;

  }

  editStudent()
  {
    console.log("hereeee");
    
    this.serv.editStudent(this.std).subscribe(s=>
      {
        this.showItemList=0;
        this.showStudentList=0;
      },
      e=>
      {
        this.error=e.error;
      }
      )

  }


  removeStudent(s:StudentTest)
  {
    if(confirm("Are you sure to delete "+s.email)) {
      this.serv.deleteStudent(s._id).subscribe(s=>
        {
          console.log("deleteed");
        },
        e=>
        {
          console.log(e);
        }
        )
    }
    
  }

  ngOnInit(): void {
    this.serv.getAllStudents().subscribe(s=>
      {
        this.students=s;
      },
      e=>
      {

      }
      )
  }

}
