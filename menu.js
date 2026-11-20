document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    // 1. Remove active state from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // 2. Add active state to clicked button
    button.classList.add('active');
    
    // 3. Hide all menu content sections
    document.querySelectorAll('.menu-section').forEach(section => section.classList.remove('active'));
    
    // 4. Show the section linked to the clicked button
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});