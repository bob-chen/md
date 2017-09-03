// import {UtilInterface} from "./utilinterface";


        function getUnix(place) {
            var date = new Date();
            var time_str = date.getTime();	// 得到的是毫秒
            if (place == 's') {	// 秒
                return Math.floor(time_str / 1000);
            } else {	// 毫秒
                return time_str;
            }
        }
        function getToday(place) {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var hours = 0;
            var mins = 0;
            var secs = 0;
            var datetime = year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs;
            var tmp_datetime = datetime.replace(/:/g,'-');
            tmp_datetime = tmp_datetime.replace(/ /g,'-');
            var arr = tmp_datetime.split("-");
            var now:Date = new Date(Date.UTC(parseInt(arr[0]),parseInt(arr[1])-1,parseInt(arr[2]),parseInt(arr[3])-8,parseInt(arr[4]),parseInt(arr[5]) ));
            if (place == 's') {
                return now.getTime() / 1000;
            } else {
                return now.getTime();
            }
        }
        function getYear(place) {
            var today = new Date();
            var year = today.getFullYear();
            var month = 0;
            var day = 1;
            var hours = 0;
            var mins = 0;
            var secs = 0;
            var datetime = year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs;
            var tmp_datetime = datetime.replace(/:/g,'-');
            tmp_datetime = tmp_datetime.replace(/ /g,'-');
            var arr = tmp_datetime.split("-");
            var now = new Date(Date.UTC(parseInt(arr[0]),parseInt(arr[1])-1,parseInt(arr[2]),parseInt(arr[3])-8,parseInt(arr[4]),parseInt(arr[5]) ));
            if (place == 's') {
                return now.getTime() / 1000;
            } else {
                return now.getTime();
            }
        }
        function getLastDate(time, type) {
            var unixtime = time * 1000;
            var date = new Date(unixtime);
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            if (type == 'month') {
                return month + "-" + currentDate + ' ' + hh + ':' + mm;
                //return month + "-" + currentDate;
            } else {
                return date.getFullYear() + '-' + month + "-" + currentDate + ' ' + hh + ':' + mm;
            }
        }
        // 时间戳转详细时间，比如5分钟前
        function getMagic(timestamp) {
            var now = getUnix('s');    //当前时间戳
            var today = getToday('s'); //今天0点时间戳
            var year = getYear('s');   //今年0点时间戳
            var timer = now - timestamp;
            var tip = '';
            if (timer <= 0) {
                tip = '刚刚';
            } else if (Math.floor(timer/60) <= 0) {
                tip = '刚刚';
            } else if (timer < 3600) {
                tip = Math.floor(timer/60) + '分钟前';
            } else if (timer >= 3600 && (timestamp - today >= 0) ) {
                tip = Math.floor(timer/3600) + '小时前';
            } else if (timer/86400 <= 31) {
                tip = Math.ceil(timer/86400) + '天前';
            } else if (timestamp - today < 0 && (timestamp - year >= 0)) {
                tip = getLastDate(timestamp, 'month');
            } else {
                tip = getLastDate(timestamp, 'year');
            }
            return tip;
        }
    
export {getUnix, getToday, getYear, getLastDate, getMagic}

// let time = {
//     getUnix: function(place) {
//         var date = new Date();
//         var time_str = date.getTime();	// 得到的是毫秒
//         if (place == 's') {	// 秒
//             return Math.floor(time_str / 1000);
//         } else {	// 毫秒
//             return time_str;
//         }
//     },
//     getToday: function(place) {
//         var today = new Date();
//         var year = today.getFullYear();
//         var month = today.getMonth() + 1;
//         var day = today.getDate();
//         var hours = 0;
//         var mins = 0;
//         var secs = 0;
//         var datetime = year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs;
//         var tmp_datetime = datetime.replace(/:/g,'-');
//         tmp_datetime = tmp_datetime.replace(/ /g,'-');
//         var arr = tmp_datetime.split("-");
//         var now:Date = new Date(Date.UTC(parseInt(arr[0]),parseInt(arr[1])-1,parseInt(arr[2]),parseInt(arr[3])-8,parseInt(arr[4]),parseInt(arr[5]) ));
//         if (place == 's') {
//             return now.getTime() / 1000;
//         } else {
//             return now.getTime();
//         }
//     },
//     getYear: function(place) {
//         var today = new Date();
//         var year = today.getFullYear();
//         var month = 0;
//         var day = 1;
//         var hours = 0;
//         var mins = 0;
//         var secs = 0;
//         var datetime = year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs;
//         var tmp_datetime = datetime.replace(/:/g,'-');
//         tmp_datetime = tmp_datetime.replace(/ /g,'-');
//         var arr = tmp_datetime.split("-");
//         var now = new Date(Date.UTC(parseInt(arr[0]),parseInt(arr[1])-1,parseInt(arr[2]),parseInt(arr[3])-8,parseInt(arr[4]),parseInt(arr[5]) ));
//         if (place == 's') {
//             return now.getTime() / 1000;
//         } else {
//             return now.getTime();
//         }
//     },
//     getLastDate: function(time, type) {
//         var unixtime = time * 1000;
//         var date = new Date(unixtime);
//         var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
//         var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
//         var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//         var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//         var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//         if (type == 'month') {
//             return month + "-" + currentDate + ' ' + hh + ':' + mm;
//             //return month + "-" + currentDate;
//         } else {
//             return date.getFullYear() + '-' + month + "-" + currentDate + ' ' + hh + ':' + mm;
//         }
//     },
//     // 时间戳转详细时间，比如5分钟前
//     getMagic: function(timestamp) {
//         var now = this.getUnix('s');    //当前时间戳
//         var today = this.getToday('s'); //今天0点时间戳
//         var year = this.getYear('s');   //今年0点时间戳
//         var timer = now - timestamp;
//         var tip = '';
//         if (timer <= 0) {
//             tip = '刚刚';
//         } else if (Math.floor(timer/60) <= 0) {
//             tip = '刚刚';
//         } else if (timer < 3600) {
//             tip = Math.floor(timer/60) + '分钟前';
//         } else if (timer >= 3600 && (timestamp - today >= 0) ) {
//             tip = Math.floor(timer/3600) + '小时前';
//         } else if (timer/86400 <= 31) {
//             tip = Math.ceil(timer/86400) + '天前';
//         } else if (timestamp - today < 0 && (timestamp - year >= 0)) {
//             tip = this.getLastDate(timestamp, 'month');
//         } else {
//             tip = this.getLastDate(timestamp, 'year');
//         }
//         return tip;
//     }
// };

// util['time'] = time

// export { Time }