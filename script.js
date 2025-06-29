const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');
const buttonContainer = document.getElementById('buttonContainer');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = 'rgba(0,0,0,0.8)';
  });

  btn.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = '';
  });

  btn.addEventListener('click', () => {
    // Hide buttons
    buttonContainer.style.display = 'none';
    // Show corresponding section
    const section = document.getElementById(btn.dataset.section);
    section.style.display = 'block';
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    sections.forEach(sec => sec.style.display = 'none');
    buttonContainer.style.display = 'flex';
    document.body.style.backgroundColor = '';
  });
});



