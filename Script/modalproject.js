var lastModal;

function changeClass(modalType) {
    document.getElementById("modal-c").className = modalType;
    document.body.classList.add("body-opened");
}

function returnBody(modalType) {
    document.body.classList.remove("body-opened");
}

function openModal(projectId) {
    window.location.hash = projectId;
    changeClass('modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClick);
}

function openModalAbout(projectId) {
    changeClass('about-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickAbout);
}

function openModalContact(projectId) {
    changeClass('contact-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickContact);
}

function closeModal() {
    if (window.location.hash) {
        history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClick);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalAbout() {
    var modal = document.getElementById("myModal");
    returnBody();

    window.removeEventListener('click', outsideClickAbout);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalContact() {
    var modal = document.getElementById("myModal");
    returnBody();

    window.removeEventListener('click', outsideClickContact);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function outsideClick(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModal();
    }
}

function outsideClickAbout(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function outsideClickContact(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'about':
            videoId = '';
            projectContent = `
                            <div class="about-title-bg">
                                <h2 class="project-title">About me</h2>
                            </div>
                         

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                                        🕹️ Hey there, I'm <strong>Đào Trọng Nghĩa</strong> (born 20/05/2002), a dedicated Game Developer specializing in Cocos Creator and TypeScript. I have a strong passion for developing high-quality Playable Ads and interactive experiences that captivate users and run smoothly on any mobile device.
                                    </p>
                                    <p>
                                        🚀 I love tackling complex technical optimization challenges, crafting micro-animations, and learning new game tech stacks. If you're looking for a motivated and detail-oriented developer to build engaging web games and ads, let's connect!
                                    </p>
                                </div>
                            </div>

                            <div class="project-stack">
                                <h2>Stack</h2>
                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/cocos.png" alt="Cocos Creator">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/javascript.png" alt="JavaScript">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/typescript.png" alt="TypeScript">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/htmllanguage.png" alt="HTML5 / WebGL">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModalAbout()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'contact':
            videoId = '';
            projectContent = `
                            <div class="contact-title-bg">
                                <h2 class="project-title">Contact</h2>
                            </div>
                         

                            <div class="contact-description-bg">
                                <div class="contact-description">

                                    <a target="_blank" class="contact-icon" style="margin-left: 6px">
                                        <img src="Images/email.png">
                                    </a>

                                    <div class="contact-text">
                                    <p>
                                        nghiadao200502@gmail.com
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div class="phone-description-bg">
                                <div class="contact-description">

                                    <a target="_blank" class="contact-icon" style="margin-left: 6px">
                                        <img src="Images/phone.png">
                                    </a>

                                    <div class="contact-text">
                                    <p>
                                        0978201691
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-close">
                                <span onclick="closeModalContact()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'carblast':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Car Blast</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/CarBlast.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A fast-paced matching game where players tap to blast cars and clear traffic blocks.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'catstrack':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Cat Stack</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/CatStrack.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A cute physics puzzle where you stack adorable cats to reach target heights.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'coffeecrayzy':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Coffee Crazy</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/CoffeeCrayzy.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A fast-paced sorting simulator where players serve and mix coffee recipes.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'dreamharvest':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Dream Harvest</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/DreamHarvest.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A relaxing puzzle game where players merge crops to harvest their dream farm.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'drinksort':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Drink Sort</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/DrinkSort.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A classic color-sorting puzzle game where players arrange colorful drinks.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'knitaway':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Knit Away</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/KnitAway.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A calming sorting game where players unthread and organize colorful yarn.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'satisstory':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">SatisStory</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/SatisStory.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A satisfying compilation of relaxing daily tidying and organization mini-games.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'screwland_1':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Screw Land</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/ScrewLand_1.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A challenging 3D mechanical puzzle where players strategically unscrew bolts.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'sheepaway':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Sheep Away</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/SheepAway.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A fun puzzle game where players guide lost sheep back to their pens safely.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'tidymaster_1':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Tidy Master</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/TidyMaster_1.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A satisfying packing game where players unpack and organize messy rooms.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
    }


    return projectContent;
}

// Check for direct links on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let projectToOpen = urlParams.get('project') || urlParams.get('p');

    // Or check URL hash (e.g., #cakejamout)
    if (!projectToOpen && window.location.hash) {
        const hashVal = window.location.hash.substring(1);
        if (hashVal !== 'projects' && hashVal !== 'about-me' && hashVal !== 'contact') {
            projectToOpen = hashVal;
        }
    }

    if (projectToOpen) {
        // Delay opening modal slightly to ensure DOM gets ready
        setTimeout(() => {
            openModal(projectToOpen);
        }, 150);
    }
});
