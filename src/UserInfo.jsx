export default function UserInfo() {
  // 비동기 데이터 관리 해보기
  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  };
  return <div className="UserInfo">UserInfo</div>;
}
