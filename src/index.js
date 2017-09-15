module.exports = function check(str, bracketsConfig) {
    var stack = new Array();
    var lenght = str.length;
    var one = (lenght % 2)
    if (one == 1) return false;
    else {
        for (var i = 0; i <= str.length - 1; i++) {
            switch (str[i]) {
                case '{':
                    stack.push('}');
                    break;
                case '(':
                    stack.push(')');
                    break;
                case '[':
                    stack.push(']');
                    break;
                case '1':
                    stack.push('2');
                    break;
                case '3':
                    stack.push('4');
                    break;
                case '5':
                    stack.push('6');
                    break;
                case '|':
                    if (stack[stack.length - 1] == '|') {
                        stack.pop();
                        break;
                    }
                    stack.push('|');
                    break;
                case '7':
                    if (stack[stack.length - 1] == '7') {
                        stack.pop();
                        break;
                    }
                    stack.push('7');
                    break;
                case '8':
                    if (stack[stack.length - 1] == '8') {
                        stack.pop();
                        break;
                    }
                    stack.push('8');
                    break;
                default :
                    if (stack.length == 0 || str[i] != stack[stack.length - 1]) {
                        return false;
                    }
                    stack.pop();
            }
        }
        if (stack.length == 0){
            return true;
        }else{
            return false;
        }
    }
}
