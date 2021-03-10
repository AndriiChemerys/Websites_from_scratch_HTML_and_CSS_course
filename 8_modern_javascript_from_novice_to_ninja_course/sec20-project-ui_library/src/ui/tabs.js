class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelector('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e=>{
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e){
        // remove current active classes
        this.tabs.forEach(tab=>tab.classList.remove('active'));
        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        // remove current active classes from content
        this.container.querySelectorAll('.content').forEach(item=>{
            item.classList.remove('active');
        });
        // add new active class to content
    }
}