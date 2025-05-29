import { Radio, Box } from "../atoms";
import { useSetting } from "../../context/SettingContext";
import { useEffect, useRef } from "react";

const SettingBox = ({ className }) => {
  const boxRef = useRef();
  const { changeSetting } = useSetting();
  useEffect(() => {
    if (className === "open") {
      boxRef.current.inert = false;
    } else {
      boxRef.current.inert = true;
    }
  }, [className]);
  return (
    <Box
      position="tl"
      direction="column"
      className={`setting-area ${className}`}
      ref={boxRef}
    >
      {/* 난이도 선택 */}
      <h2 className="sub-title">Difficulty</h2>
      <Box position="tl" gap={6} className="mt-8" wrap>
        <Radio
          name="difficulty"
          value="all"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              difficulty: e.target.value,
            }));
          }}
          defaultChecked
        >
          random
        </Radio>
        <Radio
          name="difficulty"
          value="1"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              difficulty: e.target.value,
            }));
          }}
        >
          ⭐
        </Radio>
        <Radio
          name="difficulty"
          value="2"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              difficulty: e.target.value,
            }));
          }}
        >
          ⭐⭐
        </Radio>
        <Radio
          name="difficulty"
          value="3"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              difficulty: e.target.value,
            }));
          }}
        >
          ⭐⭐⭐
        </Radio>
      </Box>

      {/* 카테고리 선택 */}
      <h2 className="sub-title mt-16">Category</h2>
      <Box position="tl" gap={6} className="mt-8" wrap>
        <Radio
          name="tag"
          value="all"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              tag: e.target.value,
            }));
          }}
          defaultChecked
        >
          random
        </Radio>
        <Radio
          name="tag"
          value="html"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              tag: e.target.value,
            }));
          }}
        >
          HTML
        </Radio>
        <Radio
          name="tag"
          value="css"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              tag: e.target.value,
            }));
          }}
        >
          CSS
        </Radio>
        <Radio
          name="tag"
          value="javascript"
          onChange={(e) => {
            changeSetting((prev) => ({
              ...prev,
              tag: e.target.value,
            }));
          }}
        >
          JavaScript
        </Radio>
      </Box>
    </Box>
  );
};

export default SettingBox;
