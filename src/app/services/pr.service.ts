class PRService {
    private isOpen: boolean = false;

    constructor() {
        this.isOpen = false;
    }

    public triggerOpen() {
        this.isOpen = true;
        this.alert("Pull request opened!");
    }

    public triggerClose() {
        this.isOpen = false;
        this.alert("Pull request closed!");
    }

    public listenToValue() {
        // Implement your logic to listen to value changes here
        // For example, you can use an event emitter or a subject
    }

    private alert(message: string) {
        // Implement your logic to show an alert here
        // For example, you can use the browser's native alert function
        alert(message);
    }
}

export default PRService;