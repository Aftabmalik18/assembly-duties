const students = [
    "Aarohi",
    "Adiyan",
    "Anas",
    "Aryan",
    "Kranti",
    "Darsh",
    "Dhairya",
    "Sarthak",
    "Utkarsh",
    "Aditya",
    "Alishba",
    "Dhiraj",
    "Niraj",
    "Afif",
    "Amanuddin",
    "Farhanuddin",
    "Ansh",
    "Swaraj",
    "Aarohi",
    "Naman",
    "Sanchi",
    "Amaan",
    "Iram",
    "Zara",
    "Shravani",
    "Swara",
    "Ishita",
    "Tareq",
    "Zainab"
];

const duties = [
    "Anchors",
    "Meditation",
    "Prayer",
    "Pledge",
    "Preamble",
    "School anthem",
    "Significance of the Day",
    "Thought of the Day",
    "G.K/News/Skit",
    "Speeches",
    "National Anthem",
    "Assembly Disperse"
];

document.getElementById('generateBtn').addEventListener('click', generateDuties);

function generateDuties() {
    const shuffledStudents = shuffleArray(students);
    const dutiesList = document.getElementById('dutiesList');
    dutiesList.innerHTML = '';

    duties.forEach((duty, index) => {
        const dutyItem = document.createElement('div');
        dutyItem.className = 'duty-item';
        dutyItem.textContent = `${duty}: ${shuffledStudents[index]}`;
        dutiesList.appendChild(dutyItem);
    });

    const regenerateBtn = document.createElement('button');
    regenerateBtn.textContent = 'Re-generate Duties';
    regenerateBtn.addEventListener('click', generateDuties);
    dutiesList.appendChild(regenerateBtn);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
