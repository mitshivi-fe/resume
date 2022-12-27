let appData = {};
const navList = document.querySelectorAll('.nav-list');
fetch('./assets/data.json').then(res => res.json()).then((res) => {
    appData = res.data;
    const {skills: skillsData, contact: contactData, experience: expData} = res.data; 
    addDataInSkillsSection();
    addDataInContactsSection(contactData);
    addDataInExperienceSection(expData);
});

navList.forEach(list => {
    list.addEventListener('click', function clickHandler() {
        navList.forEach(list => {
            list.classList.remove('active');
        })
        this.classList.add('active');
    })
});


function addDataInSkillsSection() {
    const skillsBlock = document.getElementById('skills');
    const skillsContentBlock = skillsBlock.getElementsByClassName('section_content')[0];
    const skills = appData.skills;

    for (let [key, value] of Object.entries(skills)) {
        addCardToSection(value);
    }

    function addCardToSection({title, data}) {
        const card = createCard();
        skillsContentBlock.append(card);
        const cardContentWrapper = document.createElement('div');
        cardContentWrapper.classList.add('card_content_wrapper');
        cardContentWrapper.append(createInnerContentForCard(data));
        const header = document.createElement('div');
        header.innerText = title;
        header.classList.add('section_content_card_header');
        card.append(header);
        card.append(document.createElement('hr'));
        card.append(cardContentWrapper);
    }

    function createInnerContentForCard(data) {
        const dataFragment = new DocumentFragment();
        data.forEach(entry => {
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
}

function createCard() {
    const section = document.createElement('section');
    section.classList.add('section_content_card');
    return section;
}

function addDataInContactsSection(contactData){
    const sectionContent = document.querySelector('#contact .section_content');
    const DocumentFragment = document.createDocumentFragment();
    contactData.forEach((contact)=>{
        const p = document.createElement('p');
        const anchorIcon = document.createElement('a');
        anchorIcon.href = contact.href;
        anchorIcon.innerHTML = contact.icon;
        anchorIcon.classList.add('anchorIcon');

        const anchorData = document.createElement('a');
        anchorData.href = contact.href;
        anchorData.innerText = contact.title;
        anchorData.classList.add('anchorData');

        p.append(anchorIcon);
        p.append(anchorData);
        p.classList.add('sec-block');
        DocumentFragment.append(p);
    });

    sectionContent.append(DocumentFragment);
}

function addDataInExperienceSection(expData){
    expData.reverse();
    const expSection = document.querySelector('#experiences .section_content');
    const documentFragment = document.createDocumentFragment();
    expData.forEach(data=>{
        const card = createCard();
        card.classList.add('exp_card');

        const headerSection = document.createElement('div');
        headerSection.classList.add('header');
        const imageDiv = document.createElement('span');
        const logo = document.createElement('img');
        logo.src = data.logo;
        logo.classList.add('header_img');
        logo.alt = data.companyName;
        imageDiv.append(logo);
        // const companyTitle = document.createElement('a');
        // companyTitle.innerText = data.companyName;
        headerSection.append(imageDiv);

        const contentSection = document.createElement('div');
        const roleDiv = document.createElement('div');
        roleDiv.innerText = data.title;
        roleDiv.classList.add('exp_card_content_title');
        const listSection = document.createElement('ul');
        const listDocumentFragment = document.createDocumentFragment();
        data.work.forEach(task=>{
            const taskList = document.createElement('li');
            taskList.innerHTML = task;
            listDocumentFragment.append(taskList);
        });
        listSection.append(listDocumentFragment);
        contentSection.append(roleDiv, listSection);
        contentSection.classList.add('exp_card_content');
        
        const footerSection = document.createElement('div');
        const span = document.createElement('span');
        span.innerText = `${data.duration} | ${data.location}`;
        footerSection.append(span);
        footerSection.classList.add('exp_card_footer');

        card.append(headerSection, contentSection, footerSection);
        documentFragment.append(card);
    });

    expSection.append(documentFragment);


}
