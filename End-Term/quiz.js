//using event listener, write a program to check if the user has pressed any cpecial character or not

window.addEventListener('keydown', (event) => {
  
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;':\",./<>?`~";

  if (specialCharacters.includes(event.key)) {
    console.log(⁠ Yes! "${event.key}" is a special character. ⁠);
  } else {
    console.log(⁠ No, "${event.key}" is not a special character. ⁠);
  }
  
});