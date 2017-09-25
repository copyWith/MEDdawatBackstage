window.onload = function () {
    var ul = document.querySelector('.ul');
    var uLi = ul.querySelectorAll('a');
    for (let i = 0; i < uLi.length; i++) {
        uLi[i].onclick = function () {
            for (var s = 0; s < uLi.length; s++) {
                uLi[s].className = '';
            }
            this.className = 'check';
        }
    }
};