var courseAPI = "http://localhost:3000/courses";

fetch(courseAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (courses) {
        var htmls = courses.map(function (course){
            return `
                <li>
                    <h2>id : ${course.id}</h2>
                    <h2>name : ${course.name}</h2>
                    <p>description : ${course.description}</p>
                </li>
            `
        })
        var html = htmls.join('');
        document.getElementById('list-fetch').innerHTML = html;
    })


    // COURSES


    
    var courseApi = 'http://localhost:3000/courses';

    function start(){
        getCourse(function(courses){
            renderCourse(courses);
        });

        handleCreateForm();
    }

    // chay dau tien
    start();

    // Functions

    function getCourse(callback){
        // callback goi lai thang getCourse thay vi phai goi lai trong Promise
        fetch(courseApi)
            .then(function(response){
                return response.json();
            })
            .then(callback);
    }

    // fetch mo
    function createCourse(data, callback){
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
            
        }
        fetch(courseApi , options)
            .then(function(response){
                return response.json();
            })
            .then(callback);
    }

    function renderCourse(courses){
        // then 1 -> return reponse.json();
        //then 2 call back goi lai  ham getCourse -> ham getCouse goi den renderCourse thì 
        // renderCouse se dc truyen vao callback la dc truyen vao cai reponse.json
        // de render ra dl tu API courses
        var listCoursesBlock = document.querySelector('#list-courses');
        var htmls = courses.map(function(course){
            return `   
                <li class="course-item-${course.id}">
                    <h4>name : ${course.name}</h4>
                    <p>description : ${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
                </li>
            `;
        });
        var html = htmls.join('');
        listCoursesBlock.innerHTML = html;
    }

    function handleCreateForm(){
        var createBtn = document.querySelector('#create');
        createBtn.onclick = function(){
            var name = document.querySelector('input[name="name"]').value;
            var description = document.querySelector('input[name="description"]').value;

            var formData = {
                name: name,
                description: description
            };

            createCourse(formData , function(){
                getCourse(renderCourse);
            });

            // alert('Create');
        }
    }

    // deleteCourse xu ly xoa course
    function handleDeleteCourse(id){
        var options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            
        }
        fetch(courseApi + '/' + id , options)
            .then(function(response){
                return response.json();
            })
            .then(function(){
               var courseItem = document.querySelector('.course-item-'+id);
               if(courseItem){
                   courseItem.remove();
               }
            });
    }

    // arrow function
    /*
                    let sum = (a , b) => {
                        return a + b;
                    }

                    console.log(sum(5,6));
                

                    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    const result = arr.filter( (number) =>{
                        return number > 5;
                    })
                    console.log(result);

                    const arr1 = [1, 4, 100, 3, 10];
                    let i = arr1.sort((a , b) =>{
                        return a - b;
                    });
                    console.log(i);
    */
    // sort  1 vs 4 4 > 1 => 1, 4 
    //  4 vs 100 => 100 > 4 => 4, 100 > 100 loop

    // let arr3 = [1, 4, 100, 3, 10];
    // let sumLo = _.sum(arr3);
    // console.log(sumLo);

    const callback = (error, data) => {
        if(error) {
            console.log('calling callback with error', error);
        }
        if(data){
            console.log('calling callback with data', data);
        }
    }

   function getTodo(){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(this.readyState === 4 && request.status === 200) {
            // console.log('request for : ', request);
            // dang object
            const data = JSON.parse(request.responseText);
            // server dang text
            const dataString = JSON.stringify(data);
            callback(undefined, data);
            callback(undefined, dataString);
        }if(this.readyState === 4 && request.status !== 200){
            // console.log('request status for', request);
            callback('Something wrongs', undefined);
        }
    };
    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    request.send();
   }

    //bat dong bo thang nao nhanh thi chay truoc
   console.log(1);
   console.log(2);
   getTodo(callback);
   console.log(3);
   console.log(4);