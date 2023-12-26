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

기본값 5분 
*/

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    refetchOnWindowFocus: false, // 다른 브라우저 탭으로 이동했다가 다시 넘어오면 재패칭 안함
    refetchOnMount: false, //해당 컴포넌트 재 마운트시 reftetching 안함
    gcTime: 1000 * 10,
  });
};
/*
fresh : 서버 데이터를 최신상태로 인식하는 상태
stale : 서버 데이터를 오래된 데이터로 인식하는 상태
inactive : 서버 데이터가 더 이상 해당 컴포넌트에서 활용되지 않는 상태
gcTime : inactive가 되자마자 gcTime에 등록된 시간 값이 소진되면서 해당 시간이 지나면 가비지 컬렌터가 해당 메모리 제거
*/
/*
react-query 개발툴에서 확인할 수 있는 상태값 5가지 정리
fresh : 비동기 데이터가 현재 최산상태 (refetching할 필요가 없는 신선한 상태)
fetching : 비동기 데이터의 요청중인 상태 (pending)
paused : 특정 이유로 비동기 데이터 요청이 보류가 된 상태
*stale : 현재 해당 컴포넌트에서 활용되고 있는 데이터가 최신상태가 아닌 경우 (refetching이 필요한 상태) : 기본값 0 
*inactive : 최신상태가 아닌 데이터를 해당 컴포넌트에서 현재 활용되고 있지 않는 상태 (일정시간 이후 해당 데이터(캐시)가 삭제됨)
*/
