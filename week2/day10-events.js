const clickBox   = document.getElementById('click-box');
const hoverBox   = document.getElementById('hover-box');
const resetBtn   = document.getElementById('reset-btn');
const simulateBtn= document.getElementById('simulate-btn');
const eventLog   = document.getElementById('event-log');

function log(message) {
    const line = document.createElement('div');
    line.textContent = message;
    eventLog.appendChild(line);
    // keep the newest message in view
    eventLog.scrollTop = eventLog.scrollHeight;
  }
  
  let clickCount = 0;
  clickBox.addEventListener('click', () => {
    clickCount++;
    clickBox.classList.add('clicked');
    clickBox.textContent = `Clicked ${clickCount} times!`;
    log(`Clicked the box (${clickCount})`);
  });

  hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = '#fff3cd';
    hoverBox.textContent = 'Mouse is hovering!';
    log('Mouse entered the hover box');
  });
  
  hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover over me! (Practice requirement)';
    log('Mouse left the hover box');
  });
  
  resetBtn.addEventListener('click', () => {
    clickCount = 0;
    clickBox.classList.remove('clicked');
    clickBox.textContent = 'Click me! (Practice requirement)';
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover over me! (Practice requirement)';
    eventLog.innerHTML = '';
    log('All reset!');
  });

  simulateBtn.addEventListener('click', () => {
    log('Simulating actions...');
    clickBox.click(); // triggers the click listener
    const enter = new MouseEvent('mouseenter', { bubbles: true });
    const leave = new MouseEvent('mouseleave', { bubbles: true });
    hoverBox.dispatchEvent(enter);
    setTimeout(() => hoverBox.dispatchEvent(leave), 800);
  });
  
  
  