interface WaveDividerProps {
  color?: string;
  flip?: boolean;
}

export function WaveDivider({ color = '#FFFFFF', flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
