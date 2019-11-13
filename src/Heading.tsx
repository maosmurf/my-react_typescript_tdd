import React, {FC} from "react";

type HeadingProps = { name: string };


export const label = (name: string) => {
  return `Hello ${name.toUpperCase()}`;
};

const Heading: FC<HeadingProps> = (props: HeadingProps) => <h1 className={'headerOne'}>{label(props.name)}</h1>;

export default Heading;
