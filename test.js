fetch('http://test.api.weniv.co.kr/mall')
  .then((data) => data.json())
  .then((data) => {
    data.forEach(item => {
        //console.log(item.productName);
    })
    return data;
  })
  .then((data) => {
    console.log(data.filter((item) => item.price >= 10000));
    return data;
  })
  .then((data)=> {
    
    data.forEach(item => {
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.innerText = item.productName;
        p.innerText = item.price;
        document.body.appendChild(h2);
      document.body.appendChild(p);
  })
})
//   .then((data) => {
//     data.map((item) => {
//       console.log(item);
//       const h2 = document.createElement("h2");
//       const p = document.createElement("p");
//       h2.innerHTML = item.productName;
//       p.innerHTML = item.price;
//       document.body.appendChild(h2);
//       document.body.appendChild(p);
//     });
//   })
//  .catch((error) => document.write(error));


// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)

// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)

// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.

// 4. error 처리를 해주세요. 