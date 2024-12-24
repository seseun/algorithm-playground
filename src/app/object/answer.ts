export function twoSum(nums: Array<number>, target: number) {
    // 1. 단순하게 모든 경우의 수 중 찾는 법
    // -----------------------------------------------------------------------
    // ⏱️O(n^2) 이중루프
    // 🗄️O(1) 고정된 수의 변수만 사용
    // -----------------------------------------------------------------------
    // const size = nums.length;
    // for (let i = 0; i < size - 1; i++) {
    //     // 왜 size -1 이냐면
    //     // 마지막 i는 이미 나머지 i들과 계산을 했기 때문
    //     // 그리고 j가 j + 1부터 시작하니까. i가 size까지 가면 j가 범위를 벗어남
    //     for (let j = i + 1; j < size; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    // 1-시뮬레이션
    // [11, 5, 2, 7], 9
    // size = 4
    // i = 0 -> j = 1 ... nums[0] + nums[1] -> 11 + 5 !== 9
    // i = 0 -> j = 2 ... nums[0] + nums[2] -> 11 + 2 !== 9
    // i = 0 -> j = 3 ... nums[0] + nums[3] -> 11 + 7 !== 9
    // i = 1 -> j = 2 ... nums[1] + nums[2] -> 5 + 2 !== 9
    // i = 1 -> j = 3 ... nums[1] + nums[3] -> 5 + 7 !== 9
    // i = 2 -> j = 3 ... nums[2] + nums[3] -> 2 + 7 === 9 -> [0, 1] 반환, 종료
    // -----------------------------------------------------------------------

    // 2. index 입장에서 필요한 값 찾기
    // -----------------------------------------------------------------------
    // ⏱️O(n) 두 개의 루프
    // 🗄️O(n) Hash Table의 크기는 배열의 크기와 비례해서 증가
    // -----------------------------------------------------------------------
    // const indices = new Map();
    // // 먼저 모든 숫자를 해시맵에 저장
    // nums.forEach((num, index) => {
    //     indices.set(num, index);
    // });
    // // 배열을 다시 순회하면서 각 요소에 대한 보완 값을 찾음
    // for (let i = 0; i < nums.length; i++) {
    //     const complement = target - nums[i];
    //     if (indices.has(complement) && indices.get(complement) !== i) {
    //         const j = indices.get(complement);
    //         return [i, j];
    //     }
    // }
    // return null; // 적합한 쌍을 찾지 못한 경우
    // -----------------------------------------------------------------------

    // 3. 2번을 한 번의 루프에서 구현
    const indices: any = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in indices) {
            const j = indices[complement];
            // 인덱스 i에 대해서 인덱스 j는 항상 i보다 이전 위치를 기리키기 때문에, 리턴 순서가 [i, j]에서 [j, i]로 변경되었음에 유의하세요.
            return [j, i];
        }
        indices[nums[i]] = i;
    }
}

export function isAnagram(s: string, t: string) {
    // 1. 단순히 정렬시켜서 확인함
    // -----------------------------------------------------------------------
    // ⏱️O(n log n) + O(m log m)입니다. 문자열의 길이가 동일하다고 가정할 경우, 이는 O(n log n)으로 단순화할 수 있습니다.
    // 🗄️공간 복잡도는 split, sort, join을 수행할 때 추가 배열 및 문자열을 생성하기 때문에 O(n + m)입니다. 각 문자열을 배열로 변환하고, 정렬된 배열을 다시 문자열로 결합해야 하기 때문에, 입력 문자열의 크기만큼의 추가 공간이 필요합니다.
    // --> 코드는 짧지만, 성능은 딱히 좋지 않다.
    // -----------------------------------------------------------------------
    // return s.split('').sort().join('') === t.split('').sort().join('');
    // -----------------------------------------------------------------------

    // 2. 문자의 빈도수 계산
    // -----------------------------------------------------------------------
    // ⏱️ O(n) 여기서 n은 문자열 s와 t의 길이
    // 🗄️ O(1)
    // -----------------------------------------------------------------------
    // --> 이 접근 방법은 두 문자열의 길이가 매우 클 때도 효율적으로 동작할 수 있어, 성능 면에서 더욱 우수합니다.
    if (s.length !== t.length) {
        return false; // 길이가 다르면 아나그램일 수 없음
    }

    const count: any = {};

    // 문자열 s의 각 문자에 대해 빈도수 증가
    for (let char of s) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    // 문자열 t의 각 문자에 대해 빈도수 감소
    for (let char of t) {
        if (!count[char]) {
            return false; // t의 문자가 s에 없거나 빈도수가 맞지 않으면 false
        }
        count[char]--;
    }

    // 모든 빈도수가 정확히 0이어야 함
    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true; // 모든 조건을 만족하면 true
}

export function climbStairs(n: number) {
    // n 칸에 발을 딛기위해서는 그 전에 n - 1 칸이나 n - 2 칸까지 올라와왔어야 합니다.
    // (n 번째 칸에 오르는 방법의 개수) = (n-1 번째 칸에 오르는 방법의 개수) + (n-2 번째 칸에 오르는 방법의 개수)
    // 계단의 낮은 칸에 올라기기 위해 구해놓은 방법의 개수를 저장해두었다가 높은 칸에 올라가기 위한 방법의 개수를 구할 때 재활용해야하는데요.
    // --> 동적 계획법(Dynamic Programming)
    // ⏱️🗄️ O(n) 루프를 한 번만 돌고 있고,
    // 해시 테이블의 크기는 계단에 높이에 비례하기 때문입니다.

    // const dp: any = { 1: 1, 2: 2 };
    // for (let i = 3; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // return dp[n];

    // 이 아이디어에서, 굳이 1번째 칸부터 n번째 칸까지 모두 저장할 필요는 없다
    // 공간 복잡도를 O(n)에서 O(1)로 줄이기 가능
    // if (n < 3) {
    //     return n;
    // }
    // let pre = 1,
    //     cur = 2;
    // for (let i = 2; i < n; i++) {
    //     let temp = cur;
    //     cur = pre + cur;
    //     pre = temp;
    // }
    // return cur;

    // 재귀함수 사용
    // 큰 n값에 대해 매우 비효율적일 수 있습니다(중복 계산이 많기 때문).
    // if (n < 3) {
    //     return n;
    // }
    // return climbStairs(n - 1) + climbStairs(n - 2);

    // 재귀 + 메모이제이션
    // 큰 입력 값에 대해서도 빠르게 결과를 제공합니다
    // JavaScript의 클로저 기능을 활용하여 memo 객체가 helper 함수 내에서만 접근 가능하도록 제한함으로써, 전역 변수 사용에 따른 부작용을 방지하고 코드의 안정성을 높입니다.
    // 피보나치(Fibonacci) 알고리즘과 거의 동일하다
    const memo: any = {};
    function helper(x: number) {
        if (x in memo) {
            return memo[x];
        }
        if (x < 3) {
            return x;
        }
        memo[x] = helper(x - 1) + helper(x - 2);
        return memo[x];
    }
    return helper(n);
}
// https://www.algodale.com/data-structures/hash-table/
