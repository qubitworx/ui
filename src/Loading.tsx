interface Props {
  width?: string;
  height?: string;
}

const LoadingSkeleton = (props: Props) => {
  return (
    <div
      className={`animate-pulse bg-white-stroke/40 border border-white-stroke rounded-lg`}
      style={{
        width: props.width,
        height: props.height,
      }}
    ></div>
  );
};

export { LoadingSkeleton };
