import { useUserQuery } from "./hooks/useUsers";

export default function UserAddress() {
  const { data, isSuccess } = useUserQuery();

  return (
    <div className="UserInfo">
      <h1>User address</h1>
      {isSuccess && <p>{data.address.street}</p>}
    </div>
  );
}
