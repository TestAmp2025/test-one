console.log('DOM Manipulation Demo Started');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    const mainTitle = document.getElementById('main-title');
    const demoText = document.querySelector('#demo-text');
    const changeTextBtn = document.querySelector('#change-text-btn');
    const addElementBtn = document.querySelector('#add-element-btn');
    const testList = document.querySelector('#test-list');

    console.log('Elements found:', {
        title: !!mainTitle,
        text: !!demoText,
        buttons: !!changeTextBtn,
        list: !!testList
    });

    changeTextBtn.addEventListener('click', function() {
        console.log('Change text button clicked');
        
        const messages = [
            'Text changed successfully!',
            'DOM manipulation in action!',
            'This is how dynamic content works!',
            'Perfect for automation testing!'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        demoText.textContent = randomMessage;
        demoText.className = 'highlight';
        
        // Update title as well
        mainTitle.textContent = 'DOM Updated!';
        
        console.log('Text updated to:', randomMessage);
    });

}); 