// 阿里团队高清方案(比如750px宽度的设计稿上有一个btn的高度为80px,宽度为120px,高清方案默认1rem=100px,那么 btn的宽度就设置为:).btn {width:0.8rem;height:1.2rem}；其余的根据需要换成flex或者百分比；如果元素的宽度超过效果图宽度的一半（效果图宽为640或750），果断使用百分比宽度，或者flex布局 )
// 需要时引入即可（本项目已采用固定像素布局，就不再引入此文件了，不然布局会错乱）
	! function(e) {
		function t(a) {
			if(i[a]) return i[a].exports;
			var n = i[a] = {
				exports: {},
				id: a,
				loaded: !1
			};
			return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
		}
		var i = {};
		return t.m = e, t.c = i, t.p = "", t(0)
	}([function(e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = window;
		t["default"] = i.flex = function(e, t) {
			var a = e || 100,
				n = t || 1,
				r = i.document,
				o = navigator.userAgent,
				d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
				l = o.match(/U3\/((\d+|\.){5,})/i),
				c = l && parseInt(l[1].split(".").join(""), 10) >= 80,
				p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
				s = i.devicePixelRatio || 1;
			p || d && d[1] > 534 || c || (s = 1);
			var u = 1 / s,
				m = r.querySelector('meta[name="viewport"]');
			m || (m = r.createElement("meta"), m.setAttribute("name", "viewport"), r.head.appendChild(m)), m.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u + ",minimum-scale=" + u), r.documentElement.style.fontSize = a / 2 * s * n + "px"
		}, e.exports = t["default"]
	}]);
	flex(100, 1);
	// 根据设备的dpr动态设置html 的 font-size，如果dpr=1(如电脑端），则html的font-size为50px，此时 1rem = 50px如果dpr=2(如iphone 5 和 6），则html的font-size为100px，此时 1rem = 100px如果dpr=3(如iphone 6 sp），则html的font-size为150px，此时 1rem = 150px如果dpr为其他值，即便不是整数，如3.4 , 也是一样直接将dpr 乘以 50 。
	// 	再来说说效果图，一般来讲，我们的效果图宽度要么是640，要么是750，无论哪一个，它们对应设备的dpr=2，此时，1 rem = 50 × 2 = 100px。这也就是为什么高清方案默认1rem = 100px。而将1rem默认100px也是好处多多，可以帮你快速换算单位，比如在750宽度下的效果图，某元素宽度为53px，那么css宽度直接设为53/100=0.53rem了。
	// 然而极少情况下，有设计师将效果图宽定为1242px，因为他手里只有一个iphone 6 sp (dpr = 3)，设计完效果图刚好可以在他的iphone 6 sp里查看调整。一切完毕之后，他将这个效果图交给你来切图。由于这个效果图对应设备的dpr=3，也就是1rem = 50 × 3 = 150px。所以如果你量取了一个宽度为90px的元素，它的css宽度应该为 90/150=0.6rem。由于咱们的高清方案默认1rem=100px，为了还原效果图，你需要这样换算。当然，一个技巧就是你可以直接修改咱们的高清方案的默认设置。在代码的最后 你会看到 flex(100, 1) ，将其修改成flex(66.66667, 1)就不用那么麻烦的换算了，此时那个90px的直接写成0.9rem就可以了。
	// 有效解决移动端真实1px问题



// 另一个简单的rem自适应布局，页面宽度是固定的而显示屏（比如手机）屏幕宽度是不固定的，因此页面缩放比被动自适应(不如上面阿里的rem自适应布局优秀)
// (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       var clientWidth = docEl.clientWidth
//       if (!clientWidth) return
//       docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
//     }
//   if (!doc.addEventListener) return
//   win.addEventListener(resizeEvt, recalc, false)
//   doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)