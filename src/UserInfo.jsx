import { useUserQuery } from "./hooks/useUsers";

export default function UserInfo() {
  const { data, isSuccess } = useUserQuery();
  // console.log(result);

  return (
    <div className="UserInfo">
      <h1>User infomation</h1>
      {/* 
      {isLoading && <p>is Loading...</p>}
      {/* {isSuccess ? (
        data.map((user, id) => <h2 key={id}>{user.name}</h2>)
      ) : (
        <p>데이터 반환에 실패했습니다.</p>
      )} 
      {isSuccess && data.map((user, id) => <h2 key={id}>{user.name}</h2>)} */}
      {/* 404는 못잡음 {isError && <h2>데이터 반환에 실패했습니다.</h2>} */}
      {isSuccess && <p>{data.name}</p>}
    </div>
  );
}
