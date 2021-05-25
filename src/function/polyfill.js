if (!String.prototype.trim) {
    (function() {
        String.prototype.trim = function() {
            // remove BOM and non-breaking gap
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    })();
}