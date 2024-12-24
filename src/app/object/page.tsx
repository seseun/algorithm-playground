import { Box, Container, Typography } from '@mui/material';

import { climbStairs, isAnagram, twoSum } from './answer';

export default function ObjectPage() {
    return (
        <Container sx={{ py: '2rem' }}>
            <Typography variant="h4">객체를뿌셔!</Typography>
            <Box sx={{ border: '1px solid #444', p: 2, mt: 4 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: '1rem',
                        whiteSpace: 'pre-line'
                    }}>
                    {`1.
                    정수 값이 담긴 배열 nums와 특정한 정수 target이 주어졌다.
                    nums 배열 안에 있는 숫자 중에서 두 개의 숫자를 더했을 때, target 값과 동일해지는 두 숫자의 배열 인덱스를 리턴하라.

                    예를 들어, nums가 [2, 7, 11, 15]이고 target이 9라면 [0, 1]을 리턴해야 한다.
                    왜냐하면, index 0에 위차한 숫자는 2이고 index 1에 위치한 숫자는 7이기 때문에 이 두 수를 더하면 target인 9와 일치하기 때문이다.
                    
                    배열 안에는 정답이 하나(두 개의 숫자)만 있도록 구성되어 있다고 가정하며, 같은 숫자를 두 번 사용할 수 없다.`}
                </Typography>
                <Box sx={{ background: '#222', p: 2, mt: 1 }}>
                    <Typography>
                        🥚 nums: [2, 7, 11, 15], target: 9
                        <br />
                        🐤 {`[${twoSum([2, 7, 11, 15], 9)?.join(', ')}]`}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #444', p: 2, mt: 4 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: '1rem',
                        whiteSpace: 'pre-line'
                    }}>
                    {`2.
                    문자열 s과 t가 주어졌을 때,
                    t가 s의 애너그램(anagram)이라면 참을 반환하고 아니라면 거짓을 반환하라.
                    여기서 애너그램이란 다른 단어나 어구의 글자들을 재배열해서 얻을 수 있는 단어나 어구를 의미한다.
                    단, 모든 글자를 정확히 한번 씩만 써야 한다.
                    
                    예제)
                    Input: s = "anagram", t = "nagaram"
                    Output: true

                    Input: s = "rat", t = "car"
                    Output: false
                    `}
                </Typography>
                <Box sx={{ background: '#222', p: 2, mt: 1 }}>
                    <Typography>
                        🥚 'anagram', 'nagaram'
                        <br />
                        🐤 {`${isAnagram('anagram', 'nagaram')}`}
                    </Typography>
                    <Typography>
                        🥚 'rat', 'car'
                        <br />
                        🐤 {`${isAnagram('rat', 'car')}`}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #444', p: 2, mt: 4 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: '1rem',
                        whiteSpace: 'pre-line'
                    }}>
                    {`3.
                    계단을 한 번에 1칸이나 2칸을 올라갈 수 있을 때, n 칸의 높이의 계단을 올라기가 위한 방법이 총 몇가지인지 구하라.
                    
                    예제)
                    n = 2
                    2

                    n = 3
                    3`}
                </Typography>
                <Box sx={{ background: '#222', p: 2, mt: 1 }}>
                    <Typography>
                        🥚 n=8
                        <br />
                        🐤 {`[${climbStairs(8)}]`}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
