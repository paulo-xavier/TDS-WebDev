

const url = '../db/db.json';

fetch(url)

.then(response => response.json())
.then(data => {
    printDataInScreen(data);
});


function printDataInScreen(data) {
    
    // console.log(data.School_subjects.Math);



    let rootMath = data.School_subjects.Math;
    
    let schoolSubContainer = document.getElementById('school-subjects-container');

    schoolSubContainer.innerHTML += `

    <div class="school-subject">
        <img src="./assets/images/school.png" alt="School book">
            
        <h2 id="teacher-name">Teacher:</h2>
        <p> ${rootMath[0].teacher} </p>
    
        <h3 id="students-name">Students:</h3>
        <p> ${rootMath[1].students[0]} </p>
        <p> ${rootMath[1].students[1]} </p>
        <p> ${rootMath[1].students[2]} </p>  

    </div>
    
    `



    // for (const i = 0; i < rootMath.length; i++) {
    //     console.log(rootMath[i].teacher);
    //     // console.log(root[1].students.length)

    //     for (let j = 0; j < rootMath[i+1].students.length; j++) {
    //         // console.log(rootMath[i+1].students[j]);

    //         const schoolSubContainer = document.getElementById('school_subjects_container');

    //         schoolSubContainer.innerHTML += `
    //         <img src="../images/school.png" alt="School book">
            
    //         <h2 id="teacher-name">Teacher:</h2>
    //         <p> ${rootMath[i].teacher} </p>
            
    //         <h3 id="students-name">Students:</h3>
    //         <p> ${rootMath[i+1].students[j]} </p>
    //         <p> ${rootMath[i+1].students[j]} </p>
    //         <p> ${rootMath[i+1].students[j]} </p>
    //         `
    //     }
        
    // }



}