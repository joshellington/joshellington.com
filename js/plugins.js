
// usage: log('inside coolFunc', this, arguments);
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});




/*Please JS, Jordan Checkman 2014, Checkman.io, MIT Liscense, Have fun.*/
(function(e){"use strict";function t(){function i(e,t){return Math.floor(Math.random()*(t-e+1))+e}function s(e,t){return Math.random()*(t-e)+e}function o(e,t,n){if(e<t){e=t}else if(e>n){e=n}return e}function u(t,n){switch(t){case"hex":for(var r=0;r<n.length;r++){n[r]=e.HSV_to_HEX(n[r])}break;case"rgb":for(var r=0;r<n.length;r++){n[r]=e.HSV_to_RGB(n[r])}break;case"rgb-string":for(var r=0;r<n.length;r++){var i=e.HSV_to_RGB(n[r]);n[r]="rgb("+i.r+","+i.g+","+i.b+")"}break;case"hsv":break;default:console.log("Format not recognized.");break}return n}function a(e){var t={};for(var n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}return t}var e={};var t={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgrey:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",grey:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgrey:"D3D3D3",lightgreen:"90EE90",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",rebeccapurple:"663399",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"};var n={hue:null,saturation:null,value:null,base_color:"",greyscale:false,grayscale:false,golden:true,full_random:false,colors_returned:1,format:"hex"};var r={scheme_type:"analogous",format:"hex"};e.NAME_to_HEX=function(e){if(e in t){return t[e]}else{console.log("Color name not recognized.")}};e.NAME_to_HSV=function(t){return e.HEX_to_RGB(e.NAME_to_HEX(t))};e.NAME_to_HSV=function(t){return e.HEX_to_HSV(e.NAME_to_HEX(t))};e.HEX_to_RGB=function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,n,r){return t+t+n+n+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null};e.RGB_to_HEX=function(e){return"#"+((1<<24)+(e.r<<16)+(e.g<<8)+e.b).toString(16).slice(1)};e.HSV_to_RGB=function(e){var t,n,r;var i=e.h/360;var s=e.s;var o=e.v;var u=Math.floor(i*6);var a=i*6-u;var f=o*(1-s);var l=o*(1-a*s);var c=o*(1-(1-a)*s);switch(u%6){case 0:t=o,n=c,r=f;break;case 1:t=l,n=o,r=f;break;case 2:t=f,n=o,r=c;break;case 3:t=f,n=l,r=o;break;case 4:t=c,n=f,r=o;break;case 5:t=o,n=f,r=l;break}return{r:Math.floor(t*255),g:Math.floor(n*255),b:Math.floor(r*255)}};e.RGB_to_HSV=function(e){var t,n,r;var i=0;var s=0;var o=0;t=e.r/255;n=e.g/255;r=e.b/255;var u=Math.min(t,Math.min(n,r));var a=Math.max(t,Math.max(n,r));if(u==a){o=u;return{h:0,s:0,v:o}}var f=t==u?n-r:r==u?t-n:r-t;var l=t==u?3:r==u?1:5;i=60*(l-f/(a-u));s=(a-u)/a;o=a;return{h:i,s:s,v:o}};e.HSV_to_HEX=function(t){return e.RGB_to_HEX(e.HSV_to_RGB(t))};e.HEX_to_HSV=function(t){return e.RGB_to_HSV(e.HEX_to_RGB(t))};e.make_scheme=function(e,t){function f(e){return{h:e.h,s:e.s,v:e.v}}var n=a(r);if(t!=null){for(var i in t){if(t.hasOwnProperty(i)){n[i]=t[i]}}}var s=[e];switch(n.scheme_type.toLowerCase()){case"monochromatic":case"mono":for(var l=1;l<=2;l++){var c=f(e);var h=c.s+.1*l;h=o(h,0,1);var p=c.v+.1*l;p=o(p,0,1);c.s=h;c.v=p;s.push(c)}for(var l=1;l<2;l++){var c=f(e);var h=c.s-.1*l;h=o(h,0,1);var p=c.v-.1*l;p=o(p,0,1);c.s=h;c.v=p;s.push(c)}break;case"complementary":case"complement":var c=f(e);c.h+=180;if(c.h>360){c.h-=360}s.push(c);break;case"split-complementary":case"split-complement":case"split":var c=f(e);c.h+=165;if(c.h>360){c.h-=360}s.push(c);var c=f(e);c.h-=165;if(c.h<0){c.h+=360}s.push(c);break;case"double-complementary":case"double-complement":case"double":var c=f(e);c.h+=180;if(c.h>360){c.h-=360}s.push(c);var c=f(e);c.h+=30;if(c.h>360){c.h-=360}var d=f(c);s.push(c);d.h+=180;if(d.h>360){d.h-=360}s.push(d);break;case"analogous":case"ana":for(var l=1;l<=5;l++){var c=f(e);c.h+=20*l;if(c.h>360){c.h-=360}s.push(c)}break;case"triadic":case"triad":case"tri":for(var l=1;l<3;l++){var c=f(e);c.h+=120*l;if(c.h>360){c.h-=360}s.push(c)}break;default:console.log("Color scheme not recognized.");break}u(n.format.toLowerCase(),s);return s};e.make_color=function(r){var a=[];var f={};for(var l in n){if(n.hasOwnProperty(l)){f[l]=n[l]}}if(r!=null){for(var l in r){if(r.hasOwnProperty(l)){f[l]=r[l]}}}var c;if(f.base_color.length>0){c=t[f.base_color.toLowerCase()];c=e.HEX_to_HSV(c)}for(var h=0;h<f.colors_returned;h++){var p=i(0,360);var d,v,m;if(c!=null){d=i(c.h-5,c.h+5);v=s(.4,.85);m=s(.4,.85);a.push({h:d,s:v,v:m})}else{if(f.greyscale==true||f.grayscale==true){d=0}else if(f.golden==true){d=p+p/.618033988749895}else if(f.hue==null||f.full_random==true){d=p}else{d=o(f.hue,0,360)}if(f.greyscale==true||f.grayscale==true){v=0}else if(f.full_random==true){v=s(0,1)}else if(f.saturation==null){v=.4}else{v=o(f.saturation,0,1)}if(f.full_random==true){m=s(0,1)}else if(f.greyscale==true||f.grayscale==true){m=s(.15,.75)}else if(f.value==null){m=.75}else{m=o(f.value,0,1)}a.push({h:d,s:v,v:m})}}u(f.format.toLowerCase(),a);if(a.length===1){return a[0]}else{return a}};return e}if(typeof Please=="undefined"){e.Please=t()}})(window)


// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.string)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function() {
                // Start typing
                self.typewrite(self.strings[self.arrayPos], self.strPos);
            }, self.startDelay);
        }

        ,
        build: function() {
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;

                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {

                        /* call before functions if applicable */
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        }

        ,
        backspace: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;
                        self.init();
                    } else
                        self.typewrite(self.strings[self.arrayPos], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }

        // Start & Stop currently not working

        // , stop: function() {
        //     var self = this;

        //     self.stop = true;
        //     clearInterval(self.timeout);
        // }

        // , start: function() {
        //     var self = this;
        //     if(self.stop === false)
        //        return;

        //     this.stop = false;
        //     this.init();
        // }

        // Reset and rebuild the element
        ,
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);


var ColorMix;ColorMix=function(){"use strict";var e,r,o;return o=[{reference:0,color:{red:0,green:0,blue:0}},{reference:100,color:{red:255,green:255,blue:255}}],e=function(e,r,o){return this.red=0,this.green=0,this.blue=0,void 0!==e&&(void 0!==r&&void 0!==o?(this.setRed(parseInt(e)),this.setGreen(parseInt(r)),this.setBlue(parseInt(o))):"string"==typeof e&&this.fromHex(e)),this},r=function(){return{RGB:function(e,r,o){if(void 0===e||void 0===r||void 0===o)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.RGB()"';return{red:isNaN(parseInt(e))?0:parseInt(e),green:isNaN(parseInt(r))?0:parseInt(r),blue:isNaN(parseInt(o))?0:parseInt(o)}},XYZ:function(e,r,o){if(void 0===e||void 0===r||void 0===o)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.XYZ()"';return{x:isNaN(parseFloat(e))?0:parseFloat(e),y:isNaN(parseFloat(r))?0:parseFloat(r),z:isNaN(parseFloat(o))?0:parseFloat(o)}},HSL:function(e,r,o){if(void 0===e||void 0===r||void 0===o)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.HSL()"';return{hue:isNaN(parseInt(e))?0:parseInt(e),sat:isNaN(parseInt(r))?0:parseInt(r),lig:isNaN(parseInt(o))?0:parseInt(o)}},Lab:function(e,r,o){if(void 0===e||void 0===r||void 0===o)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.Lab()"';return{L:isNaN(parseFloat(e))?0:parseFloat(e),a:isNaN(parseFloat(r))?0:parseFloat(r),b:isNaN(parseFloat(o))?0:parseFloat(o)}},RGBtoXYZ:function(e,r,o){var t,i,n,a;if(void 0!==e&&void 0!==r&&void 0!==o)t=new this.RGB(e,r,o);else{if(void 0===e||"object"!=typeof e||void 0===e.red||void 0===e.green||void 0===e.blue)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.RGBtoXYZ()".';t=new this.RGB(e.red,e.green,e.blue)}return a=parseFloat(t.red/255),n=parseFloat(t.green/255),i=parseFloat(t.blue/255),a=100*(a>.04045?Math.pow((a+.055)/1.055,2.4):a/=12.92),n=100*(n>.04045?Math.pow((n+.055)/1.055,2.4):n/=12.92),i=100*(i>.04045?Math.pow((i+.055)/1.055,2.4):i/=12.92),new this.XYZ(.4124*a+.3576*n+.1805*i,.2126*a+.7152*n+.0722*i,.0193*a+.1192*n+.9505*i)},XYZtoRGB:function(e,r,o){var t,i,n,a,s,l,d;if(void 0!==e&&void 0!==r&&void 0!==o)t=new this.XYZ(e,r,o);else{if(void 0===e||"object"!=typeof e||void 0===e.x||void 0===e.y||void 0===e.z)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.XYZtoRGB()".';t=new this.XYZ(e.x,e.y,e.z)}return s=t.x/100,l=t.y/100,d=t.z/100,a=3.2406*s+-1.5372*l+d*-.4986,n=s*-.9689+1.8758*l+.0415*d,i=.0557*s+l*-.204+1.057*d,a=255*(a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a*=12.92),n=255*(n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92),i=255*(i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92),new this.RGB(Math.round(a),Math.round(n),Math.round(i))},RGBtoHSL:function(e,r,o){var t,i,n,a,s,l,d,h,c,u,p;if(void 0!==e&&void 0!==r&&void 0!==o)n=new this.RGB(e,r,o);else{if(void 0===e||"object"!=typeof e||void 0===e.red||void 0===e.green||void 0===e.blue)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.RGBtoXYZ()".';n=new this.RGB(e.red,e.green,e.blue)}if(u=n.red/255,d=n.green/255,s=n.blue/255,h=Math.max(u,d,s),c=Math.min(u,d,s),i=(h+c)/2,h===c)t=a=0;else{switch(l=h-c,a=i>.5?l/(2-h-c):l/(h+c),h){case"red":t=(d-s)/l+(null!=(p=s>d)?p:{6:0});break;case"green":t=(s-u)/l+2;break;case"blue":t=(u-d)/l+4}t/=6}return new this.HSL(Math.floor(360*t),Math.floor(100*a),Math.floor(100*i))},XYZtoLab:function(e,r,o){var t,i,n,a;if(void 0!==e&&void 0!==r&&void 0!==o)t=new this.XYZ(e,r,o);else{if(void 0===e||"object"!=typeof e||void 0===e.x||void 0===e.y||void 0===e.z)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.XYZtoLab()".';t=new this.XYZ(e.x,e.y,e.z)}return i=t.x/95.047,n=t.y/100,a=t.z/108.883,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,new this.Lab(116*n-16,500*(i-n),200*(n-a))},LabtoXYZ:function(e,r,o){var t,i,n,a;if(void 0!==e&&void 0!==r&&void 0!==o)t=new this.Lab(e,r,o);else{if(void 0===e||"object"!=typeof e||void 0===e.L||void 0===e.a||void 0===e.b)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.LabtoXYZ()".';t=new this.Lab(e.L,e.a,e.b)}return n=(t.L+16)/116,i=t.a/500+n,a=n-t.b/200,n=Math.pow(n,3)>.008856?Math.pow(n,3):(n-16/116)/7.787,i=Math.pow(i,3)>.008856?Math.pow(i,3):(i-16/116)/7.787,a=Math.pow(a,3)>.008856?Math.pow(a,3):(a-16/116)/7.787,new this.XYZ(95.047*i,100*n,108.883*a)},RGBtoLab:function(e,r,o){if(void 0===e||void 0===r||void 0===o)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.RGBtoLab()"';return this.XYZtoLab(this.RGBtoXYZ(e,r,o))},LabtoRGB:function(e,r,o){if(void 0===e||void 0===r||void 0===o)throw'Invalid parameter(s) provided for "ColorMix.ColorSpace.LabtoRGB()"';return this.XYZtoRGB(this.LabtoXYZ(e,r,o))}}}(),e.prototype={fromHex:function(e){var r,o,t;return e=String(e)||"",e.length>0?("#"===e[0]&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=parseInt(e.slice(0,2),16),o=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16),this.setRed(isNaN(t)?0:t),this.setGreen(isNaN(o)?0:o),this.setBlue(isNaN(r)?0:r)):(this.setRed(0),this.setGreen(0),this.setBlue(0)),this},setRed:function(e){return void 0!==e&&(this.red=Math.min(255,Math.max(0,parseInt(e)))),this},getRed:function(){return this.red},setGreen:function(e){return void 0!==e&&(this.green=Math.min(255,Math.max(0,parseInt(e)))),this},getGreen:function(){return this.green},setBlue:function(e){return void 0!==e&&(this.blue=Math.min(255,Math.max(0,parseInt(e)))),this},getBlue:function(){return this.blue},toString:function(e){var r;switch(e){case"rgb":return"rgb("+this.red+", "+this.green+", "+this.blue+")";case"rgba":return"rgba("+this.red+", "+this.green+", "+this.blue+", 1)";case"hsl":return r=ColorMix.ColorSpace.RGBtoHSL(this.red,this.green,this.blue),"hsl("+r.hue+", "+r.sat+"%, "+r.lig+"%)";case"hsla":return r=ColorMix.ColorSpace.RGBtoHSL(this.red,this.green,this.blue),"hsla("+r.hue+", "+r.sat+"%, "+r.lig+"%, 1)";default:return"#"+((1<<24)+(this.red<<16)+(this.green<<8)+this.blue).toString(16).slice(1)}},useAsBackground:function(e){var r,o,t;if("object"==typeof e&&null!==e)e.css&&e.css("background-color","rgb("+this.red+", "+this.green+", "+this.blue+")");else if(e=String(e),e.length>0)if(void 0!==window.jQuery)window.jQuery(e).css("background-color","rgb("+this.red+", "+this.green+", "+this.blue+")");else{if("string"==typeof e)switch(e[0]){case"#":o=document.getElementById(e);break;case".":if(document.getElementsByClassName)o=document.getElementsByClassName(e);else for(o=[],r=document.getElementsByTagName("*"),t=r.length;t--;)r[t].className===e.slice(1)&&o.push(r[t])();break;default:o=document.getElementsByTagName(e)}for(t=o.length;t--;)(o[t].style["background-color"]="rgb("+this.red+", "+this.green+", "+this.blue+")")()}return this},useAsColor:function(e){var r,o,t;if("object"==typeof e&&null!==e)e.css&&e.css("color","rgb("+this.red+", "+this.green+", "+this.blue+")");else if(e=String(e),e.length>0)if(void 0!==window.jQuery)window.jQuery(e).css("color","rgb("+this.red+", "+this.green+", "+this.blue+")");else{if("string"==typeof e)switch(e[0]){case"#":o=document.getElementById(e);break;case".":if(document.getElementsByClassName)o=document.getElementsByClassName(e);else for(o=[],r=document.getElementsByTagName("*"),t=r.length;t--;)r[t].className===e.slice(1)&&o.push(r[t])();break;default:o=document.getElementsByTagName(e)}for(t=o.length;t--;)(o[t].style.color="rgb("+this.red+", "+this.green+", "+this.blue+")")()}return this}},{Color:e,ColorSpace:r,mix:function(e,r){var o,t,i,n,a,s,l;if(void 0===e||"[object Array]"!==Object.prototype.toString.call(e))throw'"ColorMix.mix()" first parameter should be an array of ColorMix.Color objects';if(void 0===r)for(r=[],l=e.length;l--;)r[l]=100/e.length;else if("[object Array]"!==Object.prototype.toString.call(r))throw'"ColorMix.mix()" second parameter should be an array of percents. (nnumber values)';if(e.length!==r.length)throw'"ColorMix.mix()" parameters should be arrays of the same size !';for(l=e.length,o=0,a=0,s=0,i=0;l--;){if(!(e[l]instanceof ColorMix.Color))throw'"ColorMix.mix()" color at index: '+l+" should be an instance of ColorMix.Color() object !";if(i+=r[l],i>100)throw'Invalid "ColorMix.mix()" second parameter: the sum of all the percents array items should be 100.';t=ColorMix.ColorSpace.RGBtoLab(e[l].getRed(),e[l].getGreen(),e[l].getBlue()),o+=t.L*r[l]/100,a+=t.a*r[l]/100,s+=t.b*r[l]/100}if(100!==i)throw'Invalid "ColorMix.mix()" second parameter: the sum of all the percents array items should be 100.';return n=ColorMix.ColorSpace.LabtoRGB(o,a,s),new ColorMix.Color(n.red,n.green,n.blue)},setGradient:function(e){return void 0!==e&&"[object Array]"===Object.prototype.toString.call(e)&&(o=e),this},getGradient:function(){return o},blend:function(e){var r,t,i,n,a,s;if(void 0===e)throw'Missing "ColorMix.blend()" first parameter.';if(e=parseInt(e),isNaN(e))throw'Invalid "ColorMix.blend()" first parameter: you should provide a number.';if(i=o.length,a=o[0],n=o[i-1],e<=a.reference)return new ColorMix.Color(a.color.red,a.color.green,a.color.blue);if(e>=n.reference)return new ColorMix.Color(n.color.red,n.color.green,n.color.blue);for(;i--;)s=o[i],s.reference<=e&&s.reference>a.reference?a=s:s.reference>=e&&s.reference<n.reference&&(n=s);return r=new ColorMix.Color(a.color.red,a.color.green,a.color.blue),t=new ColorMix.Color(n.color.red,n.color.green,n.color.blue),a.percent=Math.abs(100/((a.reference-n.reference)/(e-n.reference))),n.percent=100-a.percent,new ColorMix.mix([r,t],[a.percent,n.percent])}}}();