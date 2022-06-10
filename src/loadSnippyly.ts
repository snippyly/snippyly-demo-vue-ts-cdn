const loadSnippyly = (callback: () => void): void => {
    const existingScript = document.getElementById('snippylyScript');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@snippyly/sdk@1.0.39/snippyly.js';
        script.id = 'snippylyScript';
        script.type = 'module';
        document.body.appendChild(script);
        script.onload = () => {
            if (callback) {
                callback();
            }
        };
    } else {
        if (callback) {
            callback();
        }
    }
};
export default loadSnippyly;