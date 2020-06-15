import ejs from 'ejs';

const data = 
{
  links:
    [
      {
        url: 'https://google.com',
        text: 'Google'
      }
    ]
};

ejs.renderFile('index.ejs', data)
  .then(console.log);
