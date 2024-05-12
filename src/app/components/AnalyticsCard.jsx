export default function AnalyticsCard({ title, value, color, percentage }) {
  return (
    <div className="analytics-card bg-white p-4 rounded-lg mt-4 shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none">
      <div className="status flex items-center justify-between">
        <div className="info">
          <h3 className="mr-3 text-lg">{title}</h3>
          <h1>{value}</h1>
        </div>
        <div className="progress relative w-24 h-24 rounded-full">
          <svg
            width="100%"
            height="100%"
            className="w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" stroke="#E6E6E6" strokeWidth="10" />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={color}
              strokeWidth="10"
              strokeDasharray="100"
              strokeDashoffset="0"
            />
          </svg>
          <div className="percentage w-full h-full absolute top-0 flex items-center justify-center ">
            <h1>{percentage}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
