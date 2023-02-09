const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh', 
            instructor: 'Bro T'},
        { sectionNum: 2,
            roomNum: 'STC 347',
            enrolled   : 28,
            days: 'TTh',
            instructor: 'Sis A'}
            
    ]
};
function setNumnName(course){
    const name = document.getElementById("courseName");
    const code = document.getElementById("courseCode");
    name.textContent = course.name;
    code.textContent = course.code;
}
function output(sections){
    const content = sections.map((section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`);
    document.querySelector("#sections").innerHTML= content.join("");

}
setNumnName(aCourse);
output(aCourse.sections);