function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function extend(Sub,Sup) {
    //Sub��ʾ���࣬Sup��ʾ����
    // ���ȶ���һ���պ���
    var F = function(){};

    // ���ÿպ�����ԭ��Ϊ�����ԭ��
    F.prototype = Sup.prototype; 

// ʵ�����պ��������ѳ���ԭ�����ô��ݸ�����
    Sub.prototype = new F();
            
    // ��������ԭ�͵Ĺ�����Ϊ��������
    Sub.prototype.constructor = Sub;
            
    // �������б��泬���ԭ��,���������볬�����
    Sub.sup = Sup.prototype;

    if(Sup.prototype.constructor === Object.prototype.constructor) {
        // ��ⳬ��ԭ�͵Ĺ������Ƿ�Ϊԭ������
        Sup.prototype.constructor = Sup;
    }

}

export {addLoadEvent,extend}

