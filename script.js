//We will create an Array containing all the articles + who said them
/*                          Articles site
https://www.goodreads.com/quotes?fbclid=IwZXh0bgNhZW0CMTAAAR3Yk_C-7XwJy4oBUWhpuxOCWI_jBUkSTQHhPfaEkEVWdJma1VXcTaZGuuM_aem_ZmFrZWR1bW15MTZieXRlcw
*/


var quote = [
  {
    'quote': " “Be yourself; everyone else is already taken.” ",
    'auther': "― Oscar Wilde",
  },

  {
    'quote':
      " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    'auther': "― Marilyn Monroe",
  },

  {
    'quote': " “So many books, so little time.” ",
    'auther': "― Frank Zappa",
  },

  {
    'quote':
      " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    'auther': "― Albert Einstein",
  },

  {
    'quote': " “A room without books is like a body without a soul.” ",
    'auther': "― Marcus Tullius Cicero",
  },

  {
    'quote':
      " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    'auther': "― Bernard M. Baruch",
  },

  {
    'quote':
      " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    'auther': "― Bernard M. Baruch",
  },

  {
    'quote':
      " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
    'auther': "― Dr. Seuss",
  },

  {
    'quote': " “You only live once, but if you do it right, once is enough.” ",
    'auther': "― Mae West",
  },

  {
    'quote': " “Be the change that you wish to see in the world.” ",
    'auther': "― Mahatma Gandhi",
  },

  {
    'quote':
      " “In three words I can sum up everything I've learned about life: it goes on.” ",
    'auther': "― Robert Frost",
  },

  {
    'quote': " “If you tell the truth, you don't have to remember anything.” ",
    'auther': "― Mark Twain",
  },

  {
    'quote':
      " “To live is the rarest thing in the world. Most people exist, that is all.” ",
    'auther': "― Oscar Wilde",
  },

  {
    'quote': " “Without music, life would be a mistake.” ",
    'auther': "― Friedrich Nietzsche, Twilight of the Idols",
  },

  {
    'quote':
      " “It is better to be hated for what you are than to be loved for what you are not.” ",
    'auther': "― Andre Gide, Autumn Leaves",
  },
];


function Taking() {
  var randomNumber = Math.floor(Math.random() * quote.length);
  console.log(randomNumber);

  document.getElementById("quote").innerHTML = quote[randomNumber].quote;
  document.getElementById("author").innerHTML = quote[randomNumber].author;
}
