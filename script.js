document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if(name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
    } else {
      alert(`Thanks for reaching out, ${name}!`);
      document.getElementById('contactForm').reset();
    }
  });
  