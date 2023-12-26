import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  //생성자 객체(비동기 데이터)
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Hello</h1>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
