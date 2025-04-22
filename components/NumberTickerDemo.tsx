import NumberTicker from "@/components/ui/number-ticker";

const NumberTickerDemo = () => {
  return (
    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={11} />
    </p>
  );
}

export default NumberTickerDemo;
