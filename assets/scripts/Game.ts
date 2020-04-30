
import rsa = require('./platform/sdk');

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {


    @property({type:cc.Label})
    label:cc.Label = null;

    onLoad() {

    }

    onBtnWechat() {
        this.label.string = rsa.getString();
    }

    onCommit() {
        this.label.string = rsa.getString();
    }
}
