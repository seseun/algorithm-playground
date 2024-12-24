export function removeSameNumber(input: Array<number>) {
    // ⏱️ O(n) 한 번 루프
    // 🗄️ O(1) 배열의 크기는 무시하면
    let answer: Array<number> = [];

    input.forEach((item) => {
        if (answer[answer.length - 1] === item) return;
        answer.push(item);
    });
    return `[${answer.join(', ')}]`;
}
export function moveZeros(input: Array<number>) {
    // 1. 추가적인 메모리를 써서 실행 시간을 단축
    // -----------------------------------------------------------------------
    // ⏱️ O(n) 주어진 배열을 딱 한 번 루프를 돌며,
    // 🗄️ O(n) 입력 배열의 크기와 동일한 추가적인 배열을 사용하기 때문
    // -----------------------------------------------------------------------
    // 주어진 배열을 0인 원소들과, 0인 아닌 원소들 이렇게 2개로 쪼갠 후에 다시 합쳐
    // let zeros: Array<number> = [];
    // let non_zeros: Array<number> = [];
    // input.forEach((item) => {
    //     if (item === 0) zeros.push(item);
    //     else non_zeros.push(item);
    // });
    // input.splice(0, input.length);
    // input.push(...non_zeros, ...zeros);
    // -----------------------------------------------------------------------

    // 2. 투포인터기법
    // -----------------------------------------------------------------------
    // ⏱️ O(n^2) 입력 배열을 단 한 번 루프를 돌기 때문에
    // 🗄️ 추가적인 메모리를 사용하지 않기 때문에
    // -----------------------------------------------------------------------
    // 배열의 시작점과 끝점에 포인터를 두고, 조건에 맞지 않는 요소를 찾아 위치를 바꾸는 방식입니다.
    // [0, 1, 0, 3, 2]
    let left = 0; // 0이 아닌 값을 찾을 포인터
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 0) {
            // 0이 아닌 값과 현재 left 인덱스의 값을 교환
            [input[left], input[i]] = [input[i], input[left]];
            left++; // 0이 아닌 값의 끝 위치를 갱신
        }
        // 〰️left = 0, i = 0
        // input[0]이 0이므로 변화없음
        // 〰️left = 0, i = 1
        // input[1]이 0이 아니므로
        // input[0], input[1] = input[1], input[0] => [1, 0, 0, 3, 2]
        // 〰️left = 1, i = 2
        // input[2]는 0이므로 변화없음
        // 〰️left = 1, i = 3
        // input[3]이 0이 아니므로
        // input[1], input[3] = input[3], input[1] => [1, 3, 0, 0, 2]
        // 〰️left = 2, i = 4
        // input[4]이 0이 아니므로
        // input[2], input[4] = input[4], input[2] => [1, 3, 2, 0, 0]
    }
}

export function maxProfit(prices: Array<number>) {
    // ⏱️O(n) 루프를 딱 한 번 돌아서 정답을 찾고 있는 이 풀이
    // 🗄️정해진 변수 외에는 추가적인 메모리를 사용하지 않고 있어서
    let max_profit: number = 0;
    let min_price: number = prices[0];
    for (let price of prices) {
        let profit = price - min_price;
        max_profit = Math.max(profit, max_profit);
        min_price = Math.min(price, min_price);
    }

    return max_profit;
}

export function maxArea(heights: Array<number>) {
    // ⏱️O(n)
    // 🗄️정해진 변수 외에는 추가적인 메모리를 사용하지 않고 있어서
    let max_area: number = 0;
    let start: number = 0;
    let end: number = heights.length - 1;
    while (start < end) {
        let area = (end - start) * Math.min(heights[start], heights[end]);
        max_area = Math.max(area, max_area);

        if (heights[start] < heights[end]) {
            start++;
        } else {
            end--;
        }
    }

    return max_area;
}
