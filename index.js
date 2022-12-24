let appData = {};
fetch('./assets/data.json').then(res=>res.json()).then((res)=>{
    console.log('data from api::', res);
    appData = res;
});
const navList = document.querySelectorAll('.nav-list');

navList.forEach(list => {
    list.addEventListener('click', function clickHandler() {
        navList.forEach(list=>{
            list.classList.remove('active');
        })
        this.classList.add('active');
    })
});


function addDataInSkillsSection(){
const skillsBlock = document.getElementById('skills');
const skillsContentBlock = skillsBlock.getElementsByClassName('section_content')[0];
const skills = appData;
console.log('skills::', skills);

for(let [key, value] of Object.entries(skills)){
    addCardToSection(value);
}
    const languages = [
        {
            title: 'HTML 5',
            tag: 'html',
            logo: './assets/html5.png',
        },
        {
            title: 'CSS 3',
            tag: 'css',
            logo: './assets/html5.png',
        },
        {
            title: 'JavaScript',
            tag: 'javascript',
            logo: './assets/html5.png',
        },
        {
            title: 'TypeScript',
            tag: 'typescript',
            logo: './assets/html5.png',
        }
    ];

    const libsAndFramework = [
        {
            title: 'Angular 12',
            tag: 'angular 6+',
            logo: './assets/html5.png',
        },
        {
            title: 'React.js',
            tag: 'react',
            logo: './assets/html5.png',
        },
    ];

    const testingTools = [
        {
            title: 'Jasmine',
            tag: 'jasmine',
            logo: './assets/html5.png',
        },
        {
            title: 'Karma',
            tag: 'karma',
            logo: './assets/html5.png',
        },
    ];

    const stylingTools = [
        {
            title: 'BootStrap',
            tag: 'bootstrap',
            logo: './assets/html5.png',
        },
        {
            title: 'PrimeNg',
            tag: 'primeng',
            logo: './assets/html5.png',
        },
        {
            title: 'Angular Material',
            tag: 'angularMaterial',
            logo: './assets/html5.png',
        },
    ];

    const others = [
        {
            title: 'Git',
            tag: 'git',
            logo: './assets/html5.png',
        },
        {
            title: 'Netlify',
            tag: 'netlify',
            logo: './assets/html5.png',
        },
        {
            title: 'Heroku',
            tag: 'heroku',
            logo: './assets/html5.png',
        },
    ];



    const addLibsAndFrameworks = () =>{

    }

    const addTestingTools = () =>{

    }

    const addStylingTools = () =>{

    }

    const addCardToSection = (data) =>{
        const card = createCard();
        skillsContentBlock.append(card);
        card.append(createInnerContentForCard(data));
    } 

    const createInnerContentForCard = (data) =>{
        const dataFragment = new DocumentFragment();
        data.forEach(entry=>{
            const dataBlockWrapper = document.createElement('div');
            dataBlockWrapper.classList.add('section_content_card_block');
            const img = document.createElement('img');
            img.width = '80';
            img.height = '80';
            img.src = entry.logo;
            img.alt = entry.alt;
            const entryName = document.createElement('div');
            entryName.innerText = entry.title;
            entryName.classList.add('description')
            dataBlockWrapper.append(img);
            dataBlockWrapper.append(entryName);
            dataFragment.append(dataBlockWrapper);
        });
       return dataFragment;
    }
    addCardToSection(languages);
    addCardToSection(libsAndFramework);
    addCardToSection(testingTools);
    addCardToSection(stylingTools);
    addCardToSection(others);


    // addLanguages();
    addLibsAndFrameworks();
    addStylingTools();
    addTestingTools();
}

addDataInSkillsSection();

function createCard(){
    const section = document.createElement('section');
    section.classList.add('section_content_card');
    return section;
}



