import { useLanguage } from "@/context/LocaleProvider";
import { StyledText } from "./styles";
const EmptyBox = () => {
  const { feelingEmpty } = useLanguage();
  return (
    <div className="empty-box">
      <StyledText>{feelingEmpty}</StyledText>
    </div>
  );
};

export default EmptyBox;
