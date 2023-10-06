console.log("This is my indexl.js");

// data is an array of objects which contains 
const data = [
    {
        name :'Rohan Das',
        age : 18,
        city : 'Kolkata',
        language : 'Python',
        frameWork : 'Django',
        image : 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name :'Shumbham sharma',
        age : 28,
        city : 'Bangalore',
        language : 'JavaScript',
        frameWork : 'react',
        image : 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name :'Camello cabello',
        age : 21,
        city : 'new york',
        language : 'c++',
        frameWork : 'c#',
        image : 'https://randomuser.me/api/portraits/women/77.jpg'
    },
    {
        name :'jatin Das',
        age : 18,
        city : 'jodhpur',
        language : 'html',
        frameWork : 'pug',
        image : 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
        name :'Anushka Verma',
        age : 20,
        city : 'Dhanbad',
        language : 'rust',
        frameWork : 'rust framework',
        image : 'https://randomuser.me/api/portraits/women/42.jpg'
    },
];

// CV iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next : function(){
            return nextIndex<profiles.length ? 
            {
                value : profiles[nextIndex++] ,
                done : false
            }:
            {
                done : true
            }
        }
    };
}

const candidates = cvIterator(data);

nextCV(); // ekk barr to run krr do nextCV ko

// button listener for next button
const next = document.getElementById('next');
next.addEventListener('click' , nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Works on ${currentCandidate.language}</li>
        <li class="list-group-item">Uses ${currentCandidate.frameWork} framework</li>
      </ul>`;
    }else{
        alert("End of applications");
        window.location.reload();
    }
}