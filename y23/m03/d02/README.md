## #Lv.1 150370

[https://school.programmers.co.kr/learn/courses/30/lessons/150370](https://school.programmers.co.kr/learn/courses/30/lessons/150370)

일단 terms를 객체로 변환해주었다. 그 과정에서 ‘ 구조 분해 할당’문법을 활용하여 privacies 배열을 split을 통해 type라는 배열과 month라는 배열에 넣어주었다.

구조 분해 할당 후 미리 선언해둔 obj라는 객체에 type을 key값으로 month를 value값으로 넣어주었다.

그 후 똑같이 구조 분해 할당 문법을 통해 각 privacies의 배열들을 start라는 배열과 type이라는 배열에 시작 날짜와 약관 종류는 넣어주었다.

그리고 Date를 사용하여 날짜 계산을 한 후 비교하여 유효기간이 끝났을 경우 result라는 배열에 넣도록 하였다.
