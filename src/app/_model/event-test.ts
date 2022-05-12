export class EventTest {
    constructor(
        public  id:Number,
        public  title:string,
        public eventDate:String,
        public mainSpeakerId:number,
        public otherSpeakersIds:Array<number>,
        public  studentsIds:Array<number>
       ){}
 }
 