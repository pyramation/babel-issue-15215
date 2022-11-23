# babel issue #15215 

`typeParameters` for `ArrowFunctionExpression` w/o specifying always gets a trailingComma

https://github.com/babel/babel/issues/15215


## expected result
```js
const useDeployment = <TData = QueryDeploymentResponse>({
    request,
    options
}: UseDeploymentQuery<TData>) => {
    return useQuery<QueryDeploymentResponse, Error, TData>(["deploymentQuery", request], () => {
        if (!queryService) throw new Error("Query Service not initialized");
        return queryService.deployment(request);
    }, options);
};
```

## actual result


```js
const useDeployment = <TData = QueryDeploymentResponse,>({
    request,
    options
}: UseDeploymentQuery<TData>) => {
    return useQuery<QueryDeploymentResponse, Error, TData>(["deploymentQuery", request], () => {
        if (!queryService) throw new Error("Query Service not initialized");
        return queryService.deployment(request);
    }, options);
};
```

## diff result

Adds a comma:

```diff
+const useDeployment = <TData = QueryDeploymentResponse,>({
-const useDeployment = <TData = QueryDeploymentResponse>({
```

# how to run

```
yarn
yarn test:watch
```

## files of interest

- [output snapshot](https://github.com/pyramation/babel-issue-15215/blob/main/__tests__/__snapshots__/pure.test.ts.snap)
- [test file with AST](https://github.com/pyramation/babel-issue-15215/blob/main/__tests__/pure.test.ts)
