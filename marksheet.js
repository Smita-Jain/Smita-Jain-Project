const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const fullname = urlParams.get('FullName');
const rollno = urlParams.get('RollNo')

var totalMarks = 0
var totalSubs = 0

var htmloutput = '<p class = "display-4">Full Name : ' + fullname + '</p>' + '<p class = "display-4">Roll No : ' + rollno + '</p>'

for(
    var i = 1; 
    urlParams.has('sub'+i); 
    i++){

        totalSubs = totalSubs + 1

        totalMarks = totalMarks + parseInt(urlParams.get('marks'+i));
        if(urlParams.get('marks'+i) < 35){
            htmloutput = htmloutput + '<div class="failed">'
        }else{
            htmloutput = htmloutput + '<div class="passed">'
        }

        htmloutput = htmloutput + '<p>Subject : ' + urlParams.get('sub'+i) + ' Marks: ' + urlParams.get('marks'+i) + '</p>'
        htmloutput = htmloutput + '</div>'
}

const percent = totalMarks / totalSubs 
var grade = ''
console.log(percent)
htmloutput = htmloutput + '<p>Total Marks Obtained : ' + totalMarks + '</p>'
htmloutput = htmloutput + '<p>Maximun Marks : ' + totalSubs*100 + '</p>'
htmloutput = htmloutput + '<p>Percentage Obtained : ' + percent + '</p>'


if(percent<=35) grade = 'Fail'
else if(percent>35 && percent<=60) grade = 'Pass'
else if(percent>60 && percent<=75) grade = 'Pass with First Class'
else if(percent>75 && percent<=100) grade = 'Pass with Distinction'

htmloutput = htmloutput + '<p><b>Your Final Result : ' + grade + '</b></p>'

$(".addmarksheethere").append(htmloutput)

console.log(fullname)
console.log(rollno)