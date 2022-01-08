class DelayFactory {
    static delay(action,timeout){
        setTimeout(action,timeout);
    }

    static interval(action,timeout){
        return setInterval(action,timeout);
    }
}

class DOMOperations{

    text_element = null;

    constructor(text_element) {
        this.text_element = text_element;
    }

    setMediumTitleText(new_text){

        this.text_element.innerText = new_text;
    }


}
