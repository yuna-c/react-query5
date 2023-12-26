import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo";
import UserAddress from "./UserAddress";
import Menu from "./Menu";
import Main from "./Main";

function App() {
  //생성자 객체(비동기 데이터)
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Menu />
        <Routes>
          {/* 6버전 라우터 */}
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<UserInfo />} />
          <Route path="/address" element={<UserAddress />} />
        </Routes>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
