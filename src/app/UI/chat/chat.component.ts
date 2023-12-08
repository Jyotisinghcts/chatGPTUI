import { Component } from '@angular/core';
import { FirstPageComponent } from '../first-page/first-page.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {


  userInputMsg: string = "";
  hideapp = true
  loaderVisible = false;
  //inputdata="passingvalue"
  data = [{ "ques": 'message', "ans": 'answer' },
  { "ques": 'message2', "ans": 'answer2' }]



  ngOnInit() {
    this.getdata()

  }

  getdata() {
    if(this.data)
    this.loaderVisible=true
  else
  this.loaderVisible=false


 //this.loaderVisible=false
  }
  OnDisplay(data:string)
  {
    this.hideapp = false
    console.log("data in parent")
    console.log(data)
  //   this.data=data.toString();
  }

  send() {
    if (this.userInputMsg == "")
      this.hideapp = true
    else
      this.hideapp = false

    console.log("click", this.userInputMsg);
    console.log(this.data);

    this.userInputMsg = ""
  }

}
