假設你正在爬樓梯。需要 n 階你才能到達樓頂。

每次你可以爬 1 或 2 個臺階。你有多少種不同的方法可以爬到樓頂呢？

注意：給定 n 是一個正整數。

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

/**
* @param {number} n
* @return {number}
*/
var climbStairs = function (n) {
    // n-2完成, n-1完成, n-2+n-1完成
    // 2 1+1,2 (2)
    // 3 1+1+1, 1+2, 2+1 (3)
    // 4 1+1+1+1,1+1+2, 1+2+1, 2+1+1, 2+2 (5)
    // 5 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+1+2, 2+2+1 (8)


    if (n < 2) {
        return 1;
    } else if (n === 2) {
        //n-1, n-2
        return 2
    } else {
        n - 1, n - 2 + n - 1, n - 1 + n - 2
        return climbStairs(n - 1) + climbStairs(n - 2)
    }
};
console.log(climbStairs(5)) //8
請用js or ts 實作 並上傳github公開 回傳github連結




注意事項

有需要時，面試時須要透過分享畫面來解釋code的邏輯
若無git，請先註冊git帳號
請自行計時完成時間(建議自行透過畫面錄製來證明)

