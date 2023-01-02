## #25

[코딩테스트 연습 - 특정 문자 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/120826)

<aside>
⚠️ .replaceAll(”변경될 문자”, “변경할 문자”) → 전체 문자열에서 변경될 문자를 모두 찾아서 바꾸기

</aside>

## #26

[코딩테스트 연습 - 각도기](https://school.programmers.co.kr/learn/courses/30/lessons/120829)

```jsx
//필터 사용해서 풀기

function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

-----

//삼항연산자 사용해서 풀기
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
```

## #27

[코딩테스트 연습 - 양꼬치](https://school.programmers.co.kr/learn/courses/30/lessons/120830)

## #28

[코딩테스트 연습 - 짝수의 합](https://school.programmers.co.kr/learn/courses/30/lessons/120831)
