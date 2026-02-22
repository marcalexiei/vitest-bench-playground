# vitest-bench-playground

When using `bench` in top level the results are printed two times.

While it's wrapped in a `describe` they are only displayed once:

```text
 ✓ tests/sum-with-describe.bench.ts > sum 5789ms
     name             hz     min     max    mean     p75     p99    p995    p999     rme   samples
   · a     48,128,806.17  0.0000  0.0327  0.0000  0.0000  0.0000  0.0000  0.0001  ±0.05%  24064404

 ✓ tests/sum-without-describe.bench.ts 5748ms
     name             hz     min     max    mean     p75     p99    p995    p999     rme   samples
   · sum   48,075,917.04  0.0000  0.0334  0.0000  0.0000  0.0000  0.0000  0.0001  ±0.05%  24037959

 ✓ tests/sum-without-describe.bench.ts 5748ms
     name             hz     min     max    mean     p75     p99    p995    p999     rme   samples
   · sum   48,075,917.04  0.0000  0.0334  0.0000  0.0000  0.0000  0.0000  0.0001  ±0.05%  24037959

 BENCH  Summary

  a - tests/sum-with-describe.bench.ts > sum

  sum - tests/sum-without-describe.bench.ts
```
