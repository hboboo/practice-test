(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/* 
    这段代码是一个自适应网页字体大小的 JavaScript 代码。它的作用是根据浏览器窗口的大小自动调整网页的字体大小，以适应不同屏幕尺寸的设备。
具体来说，这段代码会监听浏览器窗口的 resize 和 orientationchange 事件，当这些事件触发时，会重新计算并设置网页根元素（即 <html> 标签）的字体大小。计算方法是将当前浏览器窗口宽度除以 320，再乘以 20，得到的数值即为新的字体大小（单位为像素）。
这段代码还使用了 DOMContentLoaded 事件，确保在文档加载完成后再执行自适应字体大小的计算。
*/