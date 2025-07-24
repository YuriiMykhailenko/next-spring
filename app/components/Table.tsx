import Image from "next/image";

import leaderboardData from "./TableMock.json";
import { Button } from "./Button";

const TrendIcon = ({ trend }: { trend: string }) => {
  switch (trend) {
    case "up":
      return <Image width={16} height={16} src="/svg/arrow-up.svg" alt="" />;
    case "down":
      return <Image width={16} height={16} src="/svg/arrow-down.svg" alt="" />;
    default:
      return <Image width={16} height={16} src="/svg/minus.svg" alt="" />;
  }
};

export default function Table() {
  return (
    <div className="bg-black/10 text-white p-6">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-5xl font-bold mb-6">LLM Leaderboard</h1>
            <p className="text-gray-300 text-lg max-w-4xl">
              We evaluate LLMs on key benchmarks using the Eleuther AI, a
              framework to test LLMs on a large number of different evaluation
              tasks. The higher the score, the better the LLM.
            </p>
          </div>
          <Button>
            Submit your model
          </Button>
        </div>

        <div className="rounded-lg overflow-hidden w-full">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-gray-400 font-medium text-left py-4 px-4 w-12">
                  #
                </th>
                <th className="text-gray-400 font-medium text-left py-4 px-4">
                  Model Name
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  Average
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  ARC
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  HellaSwag
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  MMLU
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  TruthfulQA
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  Winogrande
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  GSM8K
                </th>
                <th className="text-gray-400 font-medium text-right py-4 px-4">
                  Usage
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((model) => (
                <tr
                  key={model.rank}
                  className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors duration-150"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <TrendIcon trend={model.trend} />
                      <span className="text-white">{model.rank}</span>
                    </div>
                  </td>
                  <td className="text-white font-medium py-4 px-4">
                    {model.modelName}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.average}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.arc}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.hellaSwag}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.mmlu}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.truthfulQA}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.winogrande}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.gsm8k}
                  </td>
                  <td className="text-white text-right py-4 px-4">
                    {model.usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
