function decode(message) {
    let arrayMessage = message.split("");
  
    processParentheses();
    processParentheses();
  
    return arrayMessage.join('');
  
    function processParentheses() {
      for (let i = 0; i < arrayMessage.length; i++) {
        if (arrayMessage[i] === "(" && !haveNestedParentheses(i + 1)) {
          destroyOneParentheses(i);
        }
      }
    }
  
    function haveNestedParentheses(index) {
      for (let j = index; j < arrayMessage.length; j++) {
        if (arrayMessage[j] === "(") {
          return true;
        }
        if (arrayMessage[j] === ")") {
          return false;
        }
      }
    }
  
    function destroyOneParentheses(i) {
      let end;
      for (let k = i; k < arrayMessage.length; k++) {
        if (arrayMessage[k] === ")") {
          end = k;
          break;
        }
      }
      arrayMessage.splice(i, 1);
      arrayMessage.splice(end - 1, 1);
      end = end - 2;
      let inicio = i;
      while (inicio < end) {
        let temp = arrayMessage[inicio];
        arrayMessage[inicio] = arrayMessage[end];
        arrayMessage[end] = temp;
        inicio++;
        end--;
      }
    }
}

const a = decode('hola (odnum)');
console.log(a);

const b = decode('(olleh) (dlrow)');
console.log(b);

const c = decode('sa(u(cla)atn)s')
console.log(c);
