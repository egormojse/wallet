const teamMembers = document.querySelectorAll('.team-member');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    {
        threshold: 0.1
    }
);

teamMembers.forEach(member => {
    member.style.opacity = 0;
    member.style.transform = 'translateY(20px)';
    member.style.transition = 'all 0.6s ease-out';
    observer.observe(member);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});