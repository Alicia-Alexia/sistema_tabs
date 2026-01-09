function switchTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-pane');
    contents.forEach(content => {
        content.classList.add('hidden');
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'border-primary');
        
        btn.classList.remove('bg-primary', 'text-white', 'border-primary');
        btn.classList.remove('shadow-[0_0_20px_rgba(99,102,241,0.5)]');
        btn.setAttribute('aria-selected', 'false');
        btn.classList.add('bg-transparent', 'text-slate-400', 'border-slate-700');
    });

    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
        selectedContent.classList.remove('animate-fade-in');
        void selectedContent.offsetWidth; 
        selectedContent.classList.add('animate-fade-in');
    }

    const clickedBtn = event.currentTarget;
    clickedBtn.classList.remove('bg-transparent', 'text-slate-400', 'border-slate-700');
    clickedBtn.classList.add('bg-primary', 'text-white', 'border-primary');
    clickedBtn.classList.add('shadow-[0_0_20px_rgba(99,102,241,0.5)]');
    clickedBtn.setAttribute('aria-selected', 'true');
}