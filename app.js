
document.getElementById('runLoops').addEventListener('click', () => {
    const out = document.getElementById('loopOut');
    out.innerHTML = '';

    let txt = '<b>for loop:</b> ';
    for (let i = 1; i <= 5; i++) txt += i + ' ';
    out.innerHTML += txt + '<br>';


    let j = 5, w = '';
    while (j > 0) { w += j-- + ' '; }
    out.innerHTML += `<b>while loop:</b> ${w}<br>`;

    // for…of
    const colors = ['red', 'green', 'blue'];
    let c = '';
    for (const color of colors) c += color + ' ';
    out.innerHTML += `<b>for…of loop:</b> ${c}<br>`;

    // forEach
    let sum = 0;
    [1, 2, 3, 4].forEach(n => sum += n);
    out.innerHTML += `<b>forEach sum:</b> ${sum}<br>`;

    console.log('All loops finished – check page and console.');
});

document.getElementById('btnVanilla').addEventListener('click', () => {
    alert('JS button clicked!');
});
document.getElementById('txt').addEventListener('keyup', e => {
    console.log('Key pressed:', e.key);
});

$('#btnjQuery').on('click', () => {
    $('#box').fadeToggle(600);
});


const iframe = document.getElementById('frm');
document.getElementById('loadIframe').addEventListener('click', () => {
    const content = `
    <html>
      <head>
        <style>
          body {
            font-family: sans-serif;
            padding: 20px;
            background: black;   
            color: aquamarine;
          }
        </style>
      </head>
      <body>
        <h3>I am the iframe</h3>
        <p id="msg">Waiting for parent message…</p>
        <script>
          window.addEventListener('message', e => {
            document.getElementById('msg').textContent = 'Parent says: ' + e.data;
          });
        <\/script>
      </body>
    </html>`;
    iframe.srcdoc = content;
});


document.getElementById('sendMsg').addEventListener('click', () => {
    if (iframe.contentWindow) {
        iframe.contentWindow.postMessage('Hello from parent page!', '*');
    } else {
        alert('Load the iframe first!');
    }
});
