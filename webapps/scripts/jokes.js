const jokes = [
    {
        text: 'Scammer got scammed',
        author: 'by Kto-to'
    },
    {
        text: 'Why im here?',
        author: 'by Kto-to'
    },
    {
        text: 'o helo moderator',
        author: 'by admindiscord'
    },
    {
        text: 'free bobuk',
        author: 'by Roblox'
    },
    {
        text: 'Toilet paper plays an important role in my life.',
        author: 'by short-funny.com'
    }

]

function getJoke() {
    const number = Math.floor(Math.random() * jokes.length);

    document.getElementById('jokesNum').innerHTML = number + 1;
    document.getElementById('jokesText').innerHTML = jokes[number]['text']
    document.getElementById('authorText').innerHTML = jokes[number]['author']
}