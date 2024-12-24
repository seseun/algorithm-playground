import { Box, Container, Typography } from '@mui/material';

import { removeSameNumber, moveZeros, maxProfit, maxArea } from './answer';

export default function ArrayPage() {
    let question2_array = [0, 1, 0, 3, 2];
    moveZeros(question2_array);
    return (
        <Container sx={{ py: '2rem' }}>
            <Typography variant="h4">배열을뿌셔!</Typography>
            <Box sx={{ border: '1px solid #444', p: 2, mt: 4 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: '1rem',
                        whiteSpace: 'pre-line'
                    }}>{`1.
                배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
                이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
                단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.

                예를 들면,
                arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
                arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
                
                배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.`}</Typography>
                <Box sx={{ background: '#222', p: 2, mt: 1 }}>
                    <Typography>
                        🥚 [1, 1, 3, 3, 0, 1, 1]
                        <br />
                        🐤 {removeSameNumber([1, 1, 3, 3, 0, 1, 1])}
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        🥚 [4, 4, 4, 3, 3]
                        <br />
                        🐤 {removeSameNumber([4, 4, 4, 3, 3])}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #444', p: 2, mt: 4 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: '1rem',
                        whiteSpace: 'pre-line'
                    }}>{`2.
                    정수의 배열 nums가 주어졌을 때, 배열 내에 있는 모든 0을 맨 뒤로 옮겨라.
                    단, 0이 아닌 원소들의 순서가 배열 내에서 그대로 유지되어야 한다.
                    (작성할 함수는 아무 것도 반환하지 않고 주어진 배열의 원소들의 위치만 변경해야 함)
                    
                    예제)
                    input: [0, 1, 0, 3, 2]
                    output: [1, 3, 2, 0, 0]`}</Typography>
                <Box sx={{ background: '#222', p: 2, mt: 1 }}>
                    <Typography>
                        🥚 [0, 1, 0, 3, 2]
                        <br />
                        🐤 {`[${question2_array.join(', ')}]`}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #444', p: 2, mt: 4 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: '1rem',
                        whiteSpace: 'pre-line'
                    }}>{`3.
                    i 번째 날에 주식의 가격을 prices[i]에 담고 있는 배열 prices가 주어졌을 때,
                    주식을 어떤 날에 한 번 사고 나중에 다른 날에 팔아서 달성 가능한 최대 이익을 구하라.
                    
                    예제)
                    input: [7, 1, 5, 3, 6, 4]
                    output: 5`}</Typography>
                <Box sx={{ background: '#222', p: 2, mt: 1 }}>
                    <Typography>
                        🥚 [7, 1, 5, 3, 6, 4]
                        <br />
                        🐤 {maxProfit([7, 1, 5, 3, 6, 4])}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #444', p: 2, mt: 4 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: '1rem',
                        whiteSpace: 'pre-line'
                    }}>{`3.
                    길이가 n인 정수 배열 height가 주어졌을 때, n개의 수직선이 그려져있으며 i 번째 선은 좌표 (i, 0)과 (i, height[i])를 이은 선으로 나타낸다.
                    최고로 많은 물을 담을 수 있는 수조(container)를 만들어 낼 수 있는 두 개의 수직선을 찾고 그 수조가 담고 있는 최대 물의 양을 반환하라.
                    단, 배열은 최소 2개의 원소로 구성되어 있고 수조를 기울일 수 없다.
                    
                    예제)
                    input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
                    output: 49
                    
                    2번째 높이 8과 마지막 높이 7을 가지고 넓이 49짜리 수조를 만들 수 있습니다. 이 수조의 높이 8과 7 중 작은 값인 7이며, 너비는 두 값의 거리인 7(index 8 - index 1)이기 때문입니다.
                    `}</Typography>
                <Box sx={{ background: '#222', p: 2, mt: 1 }}>
                    <Typography>
                        🥚 [1, 8, 6, 2, 5, 4, 8, 3, 7]
                        <br />
                        🐤 {maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
