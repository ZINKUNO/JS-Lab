    //wap a js program for implement js dynamic web page and js graphics 
        const canvas = document.getElementById('drawingCanvas');
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let currentTool = 'draw';
        let lastX = 0;
        let lastY = 0;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000000';

        function changeColor(color) {
            document.body.style.backgroundColor = color;
        }

        function setTool(tool) {
            currentTool = tool;
            const drawBtn = document.getElementById('drawBtn');
            const eraseBtn = document.getElementById('eraseBtn');
            const status = document.getElementById('status');
            
            if (tool === 'draw') {
                drawBtn.classList.add('active');
                eraseBtn.classList.remove('active');
                canvas.classList.remove('eraser');
                status.textContent = 'Drawing Mode - Click and drag to draw!';
                ctx.globalCompositeOperation = 'source-over';
                ctx.lineWidth = 5;
            } else {
                eraseBtn.classList.add('active');
                drawBtn.classList.remove('active');
                canvas.classList.add('eraser');
                status.textContent = 'Eraser Mode - Click and drag to erase!';
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = 20;
            }
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById('status').textContent = 'Canvas cleared - Start drawing!';
        }

        function getMousePos(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }

        function startDrawing(e) {
            isDrawing = true;
            const pos = getMousePos(e);
            lastX = pos.x;
            lastY = pos.y;
        }

        function draw(e) {
            if (!isDrawing) return;

            const pos = getMousePos(e);
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();

            lastX = pos.x;
            lastY = pos.y;
        }

        function stopDrawing() {
            isDrawing = false;
        }

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });

        canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            const mouseEvent = new MouseEvent('mouseup', {});
            canvas.dispatchEvent(mouseEvent);
        });

        setTimeout(() => {
            ctx.font = '20px Outfit';
            ctx.fillStyle = '#ddd';
            ctx.textAlign = 'center';
            ctx.fillText('Draw Something Here!', canvas.width/2, canvas.height/2);
        }, 100);