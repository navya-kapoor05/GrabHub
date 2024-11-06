function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert('Promo code ${code} copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy code', err);
    });
}