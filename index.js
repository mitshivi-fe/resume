let appData = {};
const navList = document.querySelectorAll('.nav-list');
fetch('./assets/data.json').then(res => res.json()).then((res) => {
    appData = res.data;
    addDataInSkillsSection();
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
