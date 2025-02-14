import { FC } from "react";
import clsx from "clsx";

interface ContainerProps extends React.ComponentProps<'div'> {}

const Container: FC<ContainerProps> = ({ className, children, ...rest }) => {
  return (
    <div 
      {...rest} 
      className={clsx("container max-w-[1080px] m-auto p-2", className)}
    >
      {children}
    </div>
  );
};

export default Container;

