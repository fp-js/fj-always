export default function always(arg) {
  return () => {
    return arg;
  };
}
