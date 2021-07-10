// 프로그래머스 키패드 누르기
function solution(numbers, hand) {
    let answer = "";
    let key = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],

        4: [1, 0],
        6: [1, 2],
        5: [1, 1],

        7: [2, 0],
        8: [2, 1],
        9: [2, 2],

        "*": [3, 0],
        0: [3, 1],
        "#": [3, 2],
    };
    let keyLeft = [3, 0];
    let keyRight = [3, 2];
    numbers.forEach((item) => {
        let temp = key[item];
        if (temp[1] === 0) {
            answer += "L";
            keyLeft = temp;
        } else if (temp[1] === 2) {
            answer += "R";
            keyRight = temp;
        } else {
            let temp_left =
                Math.abs(temp[0] - keyLeft[0]) + Math.abs(temp[1] - keyLeft[1]);
            let temp_right =
                Math.abs(temp[0] - keyRight[0]) +
                Math.abs(temp[1] - keyRight[1]);
            if (temp_left < temp_right) {
                answer += "L";
                keyLeft = temp;
            } else if (temp_left > temp_right) {
                answer += "R";
                keyRight = temp;
            } else {
                if (hand === "left") {
                    answer += "L";
                    keyLeft = temp;
                } else if (hand === "right") {
                    answer += "R";
                    keyRight = temp;
                }
            }
        }
    });
    return answer;
}
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
