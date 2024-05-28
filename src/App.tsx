import { ConfigProvider } from "antd";
import { observer } from "mobx-react-lite";
import { gstate } from "./global";
import { ContextAction } from "./ContextAction";
import { Loading } from "./components/Loading";

export const App = observer(() => {
  return (
    <ConfigProvider
      locale={gstate.locale?.antLocale}
      theme={{
        token: {
          colorPrimary: "#1da565",
          colorLink: "#1da565",
          colorSuccess: "#1da565",
        },
      }}
    >
      <ContextAction />
      {gstate.page}
      {gstate.loading && <Loading />}
    </ConfigProvider>
  );
});
