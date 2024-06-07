let gradeMap = new Map();

gradeMap.set('Rahul', {Maths: 100, Science: 95});
gradeMap.set('Midhun', {Maths: 55, Science: 75});
gradeMap.set('Sujin', {Maths: 100, Science: 100});
gradeMap.set('Manu', {Maths: 100, Science: 99});
gradeMap.set('Anandu', {Maths: 98, Science: 99});

function average(map) {
    let averagemap = new Map();
    for (let [student, grades] of map) {
        let total = 0;
        let subjectCount = 0;
        for (let subject in grades) {
            total += grades[subject];
            subjectCount++;
        }
        averagemap.set(student, total / subjectCount);
    }
    return averagemap;
}

let newMap = average(gradeMap);

for(let [student,avgGrade] of newMap){
    console.log(`${student}:${avgGrade}`)
}
