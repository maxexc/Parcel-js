let good = 0;
let neutral = 0;
let bad = 0;

const updateDiagram = () => {
    const total = good + neutral + bad;
    const goodPercentage = (good / total) * 100 || 0;
    const neutralPercentage = (neutral / total) * 100 || 0;
    const badPercentage = (bad / total) * 100 || 0;

    const diagramElement = document.getElementById('diagram');
    const diagramContainer = document.querySelector('.diagram-container');
    const noticeElement = document.querySelector('.notice')

    if (total > 0) {
        noticeElement.style.opacity = 0;
        setTimeout(() => {
            noticeElement.style.display = 'none';
            diagramContainer.classList.add('show');
        }, 500);
    }

    diagramElement.style.setProperty('background',
        `conic-gradient(
            #3f8125 0% ${goodPercentage}%, 
            orange ${goodPercentage}% ${goodPercentage + neutralPercentage}%, 
            red ${goodPercentage + neutralPercentage}% ${goodPercentage + neutralPercentage + badPercentage}%, 
            transparent ${goodPercentage + neutralPercentage + badPercentage}% 100%)`
    );

    document.getElementById('total').textContent = total;
    document.getElementById('goodCount').textContent = good;
    document.getElementById('neutralCount').textContent = neutral;
    document.getElementById('badCount').textContent = bad;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('positivePercentage').textContent = `${goodPercentage.toFixed(1)}%`;

    const percentageText = document.getElementById('percentageText');
    percentageText.textContent = `${goodPercentage.toFixed(1)}%`;

    const heartFill = document.getElementById('heartFill');
    heartFill.style.transform = `scaleY(${goodPercentage / 100})`;
};

document.querySelector('.feedback-buttons').addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;

    if (target.id === 'likeButton') {
        good++;
    } else if (target.id === 'neutralButton') {
        neutral++;
    } else if (target.id === 'dislikeButton') {
        bad++;
    }
    updateDiagram();
});

updateDiagram();


