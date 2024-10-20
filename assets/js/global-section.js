async function loadComponents() {
    await import('./navbar-component.js');
    await import('./ComponentB.js');
    await import('./ComponentC.js');
    await import('./ComponentD.js');
}

// Call the function to load the components
loadComponents();