/* www.cumt.top */
 function getParameter(pName) {
    var url = window.location.href,
        start = url.indexOf("?") + 1,
        paras = {};
    if (start !== 0) {
        var queryString = url.substring(start),
            paraNames = queryString.split("&"),
            arr = [],
            i = 0;
        for (; i < paraNames.length; i++) {
            arr = paraNames[i].split("=");
            if (i === paraNames.length - 1) {
                var sIndex = arr[1].indexOf("#");
                if (sIndex !== -1) {
                    arr[1] = arr[1].substring(0, sIndex);
                }
            }
            paras[arr[0]] = arr[1]
        }
    }
    return decodeURIComponent(paras[pName] || "");
}