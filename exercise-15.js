  //Algorithm to detect stock span
  function detectSpan(arr) {
    let spans = [];
    let days = 0;
    for(let i = 0, len = arr.length; i < len; i += 1) {
      for(let x = spans.length; x >= 0; x -= 1) {
        if(spans[x].value > arr[i]) {
          break;
        }
        spans.pop();
       }

      if(spans.length) {
        spans.push({
          span: days - spans[spans.length -1].span
          value: arr[i]
        }
      } else {
        spans = [{
            span: 1,
            value: arr[0]
        }];
        days = 1;
      }
    }
  }
