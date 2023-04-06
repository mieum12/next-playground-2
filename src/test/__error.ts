// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1번 경우
function fn3() {
  throw new Error("DB 연결 오류");
}

function fn2() {
  try {
    fn3(); // 오류 발생 가능성 있는 함수 호출
  } catch (e) {
    console.log(e.message);
  }
}

function fn1() {
  try {
    fn2();
  } catch (e) {
    console.log("알 수 없는 오류 발생입니다. 죄송합니다.");
  }
}

fn1(); // >>>>>>>>>>> DB 연결 오류
//3의 에러를 2에서 잡아서 끝내서

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2번 경우
function fn6() {
  throw new Error("DB 연결 오류");
}

function fn5() {
  fn3(); // 오류 발생 가능성 있는 함수 호출
}

function fn4() {
  try {
    fn2();
  } catch (e) {
    console.log("알 수 없는 오류 발생입니다. 죄송합니다.");
    throw e;
  }
}

fn4(); // >>>>>>>>>>알 수 없는 오류 발생입니다. 죄송합니다.
//6의 에러를 5에서 안잡아줘서 자동으로 4까지 넘어가고 거기서 에러를 잡아준다. 근데 여기서 또 던지는데 에러를 잡을 곳이 없어서 uncaught error 메세지가 뜬다
