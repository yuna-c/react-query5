import { useQuery } from "@tanstack/react-query";
// 비동기 데이터 관리 해보기
const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  // 데이터를 배열 형태로
  return await response.json();
};

/*
useQuery('QueryKey', fetch func);
QueryKey : react-query를 관리 할 각 비동기 데이터 구분 용도의 키

data : 실제 반환 데이터
isError, isSuccess : 데이터 반환 성공 실패 유무(택1)
isLoading : pending 유무
isStale, isFresh : 최신 데이터 유무 (stale: falsed(최신 상태), true(옛날 상태))
refetch : 비동기 데이터 강제 재 요청 함수 
*/

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
/*
react-query 개발툴에서 확인할 수 있는 상태값 5가지 정리
fresh : 비동기 데이터가 현재 최산상태 (refetching할 필요가 없는 신선한 상태)
fetching : 비동기 데이터의 요청중인 상태 (pending)
paused : 특정 이유로 비동기 데이터 요청이 보류가 된 상태
*stale : 현재 해당 컴포넌트에서 활용되고 있는 데이터가 최신상태가 아닌 경우 (refetching이 필요한 상태) : 기본값 0 
*inactive : 최신상태가 아닌 데이터를 해당 컴포넌트에서 현재 활용되고 있지 않는 상태 (일정시간 이후 해당 데이터(캐시)가 삭제됨)
*/
