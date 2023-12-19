function Student(name, gender, age) {

    // new Student ("Stacy", "женский", 25);
    // new Student ("Mark", "мужской", 25);

       this.name = name;
       this.gender = gender;
       this.age = age;
       this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')){
      this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function () {
    
    if (this.hasOwnProperty('marks') && this.marks.length > 0){
        let sum = 0;
        this.marks.forEach(item => sum += item);
      return  sum /this.marks.length;
    }
    return 0;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
