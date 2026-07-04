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
        case 'satis_v25':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Satis V25</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/Satis_V25.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A satisfying organization game level where players tidy up and sort objects to relieve stress.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'satis_v28':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Satis V28</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/Satis_V28.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>An engaging sorting puzzle level focused on arranging items in a neat, satisfying order.</p>
                                </div>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'satis_v35':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Satis V35</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/Satis_V35.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A challenging sorting and packing puzzle where players must organize messy spaces efficiently.</p>
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
