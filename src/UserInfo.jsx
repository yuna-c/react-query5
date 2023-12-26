import { useQuery } from "@tanstack/react-query";

export default function UserInfo() {
  // 비동기 데이터 관리 해보기
  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  };
  // useQuery('QueryKey', fetch func);
  // QueryKey : react-query를 관리 할 각 비동기 데이터 구분 용도의 키
  /*
    data : 실제 반환 데이터
    isError, isSuccess : 데이터 반환 성공 실패 유무(택1)
    isLoading : pending 유무
    isStale, isFresh : 최신 데이터 유무 (stale: falsed(최신 상태), true(옛날 상태))
    refetch : 비동기 데이터 강제 재 요청 함수 
  */
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });
  // useQuery이용시 useState를 통한 지역 스테이트 생성, useEffect를 통한 fetching함수 호출, useCallback을 통한 메모이제이션처리 안해도 한번에 useQuery가 위의 모든 작업을 대신 처리해줌
  console.log(data, "객체");
  console.log(error);

  return (
    <div className="UserInfo">
      <h1>User infomation</h1>
      {isLoading && <p>is Loading...</p>}
      {/* {isSuccess ? (
        data.map((user, id) => <h2 key={id}>{user.name}</h2>)
      ) : (
        <p>데이터 반환에 실패했습니다.</p>
      )} */}
      {isSuccess && data.map((user, id) => <h2 key={id}>{user.name}</h2>)}
      {/* 404는 못잡음 {isError && <h2>데이터 반환에 실패했습니다.</h2>} */}
    </div>
  );
}
