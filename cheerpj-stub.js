// CheerpJ Stub - used when full CheerpJ cannot be loaded from CDN
// This stub provides minimal API and shows helpful instructions to user
(function() {
    console.warn('[CheerpJ Stub] Using stub because CheerpJ failed to load from CDN.');
    window.CheerpJ = {
        compileString: function(code, className, callback) {
            console.error('[CheerpJ Stub] Cannot compile: CheerpJ runtime not available.');
            // Simulate async callback failure
            setTimeout(() => {
                const error = `CheerpJ runtime tidak dapat dimuat.

Instruksi untuk memperbaiki:
1. Nonaktifkan ad-blocker (di settings browser atau ekstensi)
2. Cek firewall/proxy yang memblokir domain CDN
3. Coba gunakan VPN jika di jaringan terblokir
4. Setelah perubahan, refresh halaman ini.

Alternatif: download CheerpJ offline dan host secara lokal (lihat dokumentasi).`;
                callback && callback(null);
                // Also show in a visible alert if there is a current output box
                if (window.showCheerpJError) {
                    window.showCheerpJError(error);
                } else {
                    alert(error);
                }
            }, 100);
        },
        runMain: function(className, args, callbacks) {
            console.error('[CheerpJ Stub] Cannot run: CheerpJ runtime not available.');
            if (callbacks && callbacks.error) {
                callbacks.error('CheerpJ runtime tidak tersedia. Silakan matikan ad-blocker, cek firewall, atau gunakan VPN, lalu refresh halaman.');
            }
            if (callbacks && callbacks.done) callbacks.done();
        }
    };
    console.log('[CheerpJ Stub] Installed. Run will fail with helpful message.');
})();
