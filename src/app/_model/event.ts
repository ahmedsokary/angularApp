export class Event {
    constructor(
       public  _id:Number,
       public  title:string,
       public eventDate:String,
       public mainSpeakerId:number,
       public otherSpeakersIds:Array<number>,
       public  studentsIds:Array<number>
      ){}
}
