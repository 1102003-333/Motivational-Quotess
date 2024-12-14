const quotes = [
   {
    x:'Do not take life too seriously. You will not get out alive.',
    y:'Elbert Hubbard',},

    {
    x:  'It\'s not what happens to you, but how you react to it that matters.',
     y:'Epictetus'},

  {
    x:'The best revenge is massive success.',
    y:"Frank Sinatra"},
        
  {
   x: 'Beware of what you become in pursuit of what you want.',
   y: 'Jim Rohn',},
            
  {   
   x: 'Resentment is like drinking poison and waiting for your enemies to die.',
   y:'Nelson Mandela'},
        
 { 
    x:'You miss 100% of the shots you don\'t take.',
    y:'Wayne Gretzy'},
                    
                                                            

];

 function addquotes() {
    const randomIndex = Number.parseInt(Math.random()* quotes.length + 1);
    document.getElementById('xquote').textContent = quotes[randomIndex].x;
    document.getElementById('yquote').textContent = quotes[randomIndex].y;
};

const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞 Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});
