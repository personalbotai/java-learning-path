// CheerpJ Stub - used when full CheerpJ cannot be loaded from CDN
// This stub provides minimal API and shows instructions to user
(function() {
    console.warn('[CheerpJ Stub] Using stub because CheerpJ failed to load from CDN.');
    window.CheerpJ = {
        compileString: function(code, className, callback) {
            console.error('[CheerpJ Stub] Cannot compile: CheerpJ runtime not available.');
            // Simulate async callback with error
            setTimeout(() => {
                callback(null);
            }, 100);
        },
        runMain: function(className, args, callbacks) {
            console.error('[CheerpJ Stub] Cannot run: CheerpJ runtime not available.');
            if (callbacks && callbacks.error) {
                callbacks.error('CheerpJ tidak dapat dimuat. Mohon matikan ad-blocker, cek firewall, atau gunakan VPN. Setelah itu, refresh halaman.');
            } else {
                console.error('CheerpJ runtime tidak tersedia.');
            }
            if (callbacks && callbacks.done) {
                callbacks.done();
            }
        }
    };
    console.log('[CheerpJ Stub] Installed. Run will fail with helpful message.');
})();
