import { ReactNode } from "react";

const TitleWithHighlight = ({ children }: { children: ReactNode }) => {
  return <div className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-[54px] leading-[60px] md:leading-[80px] lg:leading-[110px] xl:leading-[120px]">{children}</div>;
};

export default TitleWithHighlight;
