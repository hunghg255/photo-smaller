import { createImageList } from "@/engines/transform";
import { gstate } from "@/global";
import { Mimes } from "@/mimes";
import { useDebounceFn } from "ahooks";
import { Flex, Typography, Upload, theme } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { sprintf } from "sprintf-js";
import style from "./index.module.scss";
import { state } from "./state";

export const UploadCard = observer(() => {
  const { token } = theme.useToken();

  const onChangeDebounce = useDebounceFn(
    async (v) => {
      const files = v?.fileList ?? [];

      const list: Array<File> = [];
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        list.push(file.originFileObj);
      }
      await createImageList(list);
    },
    {
      wait: 300,
    },
  );

  return (
    <Flex
      justify="center"
      align="center"
      className={classNames(style.container, state.dragActive && style.active)}
      style={{ borderRadius: token.borderRadiusLG }}
    >
      <Upload
        multiple
        itemRender={() => null}
        customRequest={() => {}}
        accept={Object.keys(Mimes)
          .map((item) => "." + item)
          .join(",")}
        onChange={onChangeDebounce.run}
      >
        <Flex vertical align="center" className={style.inner}>
          <svg viewBox="0 0 24 24">
            <path d="M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z" />
          </svg>
          <Typography.Text>{gstate.locale?.uploadCard.title}</Typography.Text>
          <div>
            {sprintf(
              gstate.locale?.uploadCard.subTitle ?? "",
              Object.keys(Mimes)
                .map((item) => item.toUpperCase())
                .join("/"),
            )}
          </div>
        </Flex>
      </Upload>
    </Flex>
  );
});
