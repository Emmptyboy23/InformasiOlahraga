// script.js
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'scale(1.1)'; /* add scale effect on hover */
    });

    member.addEventListener('mouseout', () => {
        member.style.transform = 'scale(1)'; /* reset scale effect on mouseout */
    });
});