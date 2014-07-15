(function(doc) {
    /**
     * Function to remove css classes from and element
     * @param  {Object} el         The element
     * @param  {String} className  space separated class names
     * @return {Object}           The element
     */
    function removeClass(el, className) {
        var removeClsArray = className.split(' ');
        var elClasses = el.className;
        var elClsArray = elClasses.split(' ');
        if (removeClsArray.length && elClsArray.length) {
            for (var i = 0; i < elClsArray.length; i++) {
                for (var j = 0; j < removeClsArray.length; j++) {
                    if (elClsArray[i] === removeClsArray[j]) {
                        elClsArray.splice(i, 1);
                    }
                }
            }
        }

        el.className = elClsArray.join(' ');
        return el;
    }

    /* Remove no-js class if JS enabled*/
    var htmlTag = doc.getElementsByTagName('html')[0];
    removeClass(htmlTag, 'no-js');


})(document);