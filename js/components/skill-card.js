class SkillCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        const skill = this.getAttribute('skill');
        const level = this.getAttribute('level');
        const percentage = this.getLevelPercentage(level);

        this.shadowRoot.innerHTML = `
            <style>
                p {
                    font-size: 1rem
                    font-weight: bold;
                    margin-bottom: 0.313rem;
                    display: flex;
                    justify-content: left;
                    gap: 0.5rem;
                    color: white;
                }
                .icon {
                    color: #C82D6C;
                    width: 1.12rem
                }

                .progress-bar {
                    height: 0.25rem;
                    background-color: #C82D6C;
                    width: ${percentage}%;
                    transform: scaleX(0);
                    transform-origin: left;
                    animation: loadLevel 2s ease-in-out forwards;
                }

                @keyframes loadLevel {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }
                @media (max-width: 480px) {
                    p {
                        font-size: small;
                    }
                    .skill-container {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            </style>
            <article>
                <p>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#193461" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                    ${skill}
                </p>
                <section>
                    <div class="progress-bar" />
                </section>
            </article>
        `;
    }

    getLevelPercentage(level) {
        const levels = {
            "Beginner": 25,
            "Intermidiate": 50,
            "Advanced": 75,
            "Expert": 100
        };

        return levels[level] ?? 0;
    }
};

customElements.define('skill-card', SkillCard);
